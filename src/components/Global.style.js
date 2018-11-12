import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#fff',
  },
  MainTitle: {
    color: '#000',
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  btn: {
    marginVertical: 5,
    paddingVertical: 12,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    width: '70%',
    backgroundColor: '#546fa0',
  },
  btnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 15,
  },
  entryBtn: {
    alignSelf: 'flex-end',
    marginVertical: 5,
    paddingVertical: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    width: '40%',
    backgroundColor: '#546fa0',
  },
  input: {
    paddingHorizontal: 5,
    marginTop: 5,
    marginHorizontal: 15,
    paddingTop: 7,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderColor: '#4B4B4B',
    fontSize: 14,
  },
  date: {
    marginTop: 10,
    width: '92%',
    marginHorizontal: 15,
  },
  phone: {
    marginVertical: 10,
    marginHorizontal: 15,
  },
  searchWrap: {
    marginTop: 10,
    height: 40,
    marginHorizontal: 15,
  },
  search: {
    paddingHorizontal: 5,
    borderRadius: 10,
    borderColor: '#4B4B4B',
  },
  validation: {
    marginHorizontal: 15,
  },
  validationText: {
    fontSize: 14,
    color: '#C90A1E',
  },
  entryRowBtn: {
    paddingVertical: 3,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
    width: '40%',
    backgroundColor: '#546fa0',
  },
  headers: {
    justifyContent: "space-between",
    paddingVertical: 10,
    flexDirection: 'row',
  },
  entryRow: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  entryRowText: {
    width: '25%',
    textAlign: 'center',
  },
  headerBtn: {
    width: '25%',
  },
  headerText: {
    fontSize: 13,
    textAlign: 'center',
  },
  sort: {
    textAlign: 'center',
  },
  phoneInput: {
    borderColor: 'black',
    borderRadius: 1,
    paddingHorizontal: 5
  }
});
