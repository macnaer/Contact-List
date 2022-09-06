UpdateCounter = () => {
  let totalCount = this.state.ContactListArr.length;
  let tmpCounter = this.state.Counter.slice();

  let familyCount = this.state.ContactListArr.reduce((accum, element) => {
    if (element.status === "Family") return ++accum;
    else return accum;
  }, 0);

  let workCount = this.state.ContactListArr.reduce((accum, element) => {
    if (element.status === "Work") return ++accum;
    else return accum;
  }, 0);

  let privateCount = this.state.ContactListArr.reduce((accum, element) => {
    if (element.status === "Private") return ++accum;
    else return accum;
  }, 0);

  let friendsCount = this.state.ContactListArr.reduce((accum, element) => {
    if (element.status === "Friends") return ++accum;
    else return accum;
  }, 0);

  tmpCounter[0].totalCount = totalCount;
  tmpCounter[1].workCount = workCount;
  tmpCounter[2].familyCount = familyCount;
  tmpCounter[3].privateCount = privateCount;
  tmpCounter[4].friendsCount = friendsCount;

  this.setState({
    Counter: tmpCounter,
  });
};

onSearch = (e) => {
  this.setState({
    search: e.target.value,
  });
};

Counter: [
  { totalCount: 0 },
  { workCount: 0 },
  { familyCount: 0 },
  { privateCount: 0 },
  { friendsCount: 0 },
];
