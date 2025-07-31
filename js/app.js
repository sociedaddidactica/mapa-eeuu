const citiesByState = {
  AL: ['birmingham','montgomery','mobile'],
  AK: ['anchorage','juneau'],
  AZ: ['phoenix','tucson','mesa'],
  AR: ['little-rock','fayetteville'],
  CA: ['los-angeles','san-francisco','san-diego'],
  CO: ['denver','colorado-springs'],
  CT: ['hartford','new-haven'],
  DE: ['wilmington','dover'],
  FL: ['miami','orlando','tampa'],
  GA: ['atlanta','savannah'],
  HI: ['honolulu'],
  ID: ['boise'],
  IL: ['chicago','springfield'],
  IN: ['indianapolis','fort-wayne'],
  IA: ['des-moines','cedar-rapids'],
  KS: ['wichita','topeka'],
  KY: ['louisville','lexington'],
  LA: ['new-orleans','baton-rouge'],
  ME: ['portland','augusta'],
  MD: ['baltimore','annapolis'],
  MA: ['boston','springfield'],
  MI: ['detroit','grand-rapids'],
  MN: ['minneapolis','saint-paul'],
  MS: ['jackson','gulfport'],
  MO: ['kansas-city','st-louis'],
  MT: ['billings','bozeman'],
  NE: ['omaha','lincoln'],
  NV: ['las-vegas','reno'],
  NH: ['manchester','concord'],
  NJ: ['newark','trenton'],
  NM: ['albuquerque','santa-fe'],
  NY: ['new-york','buffalo','rochester'],
  NC: ['charlotte','raleigh'],
  ND: ['fargo','bismarck'],
  OH: ['columbus','cleveland'],
  OK: ['oklahoma-city','tulsa'],
  OR: ['portland','salem'],
  PA: ['philadelphia','pittsburgh'],
  RI: ['providence'],
  SC: ['columbia','charleston'],
  SD: ['sioux-falls','rapid-city'],
  TN: ['nashville','memphis'],
  TX: ['houston','dallas','austin'],
  UT: ['salt-lake-city','provo'],
  VT: ['burlington','montpelier'],
  VA: ['richmond','virginia-beach'],
  WA: ['seattle','spokane'],
  WV: ['charleston','morgantown'],
  WI: ['milwaukee','madison'],
  WY: ['cheyenne','casper']
};

const map = document.getElementById('us-map');
const cityList = document.getElementById('cities');
let activeState = null;

function showCities(stateId) {
  const cities = citiesByState[stateId];
  cityList.innerHTML = '';
  if (!cities) {
    cityList.classList.add('hidden');
    return;
  }
  cities.forEach(city => {
    const link = document.createElement('a');
    link.href = `https://855anyjunk.com/${city}`;
    link.textContent = city.replace(/-/g,' ');
    cityList.appendChild(link);
  });
  cityList.classList.remove('hidden');
}

map.addEventListener('click', (e) => {
  const target = e.target.closest('g.state');
  if (!target) return;
  const stateId = target.id;
  if (activeState) activeState.classList.remove('active');
  activeState = target;
  activeState.classList.add('active');
  showCities(stateId);
});
