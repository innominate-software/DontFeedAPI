import React, { Component } from 'react';
import M from "materialize-css";
import MainNav from '../utils/MainNav';

import parallaxImg from '../../assets/img/games/dota/dota-bg.jpg';
import banner from '../../assets/img/games/dota/cover.jpg';
import Footer from "../utils/Footer";

/*
* This is the Page that generates for looking at a single LeagueProfilePage
* */

export default class LeagueProfilePage extends Component {
    constructor(props) {
        super(props)
        // method binding here
        // ex. this.refreshState = this.refreshState.bind(this);
        this.joinLeague = this.joinLeague.bind(this);
        this.state = {
            isLoggedIn: true
        }
    }

    componentDidMount() {
        M.AutoInit();
        window.addEventListener('load', this.handleLoad);
        console.log("DID MOUNT");
        document.addEventListener('DOMContentLoaded', function () {
            // var elems = document.querySelectorAll('.parallax');
            // var instances = M.Parallax.init(elems, {});
        });
    }

    componentWillUnmount() {
        console.log("UNMOUNT");
        window.removeEventListener('load', this.handleLoad)
    }

    handleLoad() {
        console.log("handle");
    }

    joinLeague(e) {
        e.preventDefault();
    }

    render() {
        let isLoggedIn = this.state.isLoggedIn;
        return (
            <div className="app-container container-fluid df-dark-background-2">
                <MainNav isLoggedIn={isLoggedIn} />
                <div className="parallax-container">
                    <div className="parallax-overlay">
                        <img className="parallax-league-img" src={banner}  alt="This is the logo for the league"/>
                        <h1 className="parallax-title">WePlay! Pushka League</h1>
                        <p className="parallax-subtitle">Season 1</p>
                        <button className="grey-btn btn" onClick={this.joinLeague}><i className="material-icons right">group_add</i>Join League</button>
                    </div>
                    <div className="parallax">
                        <img src={parallaxImg} alt="This is the banner that shows this league plays Dota 2" />
                    </div>
                </div>
                <div className="page-container">
                    <div className="row">
                        <div className="col m12">
                            <div className="row">
                                <ul className="tabs">
                                    <li className="tab col s4 df-tab df-dark-background df-light-grey-text"><a className="active df-light-grey-text" href="#standings">Current Standings</a></li>
                                    <li className="tab col s4 df-tab df-dark-background df-light-grey-text"><a className="active df-light-grey-text" href="#matches">Matches</a></li>
                                    <li className="tab col s4 df-tab df-dark-background df-light-grey-text"><a className="active df-light-grey-text" href="#support">Support</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/*Standings Tab Content*/}
                        <div id="standings" className="col s12">
                            <table className="highlight responsive-table df-">
                                <thead  className="df-table-head df-light-grey-text">
                                    <tr>
                                        <th>Standing</th>
                                        <th>Team</th>
                                        <th>Wins</th>
                                        <th>Losses</th>
                                        <th>%</th>
                                        <th>Streak</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="df-light-grey-text df-table-tr">
                                        <td>1st</td>
                                        <td>Team Secret</td>
                                        <td>11</td>
                                        <td>3</td>
                                        <td>0.785</td>
                                        <td>4W</td>
                                    </tr>
                                    <tr className="df-light-grey-text df-table-tr">
                                        <td>2nd</td>
                                        <td>HellRaisers</td>
                                        <td>11</td>
                                        <td>4</td>
                                        <td>0.733</td>
                                        <td>1W</td>
                                    </tr>
                                    <tr className="df-light-grey-text df-table-tr">
                                        <td>3rd</td>
                                        <td>Alliance</td>
                                        <td>10</td>
                                        <td>5</td>
                                        <td>0.666</td>
                                        <td>6W</td>
                                    </tr>
                                    <tr className="df-light-grey-text df-table-tr">
                                        <td>4th</td>
                                        <td>Virtus.pro</td>
                                        <td>10</td>
                                        <td>6</td>
                                        <td>0.625</td>
                                        <td>1W</td>
                                    </tr>
                                    <tr className="df-light-grey-text df-table-tr">
                                        <td>5th</td>
                                        <td>Team Liquid</td>
                                        <td>9</td>
                                        <td>6</td>
                                        <td>0.600</td>
                                        <td>5W</td>
                                    </tr>
                                    <tr className="df-light-grey-text df-table-tr">
                                        <td>6th</td>
                                        <td>VP.Prodigy</td>
                                        <td>9</td>
                                        <td>6</td>
                                        <td>0.600</td>
                                        <td>0W</td>
                                    </tr>
                                    <tr className="df-light-grey-text df-table-tr">
                                        <td>7th</td>
                                        <td>Natus Vincere</td>
                                        <td>9</td>
                                        <td>7</td>
                                        <td>0.562</td>
                                        <td>0W</td>
                                    </tr>
                                    <tr className="df-light-grey-text df-table-tr">
                                        <td>8th</td>
                                        <td>FlyToMoon</td>
                                        <td>8</td>
                                        <td>8</td>
                                        <td>0.500</td>
                                        <td>3W</td>
                                    </tr>
                                    <tr className="df-light-grey-text df-table-tr">
                                        <td>9th</td>
                                        <td>Ninjas in Pyjamas</td>
                                        <td>7</td>
                                        <td>7</td>
                                        <td>0.500</td>
                                        <td>0W</td>
                                    </tr>
                                    <tr className="df-light-grey-text df-table-tr">
                                        <td>10th</td>
                                        <td>OG</td>
                                        <td>7</td>
                                        <td>9</td>
                                        <td>0.437</td>
                                        <td>2W</td>
                                    </tr>
                                    <tr className="df-light-grey-text df-table-tr">
                                        <td>11th</td>
                                        <td>Team Spirit</td>
                                        <td>6</td>
                                        <td>10</td>
                                        <td>0.375</td>
                                        <td>0W</td>
                                    </tr>
                                    <tr className="df-light-grey-text df-table-tr">
                                        <td>12th</td>
                                        <td>OG Seed</td>
                                        <td>6</td>
                                        <td>11</td>
                                        <td>0.352</td>
                                        <td>0W</td>
                                    </tr>
                                    <tr className="df-light-grey-text df-table-tr">
                                        <td>13th</td>
                                        <td>Team Nigma</td>
                                        <td>4</td>
                                        <td>11</td>
                                        <td>0.266</td>
                                        <td>1W</td>
                                    </tr>
                                    <tr className="df-light-grey-text df-table-tr">
                                        <td>14th</td>
                                        <td>B8</td>
                                        <td>0</td>
                                        <td>12</td>
                                        <td>0.000</td>
                                        <td>0W</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/*Matches Tab Content*/}
                        <div id="matches" className="col s12">
                            <div className="row">
                                <div className="col s5">
                                    <h5>Today's Matches</h5>
                                </div>
                                <div className="col s2" />
                                <div className="col s5">
                                    <h5>Future Matches</h5>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col s5">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Home Team</th>
                                            <th>Away Team</th>
                                            <th>Map</th>
                                            <th>Date</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr className="df-light-grey-text df-table-tr">
                                            <td>Team Secret</td>
                                            <td>B8</td>
                                            <td>--</td>
                                            <td>08-08-2020</td>
                                        </tr>
                                        <tr className="df-light-grey-text df-table-tr">
                                            <td>Team Secret</td>
                                            <td>B8</td>
                                            <td>--</td>
                                            <td>08-08-2020</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="col s2" />
                                <div className="col s5">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>Home Team</th>
                                            <th>Away Team</th>
                                            <th>Map</th>
                                            <th>Date</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr className="df-light-grey-text df-table-tr">
                                            <td>Team Secret</td>
                                            <td>B8</td>
                                            <td>--</td>
                                            <td>08-08-2020</td>
                                        </tr>
                                        <tr className="df-light-grey-text df-table-tr">
                                            <td>Team Secret</td>
                                            <td>B8</td>
                                            <td>--</td>
                                            <td>08-08-2020</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <ul className="collapsible pink-text">
                                <li>
                                    <div className="collapsible-header">Previous Matches</div>
                                    <div className="collapsible-body pink-text">
                                        <table>
                                            <thead>
                                            <tr>
                                                <th>Home Team</th>
                                                <th>Away Team</th>
                                                <th>Map</th>
                                                <th>Result</th>
                                                <th>Score</th>
                                                <th>Date</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className="df-light-grey-text df-table-tr">
                                                <td>14th</td>
                                                <td>B8</td>
                                                <td>0</td>
                                                <td>12</td>
                                                <td>0.000</td>
                                                <td>0W</td>
                                            </tr>
                                            <tr className="df-light-grey-text df-table-tr">
                                                <td>14th</td>
                                                <td>B8</td>
                                                <td>0</td>
                                                <td>12</td>
                                                <td>0.000</td>
                                                <td>0W</td>
                                            </tr>
                                            <tr className="df-light-grey-text df-table-tr">
                                                <td>14th</td>
                                                <td>B8</td>
                                                <td>0</td>
                                                <td>12</td>
                                                <td>0.000</td>
                                                <td>0W</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/*Support Tab Content*/}
                        <div id="support" className="col s12">
                            {/*contacts*/}
                            <div className="card">
                                <div className="card-content">
                                    <div className="row contact-top-row">
                                        <div className="col s4">Name</div>
                                        <div className="col s4">Job</div>
                                        <div className="col s4">Contact</div>
                                    </div>
                                    <hr />
                                    <div className="row contact">
                                        <div className="col s4">Dewie</div>
                                        <div className="col s4">Website Coordinator</div>
                                        <div className="col s4">dewie@dontfeed.gg</div>
                                    </div>
                                    <div className="row contact">
                                        <div className="col s4">Janethan Doerty</div>
                                        <div className="col s4">Don't Feed Rep.</div>
                                        <div className="col s4">Contact Card</div>
                                    </div>
                                    <div className="row contact">
                                        <div className="col s4">Johnathan Doe</div>
                                        <div className="col s4">League Coordinator</div>
                                        <div className="col s4">Contact Card</div>
                                    </div>
                                </div>
                            </div>
                            {/*rules*/}
                            <div className="card">
                                <div className="card-content">
                                    <span className="card-title">Card Title</span>
                                    <p>This is as an example. but it needs to be word wrapped obviously</p>
                                    <p>Call of Duty: Modern Warfare Online Tournament
                                        Change Log:

                                        05/06 - GameBattles in-game Lobby must be used to complete
                                        matches within this tournament.

                                        04/15 - Backlot added, Arklov Peak & Vacant removed from 3v3 and
                                        under.

                                        02/25 - All silencers are now restricted.

                                        02/25 - All killstreaks are now restricted to fall in line with CDL Rules.




                                        GENERAL ONLINE TOURNAMENT RULES
                                        Major League Gaming Corp. (“Major League Gaming” or “MLG” or
                                        “Sponsor”), which also encompasses "GameBattles", will conduct
                                        online tournaments (each a “Tournament”) in accordance with: (i)
                                        MLG’s Terms of Service and MLG’s Privacy Policy; and (ii) these
                                        official rules (“Official Rules”), unless otherwise indicated. With
                                        respect to each specific Tournament, more detailed rules,
                                        Tournament start and end dates, description of potential prizes and
                                        other Tournament-specific information may be provided before the
                                        start of each Tournament.

                                        The current versions of MLG’s Terms of Service and Privacy Policy are
                                        available at:

                                        Terms of Service: https://accounts.majorleaguegaming.com/
                                        terms_of_service

                                        Privacy Policy: https://accounts.majorleaguegaming.com/
                                        privacy_policy

                                        If there is a conflict between the Terms of Service or Privacy Policy
                                        and these Official Rules, the provisions of these Official Rules govern.

                                        MLG RESERVES THE RIGHT TO CHANGE OR UPDATE THESE
                                        OFFICIAL RULES AT ANY TIME, FOR ANY REASON. CHANGES TO
                                        THESE OFFICIAL RULES WILL BE PROVIDED TO YOU OR POSTED
                                        ON THIS WEBPAGE BEFORE THE NEXT EVENT IN WHICH THE
                                        CHANGED RULES WILL APPLY. MLG SHALL DECIDE ALL MATTERS
                                        NOT HEREIN EXPRESSLY PROVIDED FOR AND SUCH DECISIONS
                                        SHALL BE FINAL AND BINDING ON PARTICIPANTS. RULINGS MAY
                                        BE MADE OUTSIDE THE SCOPE OF THESE OFFICIAL RULES IN
                                        ORDER TO PRESERVE FAIR PLAY AND TOURNAMENT INTEGRITY.
                                        PARTICIPATION IN A TOURNAMENT CONSTITUTES YOUR FULL
                                        AND UNCONDITIONAL AGREEMENT TO THESE OFFICIAL RULES,
                                        MLG’S TERMS OF SERVICE, MLG’S PRIVACY POLICY, AND MLG’S
                                        DECISIONS, WHICH ARE FINAL AND BINDING IN ALL MATTERS
                                        AND IN ALL RESPECTS. PARTICIPATION AND/OR WINNING A PRIZE
                                        (IF APPLICABLE) IS CONTINGENT UPON FULFILLING ALL
                                        REQUIREMENTS (INCLUDING ELIGIBILITY REQUIREMENTS) SET
                                        FORTH IN THESE OFFICIAL RULES.

                                        THESE OFFICIAL RULES AND ALL DISPUTES RELATED TO OR
                                        ARISING OUT OF YOUR PARTICIPATION IN A TOURNAMENT ARE
                                        GOVERNED BY A BINDING ARBITRATION CLAUSE IN SECTION 11
                                        BELOW AND A WAIVER OF CLASS ACTION RIGHTS. THAT CLAUSE
                                        AFFECTS YOUR LEGAL RIGHTS AND REMEDIES, AND YOU SHOULD
                                        REVIEW IT CAREFULLY BEFORE ACCEPTING THESE OFFICIAL
                                        RULES.

                                        VOID WHERE PROHIBITED.



                                        Lobby Information & Tips:

                                        Please use the GameBattles in-game lobby to complete your match.
                                        Private/Custom lobbies must NOT be used unless instructed to do so
                                        by a GameBattles Tournament Official.
                                        If you're more than 10 minutes late (from match scheduled start
                                        time), the Beta lobby will automatically forfeit you and you will not
                                        be put back in.
                                        The GameBattles Beta lobby can and will start a player down if all of
                                        your team is not there 10 minutes after the scheduled match time.
                                        Playing in multiple tournaments will run the risk of you being
                                        automatically forfeited by the system should you not be available for
                                        any of your other matches.
                                        If you face any issues whatsoever with the Beta lobby, please restart
                                        Modern Warfare application and try again. Should this not resolve
                                        your issue, please contact the tournament support team immediately.
                                        Please ensure you're capturing proof of any issues you're facing. This
                                        will allow us to handle the situation accordingly. Failure to provide
                                        proof may result in the outcome of a match standing.


                                        Settings
                                        Game Rules
                                        Activision ID: Players should provide their exact Activision ID.
                                        (Example Activision ID: Example#7412898) Your Activision ID can be
                                        found here.
                                        Gamertag: You must provide a gamertag that is linked to your
                                        GameBattles profile. You should designate what console you are on
                                        in the gamertag section. Example: "PSN - GameBattles")
                                        The hosting team is responsible for setting up a private lobby match
                                        with the correct settings and the correct map. If the hosting team
                                        starts the game with the wrong settings, it will result in penalties for
                                        that map/mode. Please refer to the Penalties section of this rules
                                        page.
                                        Restricted Items and Incorrect Settings: For search and destroy, use
                                        of any restricted item(s) will result in the loss of the round(s) the
                                        item(s) were used in if it affected game play. If the hosting team
                                        hosts the lobby with incorrect settings, the hosting team will forfeit
                                        each round that the incorrect setting affected gameplay. If a game is
                                        hosted out of order, the hosting team will forfeit that game that was
                                        played out of order. For example, if Search and Destroy - Gun Runner
                                        is the second game and played as the first game, the hosting team
                                        will forfeit Search and Destroy – Gun Runner. The correct first game/
                                        map will need to be played.
                                        Minimum Players to Start: All non CDL tournaments which are SnD
                                        cannot be played any more than 1 player down. Doing so may result
                                        in a forfeit of the match.

                                        Item Restrictions:




                                        (None of these items can be used, doing so may result in potential
                                        forfeits)


                                        Weapons:
                                        Launchers
                                        Shotguns
                                        Riot Shield
                                        FAL
                                        All LMG
                                        All Marksman Rifles
                                        Attachments:
                                        Underbarrel
                                        Grenade Launchers (All M203s)
                                        12 Guage Deputy
                                        Snake Shot
                                        Thermal Scope
                                        1mW Laser
                                        mW Laser
                                        Tac Laser
                                        Weapon Perks:
                                        Frangible - Wounding
                                        Frangible - Disabling
                                        Gear / Equipment:
                                        Snapshot Grenade
                                        Heartbeat Sensor
                                        Decoy
                                        C4
                                        Proximity Mine
                                        Claymore
                                        Stim
                                        Molotov Cocktail
                                        Gas Grenade
                                        Perks:
                                        Overkill
                                        Restock
                                        High Alert
                                        Tracker
                                        Shrapnel
                                        Hardline
                                        Killchain
                                        Quick Fix
                                        Field Upgrades:
                                        Recon Drone
                                        Tac Insertion
                                        Weapon Drop
                                        EMP Drone
                                        Stopping Power
                                        Weapons:
                                        Launchers
                                        Shotguns
                                        Riot Shield
                                        FAL
                                        All LMG
                                        All Marksman Rifles
                                        AS Val
                                        Attachments:
                                        Underbarrel
                                        Grenade Launchers (All M203s)
                                        12 Guage Deputy
                                        Snake Shot
                                        Thermal Scope
                                        1mW Laser
                                        mW Laser
                                        Tac Laser
                                        Silencers
                                        (All Silencers)
                                        Weapon Perks:
                                        Frangible - Wounding
                                        Frangible - Disabling
                                        Gear / Equipment:
                                        Snapshot Grenade
                                        Heartbeat Sensor
                                        Decoy
                                        C4
                                        Proximity Mine
                                        Claymore
                                        Stim
                                        Molotov Cocktail
                                        Gas Grenade
                                        Perks:
                                        Overkill
                                        Restock
                                        High Alert
                                        Tracker
                                        Shrapnel
                                        Hardline
                                        Killchain
                                        Quick Fix
                                        Field Upgrades:
                                        Recon Drone
                                        Tac Insertion
                                        Weapon Drop
                                        EMP Drone
                                        Stopping Power
                                        Killstreaks:
                                        All Killstreaks
                                        Specialist Perks
                                        Clarification: Use of a Specialist Perk will result in a full map forfeit
                                        Map Rotation (Search & Destroy):
                                        Search and Destroy - Gun Runner
                                        Search and Destroy - Rammaza
                                        Search and Destroy - St. Petrograd
                                        Search and Destroy - Crash
                                        Search and Destroy - Hackney Yard
                                        Search and Destroy - Backlot

                                        Bracket Play
                                        Single Elimination: After losing a match, teams will be eliminated
                                        from the bracket
                                        Default Start Time: All round one (1) matches have the same default
                                        start time. After round one (1), all matches have a unique start time
                                        that is dependent upon the time at which the teams’ previous round
                                        results were submitted. Matches must be started by their start time
                                        and played until completion. Postponing matches is only at the
                                        discretion of Online Tournament staff.
                                        Double Forfeit: If a match is not played and neither team submits
                                        contacts Online Tournament staff requesting the forfeit win, or both
                                        teams otherwise forfeit a game/match, the game/match win will be
                                        awarded to the higher seeded team.
                                        Seeding: Teams will be randomly seeded at the close of registration.
                                        Seeds are done in ascending order. The higher seed is determined
                                        by the team with the seed closest to zero (0).
                                        Example: Seed four (4) is a higher seed than seed ten (10).
                                        Game Types in Rounds: Game types will be set for each round of the
                                        bracket. These game types must be played and may not be
                                        substituted out.

                                        All Matches
                                        Warm-Up: No warm-up or practice games are permitted once the
                                        match’s first game has begun. If a match is played before the
                                        scheduled time, it will not be considered a warm-up and will count as
                                        the official results.
                                        Delays: Teams may not delay the start of a match beyond its
                                        scheduled start time, without the approval of a tournament official.
                                        Teams may delay a match between games for up to five minutes.
                                        Teams can request that a tournament official enforce this five minute
                                        time limit. After five minutes of a tournament official enforced delay,
                                        if the delaying team does not have the minimum required players,
                                        they will forfeit the match.
                                        Lag: In the event that lag occurs, the game should be completed. The
                                        player(s) that are experiencing lag should take video proof, and
                                        provide it to tournament live support after the game has concluded.
                                        If lag is occuring, it is recommended that multiple players provide
                                        proof of the lag. Leaving the game prematurely may result in a forfeit
                                        of the round or game.
                                        Disconnections: If a player disconnects within the first thirty (30)
                                        seconds and/or before the first kill, the game should be ended. All
                                        players must leave the match to end the game.
                                        If a player disconnects after the first thirty seconds (30) and/or the
                                        first kill, the map must be continued and the missing player should
                                        be reinvited to the lobby. If the team with the missing player leaves
                                        the lobby, their team may forfeit the round/game in question.
                                        Normal Boundaries: Players who move their character outside of the
                                        normal boundaries of a map may forfeit the game. Moving outside of
                                        the normal boundaries of a map includes but is not limited to part of
                                        the character’s body passing through what should be a non-
                                        permeable surface or object, and moving into any area from which
                                        your character registers shots on an opponent who is not able to
                                        register shots on your character.
                                        After the match lobby has been created, only eligible players on the
                                        two teams and staff members may be invited/join. If an ineligible
                                        player joins a game, the game must be ended if the player affects the
                                        game and/or doesn't leave within 30 seconds of joining. If a Player is
                                        found to have invited an ineligible player to a game, they will forfeit
                                        the game.





                                        Reporting
                                        No Shows: The No Show grace period time is 10 minutes after the
                                        match's original start time. For example, if a match is scheduled for
                                        10:00 PM, the no show time for this match would be 10:10 PM. In
                                        order to contact a Tournament Official use Live Support. Prior to any
                                        forfeits being made, a tournament admin must confirm that a team
                                        has failed to show up for the match.
                                        Tournament No Show Procedure: A tournament admin will attempt
                                        to contact the team that has failed to show up through the console
                                        messaging system. You may also be contacted through the
                                        GameBattles private messaging system.
                                        Time Limit: Both teams must report the match results within 10
                                        minutes of its completion. Failure to report the match results on time
                                        or respond to any messages that you receive from a tournament
                                        official may result in your team receiving the loss. Any team leader/
                                        captain that fails to report their tournament match within ten (10)
                                        minutes after the conclusion of their match or upon receiving
                                        notification from support staff to do so, may be suspended from the
                                        site for up to twenty-four (24) hours.
                                        Cheating:Breaking any rule and any form of cheating, glitching,
                                        abusing in-game mechanics, or unsportsmanlike behavior may result
                                        in a forfeit of a game, match, or ban from GameBattles. Cheating,
                                        glitching, and abusing in-game mechanics accusations must be
                                        verified by a tournament official. In order to contact a tournament
                                        official use Live Support. If a Tournament Official isn’t immediately
                                        available, a Ticket must be submitted immediately, along with proof,
                                        screenshot or video, of the cheating. Punishable unsportsmanlike
                                        behavior includes, but is not limited to, excessive use of foul or
                                        degrading language. For all cheating claims, the burden of proof is
                                        on the accuser.
                                        Proof: We highly recommend that proof is taken with the console
                                        built-in recording system to gather proof. At least one member of
                                        each team should take a video or screenshot(s) of each game’s
                                        results in case proof is needed for a dispute. All proof should be
                                        clearly visible and contain the players names', and their number of
                                        kills.
                                        Disputes: In order to dispute game results, players/teams must notify
                                        a tournament official via Live Support that they would like to protest
                                        the game before a new game has begun. In order to dispute match
                                        results, players/teams must notify a tournament official, via Live
                                        Support, that they would like to protest the match no longer than 15
                                        minutes after the end of the match. If Live Support is unavailable, a
                                        Ticket must be submitted.
                                        Concessions:Teams may request that they be allowed to concede
                                        victory of a game. Teams may request that their opponent not
                                        receive a forfeit penalty. A tournament official must be contacted
                                        with these requests. In order to contact a tournament official use Live
                                        Support.
                                        Dispute Evidence: In the event of a dispute, please provide your
                                        video / screenshot proof to Tournament Live Support. In the event
                                        that you are not able to access tournament live support, a Match:
                                        Scores Dispute ticket should be created. The URL for the image(s)/
                                        video must be attached to a dispute ticket. The issue must be clearly
                                        stated as well as the time in the video in which the issue occurred,
                                        and/or what the tournament official should be looking for in the
                                        picture/video.





                                        Support
                                        Live Support & Tickets: Tournament support can be requested by
                                        accessing Live Support. If Live Support is unavailable, teams may
                                        create a Support Ticket. For issues with registration, missing
                                        tournament achievements, and general tournament questions, a
                                        “Tournament Question/Issues” Ticket should be created. For all
                                        tournament match issues, a “Match: Scores Dispute” Ticket should be
                                        created.
                                        Live Support Limit: Only one (1) Player per team should use Live
                                        Support for in-game issues and that player should stay on live
                                        support until a tournament official answers their call.
                                        Listen for Instructions: If a tournament official is called into a private
                                        match, players must keep the tournament official un-muted at all
                                        times.
                                        Abuse: Verbal and/or written abuse of a tournament official will not
                                        be tolerated through any medium. This includes, but is not limited to,
                                        voice communications in game, voice messages, live support chats,
                                        written messages on GameBattles, Twitter, Facebook, etc. Violators of
                                        this rule may be disqualified from the Tournament.
                                        Technical Issues: If you are having technical issues, please contact
                                        support@mlg.tv.
                                        Decisions Are Final:Tournament staff have the final decision in all
                                        matters related to this competition. If a player feels the decision is
                                        unjust and/or goes against the rules listed for this competition, an
                                        Arena: Staff Report Ticket should be submitted for review. Please
                                        include any information and proof pertinent to the issue
                                        Host and Side Choice for Each Game: The higher seeded team at
                                        match time must host the first game. The lower seeded team will
                                        host the second game. This will alternate until a tie break game is
                                        required. The team with the higher combined Search and Destroy
                                        rounds won for all games leading up to the tie breaker in that match
                                        will host the tie breaker game. The team that does not host must
                                        choose a side to play on.





                                        Penalties
                                        Equipment: Players may not use a Turbo controller, a Button Macro
                                        controller or Keyboard/Mouse. Turbo controllers allow Players to
                                        press a button that results in their Character performing a set of
                                        actions that would normally require the Player to press the same
                                        button multiple times. Button Macro controllers allow Players to
                                        press a button that results in their Character performing a set of
                                        actions that would normally require the Player to press multiple
                                        buttons. The team using the ineligible equipment will forfeit that
                                        games of the match it was used on. If administration suspects a
                                        player is using illegal equipment, at administrations discretion the
                                        game is subject to being replayed and the suspected player will be
                                        required to record their activity to ensure fair play.
                                        Evading a Ban: Any player found evading a ban may be disqualified
                                        from this competition. If that player participates in any part of the
                                        match during the first tournament round, that team will forfeit the
                                        games that were played. If that player participates in any part of a
                                        match after the first tournament round, that team will be disqualified
                                        from the competition. The offending player(s) will be suspended
                                        from GameBattles for up to ninety (90) days.
                                        Account Recovering: Tournament participants are forbidden to allow
                                        others to play in this competition in place of them by sharing
                                        accounts. The offending team will forfeit the entire match. The
                                        offending players will be suspended from GameBattles for a
                                        minimum of thirty (30) days.
                                        Modified Console/Hacks/Mods: Use of in game hacks and/or mods
                                        will result in the immediate disqualification of that team. The
                                        player(s) using hacks and/or mods will be suspended from
                                        GameBattles for up to seven hundred and thirty (730) days. The rest
                                        of the team will be suspended for up to ninety (90) days.
                                        Lack of Cooperation: Failing to comply with Support Staff's
                                        directions and/or requests may result in the forfeit of round(s), a
                                        game, or the entire match. Verbal or written abuse of a staff member
                                        will result in a suspension from GameBattles for up to twenty (20)
                                        days.
                                        Warnings: Tournament Officials may issue a Warning for infractions
                                        including, but not limited to, the use of profane words or phrases,
                                        discussion of controversial religious topics, threats/implied violence,
                                        lack of punctuality, and failure to follow tournament staff instructions.
                                        All warnings and penalties are given to the team, not the individual
                                        player. Teams may also be warned or incur a penalty for repeated
                                        warnings in regards to the same rule. Depending on the severity of
                                        the action or conduct by a player, multiple warnings may be handed
                                        out for a single infraction, up to and including bypassing warnings
                                        and resulting in an immediate penalty.
                                        Penalties: After a maximum of three (3) warnings, post-warning
                                        penalties, including but not limited to the following, may be
                                        enforced: A Game Forfeit, a Match Forfeit, and a GameBattles Site
                                        Ban for a specified duration. Penalties may also be combined with
                                        other penalties.
                                        Disqualification: Some infractions may result in warnings and
                                        penalties being bypassed with immediate disqualification from the
                                        remainder of the Tournament being enforced. Examples of behavior
                                        or actions that could result in this are physical acts violence, cheating,
                                        collusion/manipulating the bracket, drug/substance abuse on-site,
                                        any illegal activities, betting or gambling on a tournament or match
                                        results, hate speech, and harassment.

                                        General
                                        Rules: The rules may be updated and modified at any time, for any
                                        reason. Rulings may be made outside the scope of these rules in
                                        order to preserve fair play and tournament integrity. Participation in
                                        this Tournament constitutes entrant’s full and unconditional
                                        agreement to these Rules, the Official Rules on the Prize tab, and
                                        Tournament Official decisions, which are final and binding in all
                                        matters related to this tournament. Winning a prize is contingent
                                        upon fulfilling all requirements set forth herein
                                        Eligibility: Residents of the United States only. VOID IN AZ, MD, CT
                                        AND WHERE OTHERWISE PROHIBITED BY LAW. Employees of MLG,
                                        the Tournament's participating sponsors and their advertising
                                        agencies, and members of the immediate family of any such persons,
                                        are not eligible to participate and win. For the complete list of
                                        restrictions/limitations, please visit the prize tab. Any team found
                                        using a restricted player may be disqualified from the tournament
                                        without a refund of credits.
                                        Participants must be eighteen (18) years of age or older to be
                                        eligible to compete in this competition.
                                        Participants may only participate in the Tournament so long as their
                                        participation does not violate applicable local laws and/or the
                                        federal, state and local laws of the United States, including any such
                                        laws applicable to jurisdictions outside the United States. Participants
                                        are responsible for ensuring that their participation in the
                                        Tournament is compliant with all laws of the jurisdiction(s) in which
                                        they are a resident, and Participants must take all steps necessary to
                                        ensure such compliance.
                                        Notwithstanding anything to the contrary contained herein or any
                                        specific Tournament rules, MLG shall have the right in its sole and
                                        absolute discretion to determine the eligibility of any and all
                                        Participants. Participants acknowledge and agree that their eligibility
                                        status as determined by MLG may change at any time and such
                                        determination shall be final.
                                        Players: Players must utilize their own unique Username for
                                        competing on GameBattles. This unique Username must have been
                                        registered on GameBattles personally by the user. The registered
                                        Username must contain the correct and complete Name, Address,
                                        and Email of the user. If a false Name, Address, or Email was entered,
                                        the user voids the privilege to participate in this Tournament and/or
                                        receive any prizes. As a user, you are personally responsible for
                                        accepting any invitation to a Team. If you receive a paid invite to a
                                        team, you accept the credits used for entry as your own in order to
                                        participate in this competition. If you do not personally accept a
                                        Team invitation, you may be disqualified from the Tournament and
                                        forfeit any prize. All MLG/GameBattles accounts, teams, roster spots
                                        and crowns are property of Major League Gaming Inc. Any
                                        advertising of, or attempts to buy, sell, trade, or exchange any
                                        aforementioned item is strictly prohibited. This also includes offering
                                        to forfeit matches in exchange for any item or service. Violators will
                                        be removed from all MLG/GameBattles online properties and all
                                        related accounts terminated. Furthermore, MLG reserves the right to
                                        deactivate, reset or temporarily suspend any account or team,
                                        without notice, that violates our Terms of Use.
                                        Team Management: If leadership of a tournament team is transferred
                                        to another member of that team, that person gives up all team
                                        editing privileges (adding/removing players, disbanding team, ect.).
                                        This includes any player/team "credit sponsors". As a warning,
                                        credits will not be refunded for any players the "credit sponsor" pays
                                        for if he/she is removed from the roster after leadership is
                                        transferred.
                                        Valid Gamertags: All Gamertags and Activision IDs on a team’s roster
                                        must be valid. Each user on the Roster must legitimately own their
                                        Gamertag and Activision ID. Gamertags may not contain foul
                                        language, disparaging remarks, hateful or racist names. Any changes
                                        to a team roster after the tournament has been seeded is at the
                                        discretion of tournament staff. Players may only be added to a roster
                                        (username and gamertag) up until the end of that team's first match.
                                        Privacy & Impersonation: Individuals are prohibited from sharing
                                        account information stored on GameBattles with another person for
                                        any reason. This includes, but is not limited to, the following:
                                        usernames, passwords, gamertags, email accounts, etc. Individuals
                                        may not use another Player’s Account in a Game. Individuals may not
                                        allow another Player to use their Account in a Game. Players who
                                        break this rule may be disqualified from the Tournament.
                                        Definition of Non-Amateurs: Players that have won cash prizing
                                        greater than or equal to $150 from any Online Tournaments or
                                        Ladders for the game and console on which the tournament is being
                                        held. If a player takes credits in place of a cash prize, they are still no
                                        longer considered an amateur and are ineligible to play in amateur
                                        tournaments for the game/console if the players total prizing is
                                        greater than or equal to $150. If any player is found playing on a
                                        team that falls into one of the above categories, the whole team will
                                        be disqualified and credits will not be refunded. Anyone living in the
                                        same household as a Non Amateur player will also be considered
                                        non Amateur and are not allowed to participate in Amateur
                                        Tournaments. Additionally, players found evading amateur status are
                                        subject to being banned for up to thirty (30) days.
                                        Definitions:
                                        Game - One (1) competition played on one (1) map between two (2)
                                        teams
                                        Game Mode - Competition type with specific win condition(s) (ex.
                                        Search and Destroy)
                                        Match - a series made up of multiple games.
                                        Game Type - Combination of game mode and map (ex. Search and
                                        Destroy - Gun Runner)
                                        Team Content: The Leader of a team can change the team name,
                                        blast message, avatars and website links. The images/information
                                        submitted must be appropriate. Attempting to bypass the automatic
                                        censor by misspelling, inserting spaces or symbols, transposing
                                        letters, using look-alike symbols, or any other method is not allowed.
                                        Teams that attempt to bypass the censor will be subject to penalties.
                                        Sponsor: Major League Gaming Corp. 250 Hudson Street 6th Floor
                                        New York, New York 10013

                                        Description of Tournament/Participation.
                                        Dates of Tournament: The Tournament will be conducted beginning
                                        and ending on the dates provided by MLG for each individual
                                        Tournament.
                                        How To Enter: Participants (“Participants”) must be an active and
                                        registered member of the GameBattles.com site (the “GameBattles
                                        Site”) to enter. You may register for the Tournament by logging on to
                                        the GameBattles Site and completing the free on-line registration
                                        form at https://accounts.majorleaguegaming.com/account/new.
                                        Tournament registration is on a first come first serve basis and is
                                        open until all applicable Tournament spots are filled. One entry per
                                        person per Tournament. Valid Tournament entries must contain all
                                        information requested. Incomplete and/or multiple entries will be
                                        disqualified. All entries become the property of the Sponsor and will
                                        not be acknowledged or returned. Sponsor not responsible for lost,
                                        late, incomplete, misdirected or incomplete entries
                                        Acceptance of these Official Rules.
                                        Each Participant must agree to these Official Rules to participate in
                                        the Tournament. Participant may accept these Official Rules by either
                                        of the following methods:
                                        Registering for a Tournament on the GameBattles Site.
                                        Participating in any game or match that is part of a Tournament.
                                        Potential Winners of Prize(s).
                                        Potential winners (“Potential Winners”) must comply with these
                                        official rules and winning is contingent upon fulfilling all
                                        requirements. Potential Winners shall have no right to any prize
                                        unless the conditions set forth in these and any other applicable rules
                                        are satisfied. Potential Winners will be notified via Email and/or
                                        Private Message (PM) on the GameBattles Site within approximately
                                        seven (7) days after the end of the Tournament. Each Potential
                                        Winner is required to follow the instructions in the email and/or PM
                                        within five (5) days of notification. Each Potential Winner of a prize
                                        will be required to fill out and sign via RightSignature, within seven
                                        (7) days of receipt, an Affidavit of Eligibility and Liability/Publicity
                                        Release Form, applicable Parental Consent Form, as well as
                                        applicable Tax Forms in order to be eligible to claim a prize.
                                        Following the Sponsor’s verification of eligibility and compliance
                                        with the terms of these rules, the Potential Winner will be declared
                                        the winner of the prize. If a Potential Winner cannot be contacted,
                                        does not respond, or fails to sign and return the required
                                        documentation within fourteen (14) days of the first notification
                                        attempt, the Potential Winner forfeits his or her eligibility to claim a
                                        prize.
                                        Potential Winners are limited to one prize package per Tournament.
                                        A description of the potential prizes, if any, will be provided for each
                                        individual Tournament. Prizes are non-transferable and not
                                        exchangeable for any other prize. In the case of unavailability of
                                        prize, Sponsor reserves the right, in its sole discretion, to substitute a
                                        prize of equal or greater value. All taxes, gratuities and unspecified
                                        expenses are the sole responsibility of winner. Potential Winners who
                                        are eligible for award of a prize assume all liability for use of the
                                        prize
                                        Requirements of Potential Winners and Limitations.
                                        Unless otherwise specified for an individual Tournament, all
                                        Participants must be legal residents of the United States (subject to
                                        the restrictions below) and at least 13-years old as of date of entry.
                                        Children under 13 are not permitted to register on this Site or for any
                                        Tournaments, and Sponsor will not knowingly collect information
                                        from children under age 13. If requested by MLG, winners must
                                        provide a copy of his/her government issued photo ID with proof of
                                        age. A parent or guardian of any Participant who is a minor in his/her
                                        jurisdiction (under 18 years old, except in Alabama and Nebraska
                                        where a minor is under 19 years old) must sign a release on behalf of
                                        the minor to be eligible to receive a prize. Minors who do not have a
                                        signed release will not be eligible to receive a prize. Employees of
                                        the Sponsor, the Tournament's participating sponsors and their
                                        advertising agencies, and members of the immediate family of any
                                        such persons are not eligible to participate and win. Eligibility to
                                        receive a prize is contingent upon fulfilling all requirements set forth
                                        herein.
                                        VOID WHERE OTHERWISE PROHIBITED BY LAW.
                                        Conditions.
                                        MLG or the Sponsor are not responsible for any incorrect or
                                        inaccurate information, whether caused by users of the Site or by any
                                        of the equipment or programming associated with or utilized on the
                                        Site or in any Tournament or by any technical or human error, which
                                        may occur in the processing of registrations, entries into any
                                        Tournament, or otherwise in connection with any Tournament
                                        including, without limitation, any technical limitation or other event
                                        that results in the disqualification or loss of ranking status of any
                                        Participant in any Tournament. MLG or the Sponsor assume no
                                        responsibility for any error, omission, interruption, deletion, defect,
                                        delay in operation or transmission, or communications line failure
                                        relating to the Site or any Tournament, or for any theft or destruction
                                        of or unauthorized access to, or alteration of, any registration
                                        materials or entries. MLG or the Sponsor are not responsible for any
                                        problems or technical malfunction of any telephone, network,
                                        satellite, cable or lines, computer, on-line-systems, servers or
                                        providers, computer equipment, software, failure of e-mail,
                                        registrations or entry submissions on account of technical problems
                                        or traffic congestion on the Internet or at any web site or
                                        combination thereof in connection with the Site or any Tournament,
                                        including, without limitation, any technical limitation or other event
                                        that results in the disqualification or loss of ranking status of any
                                        Player in any Game. MLG or the Sponsor are not responsible for
                                        injury or damage to Participants' or to any other person's computer
                                        related to or resulting from participating, downloading or uploading
                                        materials from the Site or in connection with any Tournament. Any
                                        use of robotic, automatic, micro, programmed or like entry methods
                                        will void all such entries by such methods, and disqualify any person
                                        using such methods. If, for any reason, any Tournament, in Sponsor's
                                        sole opinion, is not capable of running as planned, including, but not
                                        limited to, by reason of infection by computer virus, bugs, worms,
                                        tampering, unauthorized intervention, fraud, technical failures, or any
                                        other causes beyond the control of MLG or the Sponsor which, in
                                        MLG or the Sponsor's judgment, corrupts or affects the
                                        administration, security, fairness, integrity or proper conduct of any
                                        Tournament, MLG or the Sponsor reserve the right in their discretion
                                        to cancel, terminate, modify or suspend the Tournament and proceed
                                        in such a manner as may be deemed fair and equitable by Sponsor in
                                        its sole discretion.
                                        IN NO EVENT WILL SPONSOR, MLG, ITS EMPLOYEES, ITS
                                        VOLUNTEERS, ITS PARENTS, AFFILIATES, SUBSIDIARIES, SUPPLIERS,
                                        AND RELATED COMPANIES, ITS SPONSORS, ADVERTISING OR
                                        PROMOTION AGENCIES OR PARTNERS OR ANY OF THEIR
                                        RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES,
                                        REPRESENTATIVES AND AGENTS, BE RESPONSIBLE OR LIABLE
                                        FOR: (A) ANY INDIRECT, INCIDENTAL, CONSEQUENTIAL OR
                                        PUNITIVE DAMAGES OF ANY KIND UNDER ANY THEORY
                                        (WHETHER CONTRACT, TORT, WARRANTY OR OTHERWISE),
                                        INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS OR
                                        TOURNAMENT PRIZES, ARISING OUT OF ANY PARTICIPANT'S
                                        ACCESS TO AND USE OF THE SITE OR PARTICIPATION IN ANY
                                        TOURNAMENT OR (B) FOR ANY DAMAGES OF ANY KIND IN
                                        EXCESS OF ANY FEE PAID BY PARTICIPANT (IF ANY) TO ENTER THE
                                        APPLICABLE TOURNAMENT. WITHOUT LIMITING THE FOREGOING,
                                        EVERYTHING ON THE SITE AND IN CONNECTION WITH ANY
                                        TOURNAMENT IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY
                                        KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT
                                        LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY,
                                        FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT.
                                        SOME JURISDICTIONS DO NOT ALLOW THE LIMITATION OR
                                        EXCLUSION OF CERTAIN LIABILITY OR WARRANTIES SO SOME OF
                                        THE ABOVE LIMITATIONS MAY NOT APPLY TO PARTICIPANT. IN
                                        SUCH JURISDICTIONS, SPONSOR'S LIABILITY IS LIMITED TO THE
                                        GREATEST EXTENT PERMITTED BY LAW.
                                        Publicity.
                                        By participating, all Participants and Potential Winner(s) grant MLG,
                                        its parent, affiliates, subsidiaries, Tournament sponsors and their
                                        respective licensees, designees and assigns, a royalty free, fully paid-
                                        up, perpetual , irrevocable, non-exclusive right and license (with the
                                        right to grant sublicenses), throughout the universe, in any and all
                                        manner and media now or hereafter devised, to: (i) use their names,
                                        nick-names, pseudonym, persona, gamer-tags, characters,
                                        photographs, voices, biographical material and likenesses and to use
                                        the same in any manner or media now or hereafter known, in
                                        connection with the Tournament, other tournaments, MLG’s services
                                        and the advertising and promotion thereof, including, without
                                        limitation, in all forms of television, online, radio and other
                                        advertisements, promotions and publicity for MLG, the Tournament,
                                        other tournaments and other audio-visual works (collectively
                                        “Materials”); (ii)broadcast, reproduce, distribute and exhibit such
                                        photographs, films and/or recordings, the Tournament and/or the
                                        Materials, in any manner whatsoever, by any and all means, media,
                                        devices, processes and technology now or hereafter known or
                                        devised anywhere in the universe in perpetuity; (iii) edit, modify,
                                        adapt, make derivative works from, copyright and otherwise exploit
                                        any of the foregoing; (iv) use and display their names and all
                                        derivatives thereof (including all professional names, team names,
                                        gamer tags, nicknames or aliases), images, likenesses, biographical
                                        material, logos, trademarks and designs, in and in connection with
                                        the exploitation of the Tournament, the Materials, MLG and any
                                        derivative works, including the marketing and promotion thereof;
                                        and (v) use and display any name, trademarks and logos of any
                                        sponsor of a team (hereinafter, a “Team Sponsor”), in and in
                                        connection with the exploitation of the Tournament, the Materials,
                                        MLG and any derivative works, including the marketing and
                                        promotion thereof. For the avoidance of doubt, the rights granted
                                        herein include any and all necessary rights and licenses MLG may
                                        need to effectuate the terms of the rights granted. Participant
                                        acknowledges that his/her appearance or participation in the
                                        Tournament or any event related thereto shall not constitute a
                                        performance and that Participant shall not be entitled to any
                                        compensation for such appearance, nor to any guild or union
                                        payments for use or reuse of such appearance. If Participant is a
                                        Team Owner, Participant acknowledges that he/she has obtained all
                                        necessary permissions and clearances with respect to the trademarks
                                        and logos of any Team Sponsor and MLG’s exploitation of the
                                        Tournament, Materials and/or any trademarks and logos of any Team
                                        Sponsor, as set forth in these Official Rules, shall not violate any such
                                        permissions or clearances nor the rights of any Team Sponsor.
                                        Release.
                                        Participant hereby acknowledges and agrees that participation in the
                                        Tournament may involve serious risk of injury. Participant understand
                                        that by participating in the Tournament, Participant is waiving his/her
                                        right to sue (as provided in Section 11 of these Official Rules) if
                                        Participant is injured while participating in the Tournament.
                                        Participant understands and accept that participating in the
                                        Tournament may involve encountering known and unknown risks,
                                        including the risk of serious bodily injury, illness, disability, emotional
                                        trauma, damage to property and death (collectively “Injuries”), and
                                        Participant expressly and voluntarily assumes full responsibility for
                                        any such risks, from any and all causes, including, without limitation,
                                        negligence, gross negligence, defective products, unknown
                                        products, travel-related, equipment malfunction, inadequate training,
                                        failure to supervise and failure to warn of potential risks and
                                        understand that these risks may be caused by Participant, MLG,
                                        Sponsors, other Participants or other third parties.
                                        By participating, each Participant, on behalf of themselves, and each
                                        of their successors, heirs and assigns, unconditionally and irrevocably
                                        waives liability, releases, promises never to sue, forever discharges
                                        and relinquishes any and all rights, claims, demands, suits, actions,
                                        losses, damages, costs and expenses, including attorneys’ fees and
                                        costs (collectively, “Claims”), that Participant or Potential Winner may
                                        incur or otherwise have against MLG, their affiliates and their
                                        respective parents , affiliates, sponsors, agency/production
                                        companies, landowners/lessors, hosts, advertisers and each of their
                                        respective owners, officers, shareholders, directors, employees and
                                        agents (“Released Parties”), arising from or related to Participant or
                                        Potential Winner’s participation in the Tournament, including, without
                                        limitation, any Claims arising from or related to: (i) the actions or
                                        omissions of any of the Released Parties, other Participants, or other
                                        third parties; (ii) the inadequacy of any training or supervision; (iii)
                                        failure to investigate, keep safe or to warn of hazards known or
                                        unknown; (iv) the breach of any implied or express warranty and/or
                                        representation of any of the Released Parties; (v) travel,
                                        transportation or accommodations; (vi) any prize award, including,
                                        without limitation, the receipt or use or misuse of any prize or any
                                        claim from a taxing jurisdiction or authority; (vii) the exercise of the
                                        rights granted herein including, without limitation, from any liability
                                        for violation of rights of privacy, publicity, defamation, emotional
                                        distress or any similar right; (viii) any other operations associated
                                        with the Tournament; and/or (ix) if Participant is a Team Owner,
                                        Participant agrees to release and hold the Released Parties harmless
                                        from any Claims with respect to the Released Parties use of any Team
                                        Sponsor’s name, trademarks or logos, as set forth in these Official
                                        Rules; and, with respect to each of the foregoing, whether based on
                                        tort (including, without limitation, acts of negligence and gross
                                        negligence), contract or any other theory of recovery in law or equity,
                                        whether for compensatory or punitive damages, equitable relieve or
                                        otherwise, and whether now known or unknown or suspected or
                                        unsuspected (all of the foregoing shall be collectively referred to as
                                        the “Released Claims”). Participant hereby indemnifies the Released
                                        Parties from and against all claims, actions, losses, damages,
                                        judgments and liabilities resulting from any breach or alleged breach
                                        of the Official Rules, any actions or omissions by Participant while
                                        participating in or attending the Tournament or any event thereof
                                        and/or the releases set forth herein. If any part of these Official Rules
                                        shall be held or declared to be invalid or unenforceable for any
                                        reason by any court of competent jurisdiction, such provision shall be
                                        ineffective but shall not affect any other part of these Official Rules
                                        and the invalid portion of any provision shall be deemed modified to
                                        the least degree necessary to remedy such invalidity while retaining
                                        the original intent of the parties. The failure of MLG or the Sponsor to
                                        partially or fully exercise any rights or the waiver by MLG or the
                                        Sponsor of any breach of these Official Rules by Participant, shall not
                                        prevent a subsequent exercise of such right by MLG or the Sponsor
                                        or be deemed a waiver by MLG or the Sponsor of any subsequent
                                        breach by Participant of the same or any other term of these Official
                                        Rules. The rights and remedies of MLG or the Sponsor under these
                                        Official Rules shall be cumulative, and the exercise of any right or
                                        remedy shall not limit a right to exercise any other right or remedy
                                        hereunder.
                                        Participant hereby warrants, represents, acknowledges and agrees
                                        that in no event shall Participant have, and Participant hereby
                                        irrevocably waives, any right to sue the Released Parties or to seek or
                                        obtain injunctive or other equitable relief in connection with the
                                        Tournament, the Materials, the Submissions, or any other
                                        productions, or the production, distribution, exhibition or other
                                        exploitation, or the advertising, promoting or publicizing of the
                                        Tournament.
                                        Taxes.
                                        Each Potential Winner who has satisfied the required contingencies
                                        to become eligible for the award of a prize is solely responsible for
                                        any and all applicable taxes on such prize. Participants are
                                        responsible for any and all costs and expenses associated with their
                                        prize that are not specifically set forth herein. National, state and
                                        local taxes, including VAT taxes which are associated with the receipt
                                        or use of any prizes are the sole responsibility of the Participant. . Any
                                        person receiving over $600 in prizes from MLG or the Sponsor will
                                        receive an IRS form 1099 at the end of the calendar year and a copy
                                        of such form will be filed with the IRS.
                                        Conduct and Decisions.
                                        By participating in the Tournament, Participants agree to be bound
                                        by the decisions of MLG, its Employees, its Volunteers, Judges,
                                        Sponsor, and Sponsor’ personnel. Participants must conduct
                                        themselves in a reasonable manner, maintaining a friendly and polite
                                        demeanor to competitors, Tournament officials, and to other
                                        participants of the Tournament. Participants who violate any rule,
                                        gain unfair advantage in participating in the Tournament, or obtain
                                        winner status using fraudulent means will be disqualified.
                                        Unsportsmanlike, disruptive, annoying, harassing or threatening
                                        behavior is prohibited. MLG or the Sponsor will interpret these rules
                                        and resolve any disputes, conflicting claims or ambiguities
                                        concerning the rules or the Tournament and MLG or the Sponsor's
                                        decisions concerning such disputes shall be final. If the conduct or
                                        outcome of the Tournament is affected by human error, any
                                        mechanical malfunctions or failures of any kind, intentional
                                        interference or any event beyond the control of MLG or the Sponsor,
                                        the Company reserves the right to terminate this Tournament, or
                                        make such other decisions regarding the outcome as MLG or the
                                        Sponsor deem appropriate. MLG or the Sponsor reserve the right, in
                                        their discretion, to disqualify any individual found (a) to be
                                        tampering with the registration or entry process or the operation of
                                        the Site or any Tournament; (b) be acting in violation of these Official
                                        Rules; (c) to be hacking, or to be acting in a non-sportsmanlike or
                                        disruptive manner, or with intent to annoy, abuse, threaten or harass
                                        any other person; or (d) to have provided any false or misleading
                                        information as part of the registration process including, without
                                        limitation, any false names, addresses or e-mail addresses. All
                                        decisions will be made by the Sponsor and are final. ANY ATTEMPT
                                        BY A PARTICIPANT OR ANY OTHER INDIVIDUAL TO DELIBERATELY
                                        CIRCUMVENT, DISRUPT OR DAMAGE ORDINARY AND NORMAL
                                        OPERATION OF THIS TOURNAMENT, TELEPHONE SYSTEMS OR
                                        WEBSITE, OR UNDERMINE THE LEGITIMATE OPERATION OF THE
                                        TOURNAMENT IS A VIOLATION OF CRIMINAL AND CIVIL LAWS
                                        AND SHOULD SUCH AN ATTEMPT BE MADE, MLG OR THE
                                        SPONSOR RESERVE THE RIGHT TO SEEK DAMAGES FROM ANY
                                        SUCH PARTICIPATE TO THE FULLEST EXTENT PERMITTED BY LAW.
                                        Miscellaneous.
                                        If for any reason, any Tournament, in MLG or the Sponsor's opinion, is
                                        not capable of running as planned, including, but not limited to, by
                                        reason of infection by computer virus, bugs, worms, tampering,
                                        unauthorized intervention, fraud, technical failures, or any other
                                        causes beyond the control of MLG or the Sponsor which, in their
                                        judgment, corrupts or affects the administration, security, fairness,
                                        integrity or proper conduct of any Tournament, MLG or the Sponsor
                                        reserve the right in their discretion to cancel, terminate, modify or
                                        suspend the Tournament and proceed in such a manner as may be
                                        deemed fair and equitable by MLG or the Sponsor in their discretion.
                                        Dispute Resolution and Governing Law
                                        Applicability: This Section applies to and governs any dispute that
                                        arises out of or relates to a Tournament or these Official Rules. This
                                        Section is in addition to Section 3 of the GameBattles Terms of Use,
                                        which likewise provides for Binding Arbitration and Class Action
                                        waiver. If any difference between Section 3 of the GameBattles terms
                                        of service and these Rules exists, these Official Rules govern as to
                                        disputes related to a Tournament, and the GameBattles agreement
                                        will apply to disputes related to use of GameBattles accounts outside
                                        of a Tournament.
                                        Negotiations:
                                        In an effort to accelerate resolution and reduce the cost of any
                                        dispute, Participant and MLG agree to first attempt to negotiate a
                                        resolution of any dispute informally for at least thirty (30) days before
                                        either party initiates any arbitration.
                                        Negotiations will begin upon receipt of written notice by the party
                                        raising the dispute. MLG will send its notice to Participant’s billing
                                        address and email Participant a copy to the email address Participant
                                        provided to MLG.
                                        Participant will send his/her notice to MLG at Major League Gaming
                                        Corp., 250 Hudson Street, 6th Floor, New York, New York 10013,
                                        Attn.: Legal Department.
                                        Binding Arbitration:
                                        If a dispute cannot be resolved through negotiations, either
                                        Participant or MLG may elect to have the dispute finally and
                                        exclusively resolved by binding arbitration. Any election to arbitrate
                                        by one party shall be final and binding on the other.
                                        PARTICIPANT SHOULD REVIEW THIS PROVISION CAREFULLY. THIS
                                        ARBITRATION PROVISION LIMITS PARTICIPANT’S AND MLG’S
                                        ABILITY TO LITIGATE CLAIMS IN COURT AND PARTICIPANT AND
                                        MLG EACH AGREE TO WAIVE THEIR RESPECTIVE RIGHTS TO A
                                        JURY TRIAL.
                                        This arbitration provision is made pursuant to a transaction involving
                                        interstate commerce, and the Federal Arbitration Act (the "FAA")
                                        shall apply to the interpretation, applicability, enforceability and
                                        formation of this Agreement notwithstanding any other choice of law
                                        provision contained in this Agreement. Specifically, all claims arising
                                        out of or relating to this Agreement (including its interpretation,
                                        formation, performance and breach), the parties' relationship with
                                        each other and/or Participant’s participation in the Competition shall
                                        be finally settled by binding arbitration.
                                        The arbitration shall be commenced and conducted by JAMS
                                        pursuant to its Comprehensive Arbitration Rules and Procedures,
                                        which are available at the JAMS website (http://www.jamsadr.com)
                                        or by calling JAMS at (800) 352-5267. The arbitrator, and not any
                                        federal, state or local court or agency, shall have exclusive authority
                                        to resolve all disputes arising out of or relating to the interpretation,
                                        applicability, enforceability or formation of this Handbook, including,
                                        but not limited to any claim that all or any part of this Handbook are
                                        void or voidable, or whether a claim is subject to arbitration. The
                                        arbitrator shall be empowered to grant whatever relief would be
                                        available in a court under law or in equity. The arbitrator’s award
                                        shall be written, and binding on the parties and may be entered as a
                                        judgment in any court of competent jurisdiction.
                                        Where any action includes claims that are arbitrable and claims that
                                        are not, the entire action shall be stayed, absent a showing of
                                        prejudice to the complaining party, pending the completion of the
                                        arbitration of the arbitrable issues. Participant or MLG can request
                                        the stay be lifted upon a showing of prejudice. Participant’s
                                        arbitration fees and Participant’s share of arbitrator compensation
                                        shall be governed by the JAMS Comprehensive Arbitration Rules and
                                        Procedures.
                                        Notwithstanding the parties' decision to resolve all disputes through
                                        arbitration, either party may seek relief in a small claims court for
                                        disputes or claims within the scope of that court’s jurisdiction.
                                        Participant’s arbitration fees and Participant’s share of arbitrator
                                        compensation shall be governed by the JAMS Comprehensive
                                        Arbitration Rules and, to the extent applicable, the Consumer
                                        Minimum Standards, including the then-current limit on arbitration
                                        filing fees. To the extent the filing fee for the arbitration exceeds the
                                        cost of filing a lawsuit, MLG will pay the additional cost.
                                        Notwithstanding the parties' decision to resolve all disputes through
                                        arbitration, either party may bring an action in state or federal court
                                        that only asserts claims for patent infringement or invalidity,
                                        copyright infringement, moral rights violations, trademark
                                        infringement, and/or trade secret misappropriation, but not, for
                                        clarity, claims related to the license granted to Participant for the
                                        MLG Service under the Terms of Service for Major League Gaming,
                                        available at https:/https://accounts.majorleaguegaming.com/
                                        terms_of_service.
                                        Arbitration Procedures:
                                        The arbitration may be conducted in person, through the submission
                                        of documents, by phone, or online. The arbitrator will make a
                                        decision in writing, but need not provide a statement of reasons
                                        unless requested by a party.
                                        THE PARTIES UNDERSTAND THAT, ABSENT THIS MANDATORY
                                        PROVISION, THEY WOULD HAVE THE RIGHT TO SUE IN COURT
                                        AND HAVE A JURY TRIAL. They further understand that, in some
                                        instances, the costs of arbitration could exceed the costs of litigation.
                                        The parties understand that the right to discovery may be more
                                        limited in arbitration than in court.
                                        Class and Collective Action Waiver:
                                        Participant and MLG agree that any arbitration or court proceeding
                                        shall be limited to the dispute between MLG and participant
                                        individually.
                                        Participant acknowledges and agrees that: (i) a claim by, or on behalf
                                        of, other persons, will not be considered in, joined with, or
                                        consolidated with, the arbitration proceedings or any court
                                        proceedings between Participant and MLG; (ii) there is no right or
                                        authority for any dispute to be arbitrated, adjudicated, or resolved
                                        through court proceedings on a class-action basis or to utilize class
                                        action procedures; and (iii) Participant will not have the right to
                                        participate as a class representative, private attorney general, or as a
                                        member of any class of claimants for any dispute subject to
                                        arbitration or any dispute brought in court. Any dispute regarding
                                        the prohibitions in the prior Sections shall be resolved by the
                                        arbitrator in accordance with this Section.
                                        If, for any reason, this class or collective action waiver is deemed
                                        unenforceable by a court or arbitrator, Participant agrees that the
                                        parties’ contract to arbitrate is then void, and any ongoing or future
                                        dispute will be submitted to a court of competent jurisdiction within
                                        the County of New York, State of New York, United States of America,
                                        to the exclusion of arbitration. Any dispute at that time in arbitration
                                        will be dismissed without prejudice and refiled in a court.
                                        Location of Arbitration: All arbitrations shall be initiated in the
                                        County of New York, State of New York, United States of America,
                                        and Participant and MLG agree to submit to the personal jurisdiction
                                        of any federal or state court in New York County, New York, in order
                                        to compel arbitration, to stay proceedings pending arbitration, or to
                                        confirm, modify, vacate or enter judgment on the award entered by
                                        the arbitrator.
                                        Awards: Any and all claims, judgments and awards shall be limited as
                                        set forth in these Official Rules in Section 11.
                                        Right to Opt Out and Changes to this Section: Participant has the
                                        right to opt-out and not be bound by the arbitration and class action
                                        waiver provisions set forth above by sending written notice of
                                        participant’s decision to opt-out to the following address: Major
                                        League Gaming Corp., Attention: Legal, 250 Hudson Street, 6th
                                        Floor, New York, New York, 10013. The notice must be sent within 30
                                        days of Participant’s agreement to these Official Rules. Otherwise
                                        Participant shall be bound to arbitrate disputes in accordance with
                                        the terms of those paragraphs. If Participant opts-out of these
                                        arbitration provisions, MLG also will not be bound by them. MLG will
                                        provide 60-days’ notice of any changes to this section (Section 11).
                                        Changes will become effective on the 60th day, and will apply
                                        prospectively only to any claims arising after the 60th day.
                                        Use of Data
                                        MLG and the Sponsor will be collecting personal data about
                                        participants online, in accordance with its privacy policy. Please
                                        review MLG or the Sponsor’s privacy policy at https://
                                        accounts.majorleaguegaming.com/privacy_policy. By participating in
                                        a Tournament, participants hereby agree to MLG or the Sponsor’s
                                        collection and usage of their personal information and acknowledge
                                        that they have read and accepted MLG or the Sponsor’s privacy
                                        policy.
                                        Rules and List of Winners.
                                        For a copy of the rules, or a list of winners, please send a request
                                        within thirty (30) days of the end of the Tournament by mail with a
                                        stamped, self-addressed return envelope with Tournament name and
                                        addressed to: Major League Gaming c/o GameBattles Tournaments,
                                        250 Hudson Street, 6th Floor, New York, NY 10013.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

}