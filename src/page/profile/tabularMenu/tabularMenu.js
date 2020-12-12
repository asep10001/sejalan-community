import React, { useState } from 'react';
import { Grid, Menu, Segment } from 'semantic-ui-react';

const TabularMenu = (props) => {
    const [activeItem, setActiveItem] = useState('bio');

    const handleItemClick = (name) => setActiveItem(name);
    return (
        <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item
              name='bio'
              active={activeItem === 'bio'}
              onClick={()=>handleItemClick('bio')}
            />
            <Menu.Item
              name='pics'
              active={activeItem === 'pics'}
              onClick={()=>handleItemClick('pics')}
            />
            <Menu.Item
              name='companies'
              active={activeItem === 'companies'}
              onClick={()=>handleItemClick('companies')}
            />
            <Menu.Item
              name='links'
              active={activeItem === 'links'}
              onClick={()=>handleItemClick('links')}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            This is an stretched grid column. This segment will always match the
            tab height
          </Segment>
          
        </Grid.Column>
      </Grid>
    )
}

export default TabularMenu;