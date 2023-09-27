import { View, Text, TouchableOpacity } from 'react-native'

import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons, Fontisto } from '@expo/vector-icons'
import styles from './home.style'
import { ScrollView } from 'react-native-gesture-handler'
import { Welcome } from '../components'
import Carousel from 'react-native-snap-carousel'



const Home = () => {
  return (
    <SafeAreaView>
      <View style={ styles.appBarWrapper }>
        <View style={ styles.appBar }>
          <Ionicons name='location-outline' size={ 24 } andro />

          <Text style={ styles.location }>Shangai China</Text>

          <View style={ { alignItems: "flex-end" } }>
            <View style={ styles.cartCount }>
              <Text style={ styles.cartNumber } >12</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name='shopping-bag' size={ 24 }></Fontisto>
            </TouchableOpacity>
          </View>

        </View>

      </View>

      <ScrollView>
        <Welcome />
        <Carousel />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home 
