import React from 'react'
import { EvilIcons, SimpleLineIcons, MaterialIcons } from '@expo/vector-icons'
import { View, Button } from 'react-native'
import {Bar, Icons, Infos, Income, Spending, Desc, Add} from './styles.js'


export default function Tab({navigation}){
    return(
        <Bar>
            <Infos>
                <Income>
                    <Icons>
                <EvilIcons name="star" size={25} color="#fff"/>
                    </Icons>
                $1220.0 <br></br>
                    <Desc>your income</Desc>
                </Income>
                <Spending>
                    <Icons>
                <SimpleLineIcons name="action-redo" size={20} color="#fff" />
                    </Icons>
                    $220.0 <br></br>
                <Desc>your spending</Desc>
                </Spending>
           </Infos>
           
           <Add>
           {/* <Button
            title=">"
            onPress={() => navigation.push("detailsScreen")}
          ></Button> */}
               {/* <MaterialIcons name="keyboard-arrow-right" size={50} color="#fff" /> */}
               <SimpleLineIcons name="arrow-right" size={15} color="#fff" style={{padding: '17px'}} />
            </Add>
        </Bar>
    )
} 