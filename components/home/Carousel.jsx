import { View, Text, StyleSheet } from 'react-native'
import { SliderBox } from 'react-native-image-slider-box'
import { COLORS } from '../../constants'

const Carousel = () => {
  const slides = [
    "https://i.pinimg.com/originals/93/f1/30/93f13061cd67d32cdaad7afa0085dfef.jpg",
    "https://i.pinimg.com/originals/3b/41/3f/3b413ff0d2717a72ac8727545ac4888d.jpg",
    "https://images.dfs.co.uk/i/dfs/jorge_4a_benita_silver_view1?$dfs_v2_pdp_xl$&fmt=auto"
  ]
  return (
    <View style={ styles.carouselContainer }>
      {/* <SliderBox images={ slides }
        dotColor={ COLORS.primary }
        inactiveDotColor={ COLORS.secondary }
        ImageComponentStyle={ { borderRadius: 15, width: "95%", marginTop: 15 } }
        autoplay
        circleloop
      /> */}
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create( {
  carouselContainer: {
    flex: 1,
    alignItems: 'center'
  },
  sliderWidth: {
    width: '100%'
  }
} )