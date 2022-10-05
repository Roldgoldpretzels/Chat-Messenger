import React from 'react'
import {ChannelList,usedChatContext} from 'stream-chat-react';
import Cookies from 'universal-cookie';

import ChannelSearch from './ChannelSearch';
import UserIcon from '../assets/user.png'
import LogoutIcon from '../assets/logout.png'
import TeamChannelList from './TeamChannelList';
import TeamChannelPreview from './TeamChannelPreview';

const SideBar = () => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={UserIcon} alt="User" width="30" />
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner">
                <img src={LogoutIcon} alt="Logout" width="30" />
            </div>
        </div>
    </div>
);

const CompanyHeader = () => (
    <div className="channel-list__header">
        <p className="channel-list__header__text">Start a conversation</p>
    </div>
)


const ChannelListContainer = () => {
  return (
    <>
        <SideBar />
        <div className="channel-list__list__wrapper">
            <CompanyHeader />
            <ChannelSearch />
            <ChannelList 
                filters ={{}}
                channelRenderFilterFn={() =>{}}
                List={(listProps =>(
                    <TeamChannelList 
                        {...listProps}
                        type="team"
                    />
                ))}
                Preview={(PreviewProps =>(
                    <TeamChannelPreview 
                        {...PreviewProps}
                        type="team"
                    />
                ))}
            />
                        <ChannelList 
                filters ={{}}
                channelRenderFilterFn={() =>{}}
                List={(listProps =>(
                    <TeamChannelList 
                        {...listProps}
                        type="messaging"
                    />
                ))}
                Preview={(PreviewProps =>(
                    <TeamChannelPreview 
                        {...PreviewProps}
                        type="messaging"
                    />
                ))}
            />
        </div>
    </>
  );
}

export default ChannelListContainer;