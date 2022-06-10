import { View, Text, Image } from 'react-native'
import { COLORS,SIZES, SHADOWS, assets } from '../constants'
import{useNavigation} from '@react-navigation/native'
import React from 'react'
import { CircleButton, RectButton } from './Button';
import { SubInfo, EthPrice, NFTTitle } from './SubInfo';

const NFTCard = ({data}) => {
    const navigation = useNavigation();

  return (
    <View style={{
        backgroundColor :COLORS.white,
        borderRadius: SIZES.font,
        marginbottom:SIZES.extraLarge,
       // marginVertical:SIZES.base,
       // paddingHorizontal:SIZES.base*2,
        margin:SIZES.base,
        ...SHADOWS.dark
    }}>
    <View style={{ width:"100%", height: 250}}>
    <Image
    source={data.image}
    resizeMode="cover"
    style={{
        width: "100%",
        height: "100%",
        borderTopLeftRadius:SIZES.font,
        borderTopRightRadius:SIZES.font,
    }}/>
    <CircleButton imgUrl={assets.heart} right={10} top={10}/>
    </View>

    <SubInfo />
    </View>
  )
}

export default NFTCard