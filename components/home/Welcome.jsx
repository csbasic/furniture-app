import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import styles from './welcom.style'
import { COLORS, SIZES } from '../../constants'
import { Feather, Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
const welcome = () => {

  const navigation = useNavigation()
  return (
    <View>

      <View style={ styles.container }>
        <Text style={ styles.welcomeTxt( COLORS.black, SIZES.xxLarge ) } >Find The Most</Text>
        <Text style={ styles.welcomeTxt( COLORS.primary, SIZES.xLarge + 10 ) } >Luxurious Furniture</Text>
      </View>

      <View>

        <View style={ styles.searchContainer }>
          <TouchableOpacity>
            <Feather name="search" size={ 24 } style={ styles.searchIcon }></Feather>
          </TouchableOpacity>

          <View style={ styles.searchWrapper }>
            <TextInput
              style={ styles.searchInput }
              value=""
              onPressIn={ () => navigation.navigate( "Search" ) }
              placeholder="What are you looking for!"
            />
          </View>

          <View>
            <TouchableOpacity style={ styles.searchBtn }>
              <Ionicons name="camera-outline" size={ SIZES.xLarge } color={ COLORS.lightWhite } />
            </TouchableOpacity>
          </View>
        </View>

      </View>


    </View>

  )
}

export default welcome