import React from 'react';
import { useParams } from 'react-router-dom';
import '../stylesheets/Letter.css'
import Snowfall from 'react-snowfall';

const Letter: React.FC = () => {
    const { recip }: any = useParams();

    const christmasFacts = [
    `“Jingle Bells” was written for Thanksgiving, not Christmas`,
    `In the Netherlands, Sinterklaas (the Dutch version of Santa Claus) arrives from Spain, not from the North Pole`,
    `In Germany, Poland, and Ukraine, finding a spider or a spider’s web on a Christmas tree is believed to be a harbinger of good luck`,
    `Two weeks before Christmas is the one of the two most popular times for couples to break up`,
    `In Armenia, the traditional Christmas Eve meal consists of fried fish, lettuce and spinach`,
    `Japanese people traditionally eat at KFC for Christmas dinner`,
    `The first artificial Christmas Tree wasn’t a tree at all. It was created out of goose feathers that were dyed green`,
    `In Germany, Heiligabend, or Christmas Eve, is said to be a magical time when the pure in heart can hear animals talking`,
    `US scientists calculated that Santa would have to visit 822 homes a second to deliver all the world’s presents on Christmas Eve, travelling at 650 miles a second`,
    `6.8 million - The number of iOS and Android devices that will be activated on Christmas day`,
    `The Star of Bethlehem - the one the wise men followed to find the little baby Jesus - was probably a comet, or Uranus`];

    const factChooser = christmasFacts[Math.floor(Math.random() * christmasFacts.length)];
    
    return (
        <div className="letter">
            <Snowfall />
            <h1>Merry Christmas, {recip}!</h1>
            <p>Christmas Fun Fact: {factChooser}</p><br/>
            <p>(Want more Christmas fun facts? Refresh the page!)</p>
        </div>
    );
};

export default Letter;