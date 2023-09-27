import { View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from './search.style'
import { Feather, Ionicons } from '@expo/vector-icons'
import { SIZES, COLORS } from '../constants'
import { State } from 'react-native-gesture-handler'



const Search = () => {

  return (
    <SafeAreaView>
      <View style={ styles.searchContainer }>
        <TouchableOpacity>
          < Ionicons
            name="camera-outline"
            size={ SIZES.xLarge } style={ styles.searchIcon } />
        </TouchableOpacity>

        <View style={ styles.searchWrapper }>
          <TextInput
            style={ styles.searchInput }
            value=""
            // onPressIn={ () => navigation.navigate( "search" ) }
            // onChangeText={ onChangeText }
            placeholder="What are you looking for!"
          />
        </View>

        <View>
          <TouchableOpacity style={ styles.searchBtn }>
            <Feather name="search" size={ 24 }

              color={ COLORS.lightWhite } />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Search