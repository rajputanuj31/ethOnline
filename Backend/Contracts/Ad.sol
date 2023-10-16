// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@uma/core/contracts/optimistic-oracle-v3/interfaces/OptimisticOracleV3Interface.sol";

contract SocialDApp {
    IERC20 public immutable defaultCurrency;
    OptimisticOracleV3Interface public immutable oov3;
    uint64 public constant assertionLiveness = 30;
    bytes32 public immutable defaultIdentifier;
    address _defaultCurrency = 0xe9448D94C9b033Ff50d3B14089043bD976fC1394;
    address _optimisticOracleV3 = 0x9923D42eF695B5dd9911D05Ac944d4cAca3c4EAB;

    constructor() {
        defaultCurrency = IERC20(_defaultCurrency);
        oov3 = OptimisticOracleV3Interface(_optimisticOracleV3);
        defaultIdentifier = oov3.defaultIdentifier();
    }

    struct Advertisement {
        address owner;
        string content;
        bool isApproved;
        bytes32 assertionId; 
    }

    mapping(bytes32 => Advertisement) public advertisements;
    bytes32[] public adIds; 

    function createAdvertisement(string memory content) public payable {
        uint256 bond = oov3.getMinimumBond(address(defaultCurrency));
        defaultCurrency.transferFrom(msg.sender, address(this), bond);
        defaultCurrency.approve(address(oov3), bond);
        bytes32 assertionId = oov3.assertTruth(
            bytes(content),
            msg.sender,
            address(this),
            address(0),
            assertionLiveness,
            defaultCurrency,
            bond,
            defaultIdentifier,
            bytes32(0)
        );

        advertisements[assertionId] = Advertisement(msg.sender, content, false, assertionId);
        adIds.push(assertionId);
    }

    // OptimisticOracleV3 resolve callback.
    function resolveAdvertisement(bytes32 adId) public {
        require(advertisements[adId].owner == msg.sender, "You are not the owner of this advertisement.");
        require(!advertisements[adId].isApproved, "Advertisement is already approved");
        bool isApproved = oov3.settleAndGetAssertionResult(advertisements[adId].assertionId);

        if (isApproved) {
            // The advertisement is approved.
            advertisements[adId].isApproved = true;
        }
    }

    // Function to check if an advertisement is approved.
    function isAdvertisementApproved(bytes32 adId) public view returns (bool) {
        return advertisements[adId].isApproved;
    }

    // Function to retrieve an advertisement by its index.
    function getAdvertisementByIndex(uint256 index) public view returns (Advertisement memory) {
        require(index < adIds.length, "Index out of range");
        bytes32 adId = adIds[index];
        return advertisements[adId];
    }

    // Just return the assertion result. Can only be called once the assertion has been settled.
    function getAssertionResult(bytes32 adId) public view returns (bool) {
        return oov3.getAssertionResult(advertisements[adId].assertionId);
    }

    // Function to handle resolved assertion.
    function assertionResolvedCallback(bytes32 assertionId, bool assertedTruthfully) public {}

    // Function to handle disputed assertion.
    function assertionDisputedCallback(bytes32 assertionId) public {}
}
