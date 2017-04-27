import React from 'react';
import './TopMenu.css';
import TopMenuButton from './TopMenuButton';

class TopMenu extends React.Component {
    render() {
        return (
            <div>
                <header> 
                    <TopMenuButton/>
                    <div className="TopMenu_Container">
                        <div className="TopMenu_GridItem">
                            <TopMenuButton/>
                        </div>
                        <div className="TopMenu_GridItem">
                            <h2 className="TopMenu_h2">News</h2>
                        </div>
                        <div className="TopMenu_GridItem">
                            <h2 className="TopMenu_h2">Skyland of Arnythos</h2>
                        </div>
                        <div className="TopMenu_GridItem">
                            <h2 className="TopMenu_h2">Media</h2>
                        </div>
                        <div className="TopMenu_GridItem">
                            <h2 className="TopMenu_h2">Contact</h2>
                        </div>
                        <div className="TopMenu_GridItem">
                            <h2 className="TopMenu_h2">Team</h2>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}
export default TopMenu;