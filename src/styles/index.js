import {StyleSheet} from 'react-native';

export const LocationListStyles = StyleSheet.create({
    mainContainer: {
      padding: 10,
      flex: 1
    },
    heading:{
      color: 'black',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 10, 
    }
  });

export const NavigatorStyles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  navigatorButton: {
    width: '40%',
    padding: 10,
    backgroundColor: '#e2e8f6'
  },
  navigatoreButtonText: {
    textAlign: 'center',
    color: 'black'
  }

})

export const CurrentLocationStyles = StyleSheet.create({
  mainContainer: {
    marginVertical: 20,
    borderBottomColor: '#bfbfbd',
    borderBottomWidth: 2
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsIcon: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: '#f7d800',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  }

})

export const PreviousLocationStyles = StyleSheet.create({
  mainContainer: {
  }
})

export const PreviousLocationItemStyles = StyleSheet.create({
  mainContainer: {
    marginVertical: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonContainer: {
    marginRight: 8
  }
})

export const CommonTextStyles = StyleSheet.create({
  regular:  {
    color: 'black',
  },
  bitBigger:{
    fontSize: 16,
  },
  bitSmaller: {
    fontSize: 12
  }
})

export const AllClearStyles = StyleSheet.create({
  mainContainer: {
    position: 'absolute',
    bottom: 20,
    left: 50,
    right: 50
  }
})