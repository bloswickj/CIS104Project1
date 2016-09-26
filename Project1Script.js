/**
 *   @author Bloswick, John (bloswickj@student.ncmich.edu)
 *   @version 0.0.1
 *   @summary Project 1 || created: 09.25.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let lotNum, numBed, numBath, sizeGarage, priceBase = 50000, priceBed = 17000, priceBath = 12500, priceGarage = 6000, priceTotal;

function main(){
    welcomeUser();
    setLotNum();
    setNumBed();
    setNumBath();
    setSizeGarage();
    setPriceTotal();
    printPriceTotal();
}

main();

function welcomeUser(){
    console.log(`\nWelcome to the River Falls Homes Construction Company's Home Design Application.\nPlease answer the following questions to help us build your dream home.`)
}

function setLotNum(){
    lotNum = PROMPT.question('\nPlease enter the lot number you would like: ');
}

function setNumBed(){
    numBed = PROMPT.question('\nPlease enter the number of bedrooms you would like: ');
}

function setNumBath(){
    numBath = PROMPT.question('\nPlease enter the number of bathrooms you would like: ');
}

function setSizeGarage(){
    sizeGarage = PROMPT.question('\nSpecify the size of garage you would like.\n(For example, if you would like no garage, enter 0. If you would like a one car garage enter 1.) \nPlease enter the size of the garage: ')
}

function setPriceTotal(){
    priceTotal = priceBase + (numBed * priceBed) + (numBath * priceBath) + (sizeGarage * priceGarage);
}

function printPriceTotal(){
    console.log(`\nThank you for your input. You have entered the following information.\nLot number: ${lotNum}\nNumber of beds: ${numBed}\nNumber of baths: ${numBath}\nSize of garage: ${sizeGarage}\nThe total cost of your house as configured is: ${priceTotal}`)
}