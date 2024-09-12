import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import WatchList from './WatchList';
import Movies from './Movies';
import { morelike } from '@/assets/data';
import Watching from './watching';


const TabComponent = ({tabs,episod}) => {


    return (
        <div className='max-w-[1150px] 2xl:max-w-[1550px] mx-auto tab_container'>
            <Tabs>
                <TabList>
                    {tabs.map((item,i)=>(
                        <Tab key={i}>{item}</Tab>
                    ))}
                   
                </TabList>

                <TabPanel>
                    {episod ?<Watching data={episod}/>:<Movies data={morelike} title="Trending" live={false}/>}
                </TabPanel>
                <TabPanel>
                <Movies data={morelike} title="More Like This" live={false}/>
                </TabPanel>
                <TabPanel>
                <Movies data={morelike} title="Trailers & More" live={false}/>
                </TabPanel>
            </Tabs>

        </div>
    )
}

export default TabComponent