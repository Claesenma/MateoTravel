// Get Airlines by IATA codes
var airlines_data_dict = {'2B': 'Ak Bars Aero', '8J': 'EcoJet', '5K': 'Hi Fly', '8C': 'Air Transport International L.L.C.', 'QC': 'Camair-Co', 'HD': 'Air Do', 'AD': 'Azul Brazilian Airlines', 'BO': 'BB Airways', '6A': 'Armenia Airways', 'QR': 'Qatar Airways', '1V': 'Galileo International', 'QA': 'Cimber', 'HV': 'Transavia', 'QM': 'Monacair', 'H6': 'Bulgarian Air Charter', 'YP': 'Perimeter Aviation Ltd.', 'U9': 'Tatarstan Airlines', 'C4': 'Conquest Air, Inc.', 'GR': 'Aurigny Air Services', '8K': 'K-Mile Air Co. Ltd', '7Y': 'Mann Yadanarpon Airlines', 'MI': 'Silkair', 'A2': 'Animawings', 'YU': 'EuroAtlantic Airways S.A.', 'VE': 'C.A.I. Second', 'TQ': 'Tandem Aero', 'ER': 'Air East', 'WC': 'Islena de Inversiones S.A. de C.V.dba Islena Airlines', '1F': 'INFINI Travel Information, Inc.', '8V': 'Wright Air Service', 'KP': 'ASKY Airlines', 'AN': 'HOP!', 'RX': 'Regent Airways', 'TO': 'Transavia', 'DX': 'Danish Air Transport', 'HG': 'Niki', 'JI': 'Meraj Air', 'SP': 'SATA Air Acores', 'Z3': 'PM Air LLC', 'AH': 'Air Algerie', '0L': 'Lodyssey', 'S5': 'Shuttle America', 'JL': 'Japan Airlines', 'X8': 'Airmax S.A.', 'XR': 'Virgin Australia', 'PE': "People's Viennaline", '3S': 'Air Antilles Express', '3L': 'Air Arabia Abu Dhabi', 'SE': 'XL Airways France', 'ZF': 'Azur Air', 'OZ': 'Asiana Airlines', 'UN': 'Transaero\xa0Airlines', 'BU': "Compagnie Africaine d'Aviation", 'HI': 'Papillon Airways', 'GM': 'Germania Flug', 'LK': 'Lao Skyway', 'BW': 'Caribbean Airlines', '9F': 'Eurostar', '4M': 'LATAM Argentina', 'AB': 'Air Berlin', '0J': 'Premium Jet AG', 'SS': 'Corsair International', 'F0': 'Fly Jordan', 'ZN': 'NAYSA', '5P': 'Panorama Airways', 'RS': 'Sky Regional Airlines', 'ZY': 'Sky Airlines', 'R1': 'Zapways, Inc.', 'IR': 'Iran Air', 'KV': 'KrasAvia', 'OE': 'Laudamotion', 'OI': 'Hinterland Aviation', 'KW': 'Kharkiv Airlines', 'OL': 'Polynesian Airlines', 'YT': 'Yeti Airlines Domestic Pvt. Ltd.', 'MJ': 'MyWay Airlines', '2F': 'Afrinat International Airlines', 'OO': 'SkyWest Airlines', 'JD': 'Beijing Capital Airlines', 'CO': 'Cobalt Air', 'TB': 'Jetairfly', 'FV': 'Rossiya Airlines', '0G': 'Grumeti Air', 'R2': 'Orenair', 'U5': 'Karinou Airlines', '5M': 'Hi Fly Ltd', 'W9': 'Wizz Air', 'RZ': 'Sansa Airlines', 'IU': 'SW Italia s.p.a.', '3P': 'Tiara Air Aruba', '5N': 'Smartavia', 'J0': 'Jetlink Express', '5X': 'UPS', '7T': 'Trenitalia', '4U': 'Germanwings', 'DM': 'Asian Air', 'KQ': 'Kenya Airways', 'NB': 'Skypower Express Airways', 'BM': 'BMI Regional', 'P3': 'Passaredo Linhas Aereas', 'MM': 'Peach', 'UB': 'Myanmar National Airlines', 'YC': 'Yamal Airlines', '3O': 'Air Arabia Maroc', '0S': 'Sunday Express', 'MB': 'MNG Airlines', '5I': 'Alsa Grupo SLU', 'T7': 'Twin Jet', 'NF': 'Air Vanuatu', '2I': 'Star Peru', 'KE': 'Korean Air', '86': 'Up Israel', 'OM': 'MIAT Mongolian Airlines', 'UH': 'Atlasjet Ukraine', '4V': 'Lignes Aeriennes Congolaises', '1R': 'Bird Information Systems Private Limited', '8I': 'Insel Air', 'LE': 'Laparkan Airways, Inc.', 'TE': 'Sky-Taxi', 'J3': 'Northwestern Air', 'C8': 'Cronos Airlines', '7P': 'Air Panama', '4D': 'Air Sinai', 'D2': 'Severstal Air', '1K': 'Sutra Inc.', 'MW': 'Mokulele Airlines', 'RD': 'French Armed Forces', 'LR': 'Avianca Costa Rica', 'ED': 'AirExplore', 'QK': 'Jazz', 'UC': 'LAN Chile Cargo', '00': 'Asian Express Airline', 'GT': 'Vista Georgia', '3X': 'Premier Trans Aire Inc.', 'UQ': 'Urumqi Air', 'RE': 'Stobart Air', 'C7': 'Cinnamon Air', 'LO': 'LOT Polish Airlines', '2M': 'Moldavian Airlines', 'AZ': 'ITA Airways', '4E': 'Stabo Air Limited', '9K': 'Cape Air', 'BN': 'Bahrain Air', 'IB': 'Iberia', 'WS': 'Westjet', 'PW': 'Precision Air', 'K3': 'Taquan Air', '7E': 'Sylt Air GmbH', 'R5': 'Jordan Aviation', 'J2': 'Azerbaijan Airlines', '8R': 'Sol Lineas Aereas', 'J5': 'Alaska Seaplane', 'UO': 'Hong Kong Express Airways', 'KF': 'Blue1', 'WU': 'Wizz Air Ukraine', 'XL': 'LATAM Ecuador', '4Q': 'Safi Airways', '4P': 'Travel Air', 'G2': 'Jet Express', 'U2': 'EasyJet', 'DO': 'Discovery Airways', 'GL': 'Air Greenland', 'VA': 'Virgin Australia', 'SF': 'Tassili Airlines', '8D': 'FITS Aviation (Pvt) Ltd', 'GS': 'Tianjin Airlines', 'GG': 'Sky Lease I, Inc.', 'SQ': 'Singapore Airlines', 'S7': 'S7 Airlines', '0X': 'Air Excel', 'VW': 'Aeromar', 'HZ': 'Aurora', 'ZW': 'Air Wisconsin Airlines Corporation(AWAC)', '4Z': 'Airlink', 'Z9': 'Bek Air', 'P8': 'Air Mekong', 'FJ': 'Fiji Airways', '7Q': 'Elite Airways', 'QN': 'Air Armenia', 'ZJ': 'Zambezi Airlines', 'FI': 'Icelandair', 'YN': 'Air Creebec', '2R': 'VIA Rail Canada Inc.', 'PJ': 'Air Saint Pierre', '6N': 'Niger Airlines', 'VN': 'Vietnam Airlines', '5Q': 'BQB Lineas Aereas', 'N8': 'National Airlines', 'DD': 'Nok Air', 'CU': 'Cubana de Aviación', 'PA': 'airblue', 'QY': 'European Air Transport', 'U3': 'As Avies', 'KJ': 'Air Incheon', 'K2': 'Eurolot', '3M': 'Silver Airways', '2Z': 'Passaredo Transportes Aereos S.A.', 'ML': 'Air Mediterranee', 'P9': 'Peruvian Airlines', 'RL': 'Royal Flight', 'TC': 'Air Tanzania', 'A8': 'Aerolink Uganda Limited', 'PY': 'Surinam Airways', '1C': 'Hewlett-Packard (Schweiz) GmbH', '7M': 'MAYAir', 'KX': 'Cayman Airways', 'MF': 'Xiamen Airlines', 'ZV': 'V Air Corporation', 'MO': 'Calm Air International', 'LT': 'Air Lituanica', 'F8': 'Flair Airlines Ltd.', 'SA': 'South African Airways', 'G7': 'GoJet Airlines', 'X3': 'TUI fly', 'MZ': 'Merpati Nusantara Airlines', 'ТФ': 'Avia Traffic Company', 'CZ': 'China Southern Airlines', '1X': 'Fly Branson Travel dba Branson AirExpress', 'VX': 'Virgin America ', 'V2': 'Vision Airlines', 'JM': 'Air Jamaica', 'UE': 'Ultimate Jetcharters', '6U': 'Air Cargo Germany', 'XE': 'ExpressJet', 'LS': 'Jet2.com', 'EM': 'Empire Airlines', '6M': 'Zacarias Moreno', 'SX': 'SkyWork Airlines', 'IK': 'Air Kiribati Limited', 'WH': 'Webjet Linhas Aereas', 'B3': 'Bhutan Airlines', 'J8': 'Berjaya Air', '5H': 'Fly540', 'ZC': 'Korongo Airlines', 'C2': 'CEIBA Intercontinental', 'MG': 'Miami Air Lease, Inc.', 'W1': 'World Ticket Ltd', 'DL': 'Delta Air Lines', 'JP': 'Adria Airways', '0Y': 'FlyArystan', 'Q1': 'Sqiva Sistem', '7R': 'RusLine', 'UL': 'Srilankan Airlines', 'LY': 'El Al Israel Airlines', 'EI': 'Aer Lingus', 'EG': 'Ernest Airline', 'EA': 'East Horizon Airlines', 'TK': 'Turkish Airlines', 'C5': 'CommutAir', '4L': 'Palau National Airlines', 'AV': 'Avianca', '1S': 'Sabre Inc.', 'ON': 'Nauru Airline', '1N': 'Navitaire', '2E': 'Smokey Bay Air, Inc.', '3W': 'Malawian Airlines', 'BJ': 'Nouvelair', '1I': 'ChallengAir', 'VP': 'Villa Air Pvt. Ltd. dba Villa Air', 'Q6': 'Skytrans Airlines', 'VZ': 'Thai Vietjet Air', 'PO': 'Polar Air Cargo Worldwide, Inc.', 'HR': 'Hahn Air', '9L': 'West Link Airlines', 'Q3': 'Anguilla Air Services, Ltd', 'LG': 'Luxair', '1T': 'PT Aerosystems Indonesia', 'QV': 'Lao Airlines', 'QZ': 'Indonesia AirAsia', 'GY': 'Colorful Guizhou Airlines', '1E': 'Travelsky Technology Limited', '5E': 'Siam Ga Co. Ltd.', 'XS': 'SITA - Airlines WorldwideTelecommunications and Information Svcs', 'OU': 'Croatia Airlines', '7A': 'Air Jet', '2H': 'Thalys International', 'N5': 'Nolinor Aviation', 'FY': 'Firefly', 'V5': 'Aerovías DAP', 'Z8': 'Amaszonas', 'NS': 'Hebei Airlines', 'YR': 'Grand Canyon Airlines, Inc.dba Scenic Airlines', 'FP': 'Servicios Aéreos de los Andes', '4X': 'Mercury Air Cargo, Inc.', 'BE': 'Flybe', 'EK': 'Emirates', 'XB': 'IATA - Clearing HouseInternational Air Transport Association', 'SD': 'Sudan Airways', 'RQ': 'Kam Air', 'TA': 'TACA Airlines', 'XX': 'Major Airline', 'WA': 'KLM Cityhopper', 'U7': 'Air Uganda', 'WP': 'Island Air', '4C': 'LAN COLOMBIA AIRLINES', 'SY': 'Sun Country Airlines', 'YH': 'Sunsplash Aviation, LLC.', 'AW': 'Africa World Airlines', 'MD': 'Air Madagascar', 'HS': 'Héli Sécurité Hélicopter Airline', 'HN': 'Afghan Jet International', 'CQ': 'Coastal Travels', 'PL': 'Southern Air Charter', 'NI': 'Portugália', '1U': 'ITA Software Inc.', 'UR': 'Uganda Airlines', 'MQ': 'Envoy Air', '6O': 'Orbest', '7D': 'Maluti Sky', 'IM': 'JSC Aircompany ATMA', '8S': 'TurboJET', 'SK': 'Scandinavian Airlines', 'M6': 'Amerijet International Inc.', 'NN': 'VIM Airlines', 'ES': 'DHL Aviation EEMEA B.S.C.(c)', 'TG': 'Thai Airways', '5Y': 'Atlas Air', '3G': 'Gambia Bird Airlines', 'SB': 'Aircalin', '7G': 'StarFlyer', '9G': '9G Rail', 'NC': 'Cobham Aviation Services Australia', 'MC': 'Air Mobility Command', 'CS': 'Continental Micronesia, Inc.', 'CB': 'Caribbean Air Export Import Inc.', 'JO': 'Jonika Airlines', 'O9': 'NOVA Airlines', '5B': 'Bassaka Air Limited', 'PG': 'Bangkok Airways', 'BI': 'Royal Brunei', 'SR': 'Sundair', '2U': "Sun d'Or International Airlines", 'XU': 'African Express Airways (K)  Limited', 'UI': 'Auric Air Services Limited', 'TP': 'TAP Portugal', 'WE': 'Thai Smile', '4G': 'Gazpromavia', 'PC': 'Pegasus Airlines', '4H': 'Hi Air', 'NU': 'Japan Transocean Air', 'TF': 'BRA', 'HB': 'Asia Atlantic Airlines', 'D0': 'DHL Air Limited', 'IO': 'IrAero', 'NH': 'All Nippon Airways', 'MR': 'Hunnu Air', 'M7': 'Marsland Aviation', 'KY': 'Kunming Airlines', '3V': 'TNT Airways', 'Y5': 'Golden Myanmar Airlines Public Co., Ltd', 'WW': 'WOW Air ehf', '9X': 'Executive Express Aviation LLC dbaSouthern Airways', 'OJ': 'Fly Jamaica Airways', 'XQ': 'Sun Express', 'IY': 'Yemenia', 'FM': 'Shanghai Airlines', 'FU': 'Fuzhou Airlines', 'GK': 'Jetstar Japan', 'IG': 'Air Italy', 'MU': 'China Eastern Airlines', '6C': 'Air Timor', 'YK': 'Avia Traffic Company', 'YI': 'Air Sunshine Inc.', 'ZL': 'Regional Express', 'B4': 'ZanAir', '2L': 'Helvetic Airways', 'HE': 'LGW Luftfahrtgesellschaft Walter', 'M4': 'Mistral Air', '7J': 'Tajik Air', 'CK': 'China Cargo Airlines', 'JS': 'Air Koryo', 'JB': 'Helijet', '5J': 'Cebu Pacific', 'JW': 'Vanilla Air', 'СД': 'SKOL', 'L3': 'Lynx Aviation', 'KO': 'Komiaviatrans', 'D8': 'Norwegian Air International', 'OY': 'Andes Lineas Aereas', 'DT': 'TAAG Angola Airlines', 'TH': 'Raya Airways Sdn. Bhd.dba Raya Airways', 'BH': 'Hawkair', 'LC': 'Skyway Costa Rica', 'IX': 'Air India Express', 'RP': 'Chautauqua Airlines', '2N': 'Nextjet', '9I': 'Alliance Air', 'DI': 'Norwegian Air', 'TM': 'LAM Mozambique Airlines', 'GW': 'GetJet', 'OC': 'Oriental Air Bridge', 'VL': 'Air Via Ltd.', 'SI': 'Blue Islands', 'NW': 'Northwest Airlines', 'BK': 'Okay Airways', '9U': 'Air Moldova', 'NO': 'Neos', 'ST': 'Germania', 'AA': 'American Airlines', 'DN': 'Norwegian Air', 'QS': 'SmartWings', '5D': 'Aerolitoral S.A. de C.V.', 'Y8': 'Yangtze River Express', 'GO': 'ULS Airlines Cargo', 'RK': 'Skyview Airways Company Limiteddba Skyview', 'UZ': 'Buraq Air Transport (BRQ)', 'AC': 'Air Canada', 'FZ': 'Flydubai', 'E7': 'Equaflight Service', 'TY': 'Air Caledonie', 'JF': 'Jet Asia Airways', 'CT': 'Alitalia CityLiner', 'K7': 'Air KBZ', 'UA': 'United Airlines', 'Y7': 'NordStar', 'ZH': 'Shenzhen Airlines', 'SM': 'AIR CAIRO', 'VR': 'TACV Cabo Verde Airlines', 'E6': 'Bringer Air Cargo', 'W5': 'Mahan Airlines', 'JC': 'Japan Air Commuter', 'TT': 'Tigerair Australia', 'SC': 'Shandong Airlines', 'G4': 'Allegiant Air', 'U1': 'Videcom International Limited', '1P': 'Worldspan', '55': 'Buta Airways', 'CH': 'Bemidji Airlines', 'M9': 'Motor Sich Airlines', 'PS': 'UIA', '1G': 'Travelport Global Distribution SystemB.V.', 'BP': 'Air Botswana', 'YE': 'Yan Air Ltd', '9R': 'Southern Air', '6R': 'ALROSA', 'PM': 'Canaryfly', 'Q9': 'Air Liaison', '4I': 'IHY Izmir Havayollari A.S.', '2D': 'Eastern Airlines, LLC', 'T2': 'Nakina Air Service', 'MT': 'Thomas Cook Airlines', 'YS': 'HOP!', 'I2': 'Iberia Express', '0E': 'Northwest', 'JT': 'Lion Air', 'CL': 'Lufthansa CityLine', 'AS': 'Alaska Airlines', 'LL': 'Miami Air International', 'EY': 'Etihad Airways', 'XZ': 'AeroItalia', 'B1': 'TAB - Transportes Aéreos Bolivianos', '7O': 'Travel Service', 'TJ': 'Tradewind Aviation', '7K': 'MetroJet', 'RJ': 'Royal Jordanian', 'A9': 'Georgian Airways', 'D6': 'Inter Air', 'BV': 'Blue Panorama Airlines', 'WN': 'Southwest Airlines', 'DE': 'Condor', 'BL': 'Jetstar Pacific Airlines', 'YQ': 'TAR Aerolíneas', 'FB': 'Bulgaria Air', 'G5': 'China Express Airlines', 'S8': 'Sounds Air Travel & Tourism Ltd.', '9S': 'Southern Air Inc.', 'MS': 'EgyptAir', '1Z': 'Sabre Pacific', 'ZX': 'Air Georgian Ltd. dba Air Alliance', '0O': 'Air Ocean', '6D': 'Travel Service Slovensko', '0A': 'Emetebe S.A.', 'YM': 'Air Montenegro', 'GF': 'Gulf Air', '0T': 'AnadoluJet', '0Q': 'Hydro - Quebec', 'AP': 'Air One', 'Z6': 'Dniproavia', 'E2': 'Eagle Atlantic Airlines', 'NP': 'Nile Air', 'PP': 'Jet Aviation Business', '4R': 'CJSC Royal Flight airlines', 'N2': 'Trans-Mediterranean Airways', 'VG': 'VLM Airlines', 'O3': 'Orange Air, LLCN/A', '5F': 'FlyOne', 'ZP': 'Silk Way Airlines', '1Y': 'Electronic Data Systems Corporation', 'VK': 'Level', 'BF': 'French Blue', 'Q7': 'SkyBahamas Airlines', 'A3': 'Aegean Airlines', 'LH': 'Lufthansa', 'FG': 'Ariana Afghan Airlines', 'VU': 'Vuelos Economicos Centroamericanos', 'FA': 'Safair', 'PQ': 'SkyUp Airlines', 'RR': 'Buzz', 'OK': 'Czech Airlines', 'YF': 'Department of National Defence', 'QJ': 'Jet Airways Inc.', 'WJ': 'JetSMART', '8L': 'Lucky Air', 'SW': 'Air Namibia', 'XW': 'NokScoot', 'IE': 'Solomon Airlines', 'ID': 'Batik Air', 'XA': 'ARINC(Aeronautical Radio, Inc.)', '9W': 'Jet Airways', 'P4': 'Aerolíneas Sosa', 'UU': 'Air Austral', '6V': 'AVANZA', 'HY': 'Uzbekistan Airways', 'OV': 'SalamAir', 'H9': 'Himalaya Airlines', 'K4': 'ALS Ltd.', '2Y': 'PT. My Indo Airlines', 'K8': 'Kan Air', '4S': 'Solar Cargo, C.A.', 'M8': 'SkyJet', 'RI': 'Tigerair Mandala', 'GI': 'Itek Air', 'RA': 'Royal Nepal Airlines', 'B2': 'Belavia', 'D4': 'Alidaunia', 'HA': 'Hawaiian Airlines', '5R': 'Rutas Aereas, C.A. dba  RUTACA', 'C6': 'CanJet', 'N6': 'Nomad Aviation (PTY) Ltd.', 'RC': 'Atlantic Airways', '3R': 'Avior Airlines', 'XT': 'Globus LLС', '8E': 'Bering Air', '3C': 'Calima Aviacion S.L', 'YY': 'Major Airline', 'XG': 'SunExpress Deutschland', '4K': 'Kenn Borek Air Ltd.', 'PR': 'Philippine Airlines', 'RB': 'Syrian Arab Airlines', 'WZ': 'Red Wings Airlines', '7I': 'Insel Air', 'P1': 'Public Charters', '2W': 'Welcome Air', '4B': 'Boutique Air', '3D': 'DoKaSch', 'QB': 'Qeshm Air', 'EV': 'ExpressJet', 'TD': 'Tbilisi Airways', 'UY': 'Air Caucasus', 'T1': 'TIK Systems', 'T4': 'TRIP Linhas Aéreas', 'L4': 'Air Service Liege', 'RT': 'UVT Aero', 'AJ': 'Aztec Airways', 'PB': 'Provincial Airlines', 'GA': 'Garuda Indonesia', 'H8': 'Hesa Airlines', 'NE': 'Nesma Airlines', 'VI': 'Volga-Dnepr Airlines', 'IN': 'NAM Air', 'WO': 'Swoop', 'MP': 'Martinair', '9E': 'Endeavor Air', '3K': 'Jetstar Asia', 'V4': 'Vieques Air Link', 'NX': 'Air Macau', 'G3': 'Gol Transportes Aéreos', '6K': 'Kyrgyz Trans Avia', 'L6': 'Mauritania Airlines International', '6G': 'Sun Air Express', 'OS': 'Austrian Airlines', 'FE': 'Far Eastern Air Transport', 'WG': 'Sunwing Airlines', 'ZS': 'JSC Kazaviaspas', '8A': 'Panama Airways', 'T5': 'Turkmenistan Airlines', 'AX': 'Trans States Airlines', 'WB': 'RwandAir', 'F4': 'Air Flamenco', 'YG': 'South Airlines', 'DF': 'Condor', 'ZM': 'Air Manas', 'UX': 'Air Europa', 'Y1': 'Travel Technology Interactive SA', 'HF': "Air Côte d'Ivoire", 'HT': 'Ningxia Cargo Airlines CO.,LTD', 'EX': 'Thai Express Air Co. Ltd', 'XK': 'Air Corsica', 'AL': 'Malta Air', '7U': 'Alpha Air Transport', 'LA': 'LATAM Chile', 'P7': 'Small Planet Airlines', 'ND': 'Sky Wings Airlines', 'H2': 'Sky Airline', 'M5': 'Kenmore Air', '01': 'JetHunter', 'FW': 'Ibex Airlines', 'TV': 'Tibet Airlines', 'N0': 'Norse Atlantic Airways', 'B5': 'East African Safari Air', 'GC': 'Gambia International Airlines', 'ZK': 'Great Lakes Airlines', 'VS': 'Virgin Atlantic', 'EH': 'ANA Wings', 'EF': 'Fly CamInter', 'B7': 'Uni Air', '0H': 'Uzbekistan Airways Express', 'QH': 'Bamboo Airways', '5C': 'Nature Air', '7W': 'Windrose Airlines', 'S2': 'Jet Lite', '0R': 'Renegade Air', 'TI': 'Tailwind Airlines', 'WK': 'Edelweiss Air', '3Z': 'Travel Service Polska Sp. z.o.o.', 'PV': 'St Barth Commuter', '3H': 'Air Inuit', '7L': 'Aerocaribbean', 'EQ': 'TAME Linea Aerea del Ecuador', 'BR': 'Eva Air', '6W': 'FlyBosnia', 'KM': 'Air Malta', 'WV': 'Westair Aviation', '2P': 'PAL Express', 'CP': 'Compass Airlines', 'ZA': 'Skywings Asia Airlines Co., Ltd.', 'DR': 'Ruili Airlines', 'CX': 'Cathay Pacific', 'T8': 'Telair International GmbH', 'L8': 'Afric Aviation', 'QF': 'Qantas', '6Y': 'SmartLynx Airlines', 'OT': 'Aeropelican Air Services', 'GE': 'Lift', '2K': 'Avianca Ecuador', 'KC': 'Air Astana', 'Z2': 'AirAsia Zest', 'J9': 'Jazeera Airways', 'W2': 'FlexFlight', 'UV': 'Helicópteros del Sureste', 'BT': 'airBaltic', 'W4': 'Wizz Air', 'A7': 'Air Niamey', 'VJ': 'VietjetAir', '9T': 'ACT Havayollari A.S.', 'GZ': 'Air Rarotonga', 'KN': 'China United Airlines', 'O6': 'Avianca Brazil', 'Z7': 'Amaszonas', '2C': 'SNCF', 'FS': 'Syphax Airlines', 'I4': 'Interstate Airlines', '3J': 'Cargo Three Inc. dba Pan Air Cargo', 'J6': 'Jet Ops', '8P': 'Pacific Coastal Airlines', 'AE': 'Mandarin Airlines', 'XY': 'Nas Air', 'WY': 'Oman Air', '6Z': 'Euro-Asia Air', '5V': 'Everts Air Cargo', 'OQ': 'Chongqing Airlines', 'D5': 'DHL Aero Expreso S.A.', 'JU': 'Air Serbia', '4Y': 'Airbus Transport International', '9Q': 'Caicos Express Airways', 'RU': 'AirBridgeCargo', 'S3': 'Santa Barbara Airlines', 'DP': 'Pobeda', 'FQ': 'Brindabella Airlines', 'CA': 'Air China', 'AF': 'Air France', 'HH': 'Qanot Sharq', 'KA': 'Aero Nomad Airlines', '4O': 'Interjet', 'WF': 'Wideroe', '8M': 'Myanmar Airways International', 'AM': 'Aeromexico', 'IP': 'Apsara International Air', 'QW': 'Qingdao Airlines', 'QU': 'Azur Air Ukraine', 'I5': 'AirAsia India', 'KB': 'Druk Air', 'TS': 'Air Transat', '8N': 'Regional Air Services', 'SJ': 'Sriwijaya Air', 'SV': 'Saudia', 'JJ': 'LATAM Brasil', 'Q5': '40-Mile Air', 'TU': 'Tunisair', 'NM': 'Manx2', 'TR': 'Scoot', 'IZ': 'Arkia', 'TN': 'Air Tahiti Nui', 'S1': 'Lufthansa Systems', 'BG': 'Biman Bangladesh Airlines', '9A': 'Eaglexpress Air Charter Sdn.Bhd.dbaEaglexpress Air', '5A': 'Alpine Aviation Inc.', 'AI': 'Air India', 'B0': 'La Compagnie', 'C3': 'Trade Air', 'CR': 'OAG', 'SH': 'Sharp Airlines', 'JE': 'Mango', '2J': 'Air Burkina', 'NA': 'Nesma Airlines', '6I': 'Air Alsie', '8W': 'Private Wings', '2S': 'Southwind', '2Q': 'Air Cargo Carriers, LLC.', 'QQ': 'Alliance Airlines', 'L9': 'Lumiwings', 'MH': 'Malaysia Airlines', 'XF': 'Vladivostok Air', 'NY': 'Air Iceland', 'J7': 'Afrijet Business Service', '0M': 'Premier Airlines', 'Y9': 'Kish Airlines', 'V1': 'IBS Software Services Americas, Inc.', 'LU': 'LAN Express', 'Q4': 'Starlink Aviation', 'IH': 'Southern Sky', '9J': 'Dana Airlines Limited', 'EC': 'OpenSkies', '3E': 'Air Choice One', 'BB': 'Seaborne Airlines', '9V': 'Avior Airlines', 'HP': 'Amapola Flyg AB', 'LW': 'Pacific Wings', 'CD': 'Corendon Dutch Airlines', 'B9': 'Iran Air Tours', 'HO': 'Juneyao Airlines', 'T0': 'TACA Peru', 'R3': 'Yakutia Airlines', 'FC': 'FlyCorporate', 'AO': 'Australian Airlines', '7H': 'Ravn Alaska', '5Z': 'CemAir', 'LZ': 'Belle Air', 'FO': 'Flybondi', '8T': 'Air Tindi', 'YJ': 'Asian Wings Airways Limited', 'ZB': 'Monarch Airlines', 'CM': 'Copa Airlines', 'RY': 'Jiangxi Air', '3A': 'Chu Kong Passenger Transport Co. Ltd.', 'R7': 'Aserca\xa0Airlines', 'DS': 'easyJet Switzerland', 'E9': 'Evelop Airlines', '1B': 'Abacus International Pte. Ltd.', 'QX': 'Horizon Air', '3U': 'Sichuan Airlines', 'HJ': 'Hellas Jet', 'AG': 'Aruba Airlines', '6J': 'Solaseed Air', 'TX': 'Air Caraibes', 'NG': 'Aero Contractors', 'JR': 'Joy Air', 'ZZ': 'American Eagle', 'TW': "T'way Air", 'YV': 'Mesa Airlines', 'NK': 'Spirit Airlines', 'UK': 'Vistara', '7F': 'First Air', 'WM': 'Winair', '1L': 'CitizenPlane', 'DY': 'Norwegian Air Shuttle', 'ET': 'Ethiopian Airlines', 'TZ': 'Scoot', 'RM': 'Armenia Aircompany', 'NJ': 'Ghadames Air Transport', 'EB': 'Wamos Air', 'LB': 'Bul Air', 'FD': 'Thai AirAsia', 'G6': 'FlyArna', 'IJ': 'Spring Airlines Japan', 'O2': 'Linear Air', 'NQ': 'Air Japan', 'S9': 'Starbow', 'V0': 'Conviasa', 'DV': 'SCAT', 'JY': 'InterCaribbean Airways', 'HW': 'North-Wright Airways', '8Q': 'Onur Air', 'HK': 'Skippers Aviation', 'DC': 'Braathens Regional', 'BZ': 'Blue Bird Airways', 'WI': 'White Airways', 'M2': 'MHS Aviation', 'EL': 'Ellinair', 'FF': 'Airshop B.V.', 'VC': 'Charter Air Transport, Inc.', 'RO': 'Tarom', 'UT': 'Utair', 'SN': 'Brussels Airlines', 'AY': 'Finnair', 'KD': 'PT Kal Star Aviation', 'XP': 'TEM Enterprises', 'XC': 'Corendon Airlines', 'L2': 'Lynden Air Cargo, LLC', 'K5': 'SeaPort Airlines', 'CJ': 'BA Cityflyer', 'X7': 'Exec Air, Inc. of Naples', 'CG': 'Airlines PNG', 'R4': 'RUS Aviation', 'ZI': 'Aigle Azur', 'LJ': 'Jin Air', 'DG': 'Tigerair Philippines', 'V6': 'Clairmont Holdings Ltd dba VI Air Link', 'QT': 'Avianca Cargo', 'XH': 'Special Ground Handling Service -XH', 'FR': 'Ryanair', '8U': 'Afriqiyah Airways', 'B8': 'Eritrean Airlines', 'T3': 'Eastern Airways', 'VB': 'VivaAerobus', 'JA': 'B&H Airlines', 'ZT': 'Titan Airways Limited', '1M': 'JSC Transport Automated InformationSystems - TAIS', 'SZ': 'Somon Air', 'YX': 'Republic Airlines', '0U': 'Afrosiyob', 'PF': 'Primera Air', 'ZE': 'Eastar Jet', 'ZR': 'Aviacon Zitotrans Air Company JSC', 'IT': 'Tigerair Taiwan', 'JV': 'Bearskin Airlines', '8F': 'STP Airways', 'D3': 'Daallo Airlines', 'R6': 'DOT LT', '1H': 'JSC "Sirena-Travel"', 'F2': 'Safarilink Aviation', '4W': "Warbelow's Air Ventures", 'VT': 'Air Tahiti', 'NT': 'Binter Canarias', '7N': 'Pan American World Airways', 'KI': 'SKS Airways', 'OB': 'Boliviana de Aviación', 'F7': 'iFly Airlines', 'V8': 'Iliamna Air Taxi Inc.', 'BC': 'Skymark Airlines', 'SG': 'SpiceJet', '9C': 'Spring Airlines', '3Y': 'Kartika Airlines', 'OX': 'Orient Thai Airlines', '1A': 'Amadeus IT Group SA', 'QO': 'Quikjet Cargo Airlines Pvt. Ltd', 'UF': 'UM Airlines', 'HM': 'Air Seychelles', 'Y4': 'Volaris', 'QL': 'LASER Airlines', '7B': 'Bees Airline', 'DW': 'Aero-Charter Ukraine', 'F3': 'Flyadeal', 'LI': 'Liat', 'A5': 'HOP!', '5U': 'Transportes Aéreos Regionales', 'JH': 'Fuji Dream Airlines', 'AU': 'Austral Lineas Aereas', 'X4': 'Air Excursion, LLC', 'I8': 'Izhavia', '6H': 'Israir Airlines', 'HX': 'Hong Kong Airlines', '4N': 'Air North Charter and Training Ltd.', '7S': 'Ryan Air Service', '8H': 'BH Air', 'XO': 'South East Asian Airlines (SEAIR)International, Inc.', 'WX': 'Cityjet', 'KU': 'Kuwait Airways', 'BA': 'British Airways', 'IL': 'PT.Trigana Air Service', 'KK': 'Atlas Global Airlines', 'EE': 'Regional Jet OÜ', 'ME': 'Middle East Airlines', 'UP': 'Bahamasair', 'GB': 'ABX Air, Inc.', 'JN': 'Joon', 'JQ': 'Jetstar', 'K6': 'Cambodia Angkor Air', 'IS': 'AIS Airlines B.V.', 'A6': 'Air Alps Aviation', 'LN': 'Libyan Airlines', 'PRM': 'Premier Airlines', 'PN': 'China West Air', 'CV': 'Cargolux', '6T': 'Air Mandalay', 'KR': 'Air Bishkek', 'PK': 'Pakistan International Airlines', '1D': 'Radixx Solutions International, Inc.', 'VY': 'Vueling', 'PI': 'Polar Airlines', 'A4': 'Azimut', 'CY': 'Cyprus Airways', 'EJ': 'New England Airlines', '9N': 'Tropic Air Limited', 'AK': 'AirAsia', '6B': 'TUIfly Nordic', 'D7': 'AirAsia X', 'OD': 'Malindo Air', 'LD': 'AHK Air Hong Kong Limited', 'GV': 'Grant Aviation, Inc.', 'N7': 'Nordic Regional Airline', 'E5': 'Air Arabia Egypt', 'EP': 'Iran Aseman Airlines', '4J': 'FlyDamas', 'OG': 'PLAY', 'VO': 'Tyrolean Airways', 'CE': 'Chalair Aviation', 'CC': 'CM Airlines', 'G9': 'Air Arabia', '3F': 'FlyOne', '2V': 'Amtrak', 'BY': 'Thomson Airways', 'V3': 'Carpatair', 'FX': 'FedEx', 'ЕП': 'Armenia Airways', 'AQ': '9 Air', 'UG': 'Tunisair Express', 'OR': 'TUI Airlines Netherlands', 'S4': 'SATA', 'VH': 'Viva Air Colombia', 'MN': 'Comair', 'DB': 'Brit Air', 'F1': 'Farelogix Qatar Airways', 'W8': 'Cargojet Airways Ltd.', 'AR': 'Aerolineas Argentinas', '9B': 'AccesRail', 'JG': 'JETGO Australia', 'SU': 'Aeroflot', 'X1': 'Fortune', 'UM': 'Air Zimbabwe', 'F5': 'Aerotranscargo', 'HQ': 'Thomas Cook Airlines Belgium', 'N3': 'Aerolíneas Mas', 'JZ': 'Jatayu Airlines', 'XV': 'BVI Airways', 'O4': 'Antrak Air', 'PD': 'Porter Airlines', 'X5': 'S.C. Ten Airways S.R.L.', 'DH': 'Douniah Airlines', 'QP': 'Airkenya Express', '8B': 'TransNusa', 'Q2': 'Maldivian', '5W': 'Wizz Air', '6L': 'Aklak Air', 'IQ': 'Qazaq Air', '2G': 'Angara Airlines', 'CF': 'China Postal Airlines Ltd.', 'XJ': 'Thai AirAsia X', '2A': 'Deutsche Bahn AG', 'I6': 'Air Indus', 'DQ': 'Delta Connection', 'V7': 'Volotea', 'W6': 'Wizz Air', 'H4': 'HiSky', 'RV': '8165343 Canada Inc. dba Air Canada rouge', 'FL': 'Airtran Airways', 'HU': 'Hainan Airlines', '7Z': 'Halcyonair', '5G': 'Shirak Avia', 'B6': 'JetBlue Airways', 'LM': 'Loganair', 'S6': 'Sunrise Airways', 'P5': 'Aerorepublica', 'GP': 'Guangxi Beibu Gulf Airlines Co., Ltd.', 'R0': 'Russian Railways', 'MY': 'Maya Island Air', '9H': 'Chang An Airlines', '4A': 'Aero Transporte S.A.', 'PZ': 'LATAM Paraguay', 'H7': 'HiSky', 'CI': 'China Airlines', 'VF': 'Valuair', 'KT': 'SiAvia', 'IW': 'Wings Air', 'K1': 'Topas Co. Ltd.', 'KZ': 'Nippon Cargo Airlines', '4F': 'Air City', 'V9': 'Thai Vietjet Air', 'D9': 'Donavia', 'UJ': 'Almasria Universal Airlines', '0B': 'Blue Air', '3N': 'Air Urga', 'KG': 'Aerogaviota', 'H1': 'Hahn Air', 'KL': 'KLM', 'US': 'US Airways', 'MK': 'Air Mauritius', '7V': 'Federal Air', 'EO': 'Pegas Fly', 'HC': 'Aero-Tropics Air Services', 'GH': 'Globus Airlines', 'L7': 'Linea Aerea Carguera de Colombia S.A.', 'VV': 'Viva Air', '5O': 'ASL Airlines France', 'UD': 'Hex Air', '1J': 'Axess International Network Inc.', 'P6': 'Pascan Aviation', 'PX': 'Air Niugini', 'LX': 'Swiss International Air Lines', 'RF': 'Connellan air disaster', 'DK': 'Thomas Cook Airlines Scandinavia', 'F9': 'Frontier Airlines', 'XD': 'Air Transport Association of Americad\\b\\a Airlines for America', 'P0': 'Proflight Zambia', 'NZ': 'Air New Zealand', 'EW': 'Eurowings', 'EU': 'Chengdu Airlines', 'J1': 'One Jet, Inc.', 'I3': 'ATA Airlines', 'PH': 'Transavia Denmark', 'X9': 'Avion Express', 'N9': 'Nova Airways', 'FH': 'Freebird Airlines', 'P2': 'Airkenya Express', 'L1': 'E-Savtravel', 'LV': 'Level', 'U6': 'Ural Airlines', 'EZ': 'Sun-Air of Scandinavia', 'YW': 'Air Nostrum', 'YO': 'Heli Air Monaco', 'W3': 'Arik Air', 'J4': 'BADR AIRLINES', 'ZG': 'ZIPAIR Tokyo', 'ZU': 'SUN-AIR', 'II': 'IBC Airways', 'U8': 'Tus Airways', 'DJ': 'AirAsia Japan', 'CN': 'Grand China Air', 'GU': 'Aviateca', 'XM': 'C.A.I. First', 'XI': 'Aeronautical Telecommunications Ltd.(AEROTEL)', 'QD': 'Dobrolet', 'GQ': 'Sky Express', '7C': 'Jeju Air', 'SL': 'Thai Lion Air', 'DZ': 'Donghai Airlines', 'OW': 'Skyward Express', 'OA': 'Olympic Air', 'E8': 'Tayaran Jet', '2O': 'Redemption Inc.', 'BX': 'Air Busan', 'VQ': 'Novoair', '5S': 'Global Aviation Services Group', 'QG': 'Citilink Airlines', 'I9': 'Air Italy', 'UW': 'Uni-Top Airlines', 'Q8': 'Trans Air Congo', 'TL': 'Airnorth', 'NL': 'Shaheen Air', 'EN': 'Air Dolomiti', 'O8': 'Siam Air', 'KH': 'Kyrgyz Air', 'AT': 'Royal Air Maroc', '9P': 'Air Arabia Jordan', 'WT': 'Swiftair', 'RG': 'Rotana Jet', 'GJ': 'Loong Air', 'N4': 'Nordwind Airlines', '4T': 'Belair Airlines', 'MX': 'Mexicana de Aviación', 'FN': 'fastjet', 'C1': 'Tectimes Sudamerica', '3T': 'Tarco Air', 'BS': 'US-Bangla Airlines', '0W': 'Business jet', '9M': 'Central Mountain Air', '5T': 'Canadian North', 'RH': 'PT Republic Express Airlines', '6E': 'IndiGo', 'DU': 'Norwegian Long Haul', 'KS': 'AirConnect', 'M3': 'North Flying', '8G': 'Mid Africa Aviation', 'Z4': 'Zagros Air Co.', 'G8': 'Go!', 'W7': 'Wings of Lebanon S.a.l'}

// Get params
const queryString = window.location.search;
console.log(queryString);

//window.ingelogd = false;

const urlParams = new URLSearchParams(queryString);
var wachtwoord = urlParams.get('wachtwoord');
var gebruikersnaam = urlParams.get('gebruikersnaam');
window.gebruikersnaam = gebruikersnaam;
if (gebruikersnaam == null && wachtwoord != null) {
  window.location.replace("index.html");
}
if (gebruikersnaam != null && wachtwoord == null) {
  window.location.replace("index.html");
}

if (gebruikersnaam != null && wachtwoord != null) {
  check_login(gebruikersnaam, wachtwoord);
  window.loading = true;
}

load_page(gebruikersnaam, wachtwoord);

// delay time
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

// Get users
function check_login(gebruikersnaam, wachtwoord) {
  fetch('https://script.google.com/macros/s/AKfycbwIkgx6u3Koyhgeu6xT5UapGck_-oO7efl0_22jKbKY50aoNq8eAGVqa2IOu5XVO5RBGg/exec')
  .then(response => {
  if (!response.ok) {throw new Error(`Request failed with status ${response.status}`)}
    return response.json()
    document.write("error")
  })
  .then(data => {
    //console.log(data["data"])
    window.users = data;

    window.ingelogd = false;

    for (element in window.users["data"]) {
      if (element==gebruikersnaam) {
        if (window.users["data"][element]["wachtwoord"]==wachtwoord) {
          window.ingelogd = true;
          //console.log(window.ingelogd);
        }
      }
    }
    window.loading = false;

  })
  .catch(error => console.log(error))
}


async function load_page(gebruikersnaam, wachtwoord) {
  if (gebruikersnaam != null && wachtwoord != null) {
    var loading = true;
    while (loading==true) {
      await delay(1);
      if (window.loading==false) {
        if (window.ingelogd == false) {
          //window.location.replace("index.html");
          load_page2();
        }
        if (window.ingelogd == true) {
          load_page3(gebruikersnaam, wachtwoord);
        }
        loading = false;
      }
    }
  }

  else {
    window.ingelogd = false;
    load_page2();
  }
}

function load_page2() {
  var menu = document.getElementById("menu");
  menu_btn1 = document.createElement("a");
  menu_btn1.href = "inloggen.html";
  menu_btn1.innerHTML = "Inloggen";
  menu.appendChild(menu_btn1)
  menu_btn2 = document.createElement("a");
  menu_btn2.href = "aanmelden.html";
  menu_btn2.innerHTML = "Aanmelden";
  menu.appendChild(menu_btn2)
}

function load_page3(gebruikersnaam, wachtwoord) {
  var menu = document.getElementById("menu");
  menu_btn1 = document.createElement("a");
  menu_btn1.href = "mijn_account.html?gebruikersnaam="+gebruikersnaam+"&wachtwoord="+wachtwoord;
  menu_btn1.innerHTML = "Mijn Account";
  menu_btn1.target = "_blank";
  menu.appendChild(menu_btn1);

  menu_btn2 = document.createElement("a");
  menu_btn2.href = "bestemmingslijsten.html?gebruikersnaam="+gebruikersnaam+"&wachtwoord="+wachtwoord;
  menu_btn2.target = "_blank";
  menu_btn2.innerHTML = "Favoriete bestemmingen";
  menu.appendChild(menu_btn2);

  menu_btn3 = document.createElement("a");
  menu_btn3.href = "index.html";
  menu_btn3.innerHTML = "Afmelden";
  menu.appendChild(menu_btn3);
}







// Get Airports by IATA codes
function get_airports() {
  var headers2 = {"apikey": "sQn-e3Rt2AEpL1z1XmSNL2oEPYf2mJO2"}
  fetch('https://tequila-api.kiwi.com/locations/dump?locale=nl-NL&location_types=airport&sort=name&limit=4000', {headers: headers2})
  .then(response => {
  if (!response.ok) {throw new Error(`Request failed with status ${response.status}`)}
    return response.json()
    document.write("error")
  })
  .then(data => {
    console.log(data)
    window.airports_data_dict = {}
    window.airports_data_dict2 = {}
    var country_list = []
    var country_codes_list = []
    var country_continent_list = []

    for (i = 0; i < data["locations"].length; i++) {
      var airport = data["locations"][i]

      if (country_list.includes(airport["city"]["country"]["name"]) == false) {
        country_list.push(airport["city"]["country"]["name"]);
        country_codes_list.push(airport["city"]["country"]["code"]);
        country_continent_list.push(airport["city"]["continent"]["name"]);
      }

      window.airports_data_dict[airport["id"]] = {
          "name": airport["name"],
          "city": airport["city"]["name"],
          "continent": airport["city"]["continent"]["name"],
          "country": airport["city"]["country"]["name"]}
    }

    for (n in country_list) {
      window.airports_data_dict[country_codes_list[n]] = {
          "name": "",
          "city": "",
          "continent": country_continent_list[n],
          "country": country_list[n]}
    }



    console.log(window.airports_data_dict);
    //console.log(window.airports_data_dict2);
    console.log(country_list);
    console.log(country_codes_list);
    console.log(country_continent_list);

  })
  .catch(error => console.log(error))
}


// select input option
function select_option(option, plaats="vertrekplaats") {
  var input = document.getElementById(plaats+"-input");
  input.value = option;
}

// add input options
function add_input_options(plaats="vertrekplaats") {
  var div = document.getElementById(plaats+"-options-div")
  div.replaceChildren();
  var input = document.getElementById(plaats+"-input");

  var element_count = 0;
  for (var element in window.airports_data_dict) {
    var value = input.value.toLowerCase();
    var element_lower = element.toLowerCase();
    var airport = window.airports_data_dict[element];
    if (element_lower.includes(value) || airport["city"].toLowerCase().includes(value) || airport["country"].toLowerCase().includes(value) || airport["name"].toLowerCase().includes(value)) {
      element_count++;
    }
  }

  if (plaats == "bestemming") {
    if (element_count > 2) {
      div.style="height:200px"
    }
    else {
      var height = 70 * element_count + 38;
      div.style="height:"+height+"px"
      }
  }
  else {
    if (element_count > 3) {
      div.style="height:200px"
    }
    else {
      if (element_count == 0) {
        div.style="visibility:hidden"
      }
      else {
        var height = 70 * element_count;
        div.style="height:"+height+"px"
      }
    }
  }

  var list = document.createElement("ul");
  div.appendChild(list)

  if (plaats == "bestemming") {
    var list_item = document.createElement("li");
    list.appendChild(list_item);

    var a = document.createElement("a");
    a.classList.toggle('list-item');
    a.id = "overal-option"

    var p1 = document.createElement("p");
    p1.innerHTML = "OVERAL";
    a.appendChild(p1);
    var p2 = document.createElement("p");
    p2.innerHTML = "Klik hier om overal te zoeken";
    a.appendChild(p2);

    a.addEventListener('click', function(){
      select_option(this.firstChild.innerHTML, "bestemming");
    });
    list_item.appendChild(a);

    var hr = document.createElement("hr");
    list.appendChild(hr);


    if (window.ingelogd == true) {
      var list_item = document.createElement("li");
      list.appendChild(list_item);

      var a2 = document.createElement("a");
      a2.classList.toggle('list-item');
      a2.id = "overal-option2"

      var p1_1 = document.createElement("p");
      p1_1.innerHTML = "FAVORIETE BESTEMMINGEN";
      a2.appendChild(p1_1);

      a2.addEventListener('click', function(){
        select_option(this.firstChild.innerHTML, "bestemming");
      });
      list_item.appendChild(a2);

      var hr = document.createElement("hr");
      list.appendChild(hr);
    }
  }



  for (var element in window.airports_data_dict) {
    var value = input.value.toLowerCase();
    var element_lower = element.toLowerCase();
    var airport = window.airports_data_dict[element];

    if (element_lower.includes(value) || airport["city"].toLowerCase().includes(value) || airport["country"].toLowerCase().includes(value) || airport["name"].toLowerCase().includes(value)) {
      var list_item = document.createElement("li");
      list.appendChild(list_item);

      var a = document.createElement("a");
      a.classList.toggle('list-item');

      var p1 = document.createElement("p");
      p1.innerHTML = element + ", " + window.airports_data_dict[element]["city"];
      a.appendChild(p1);
      var p2 = document.createElement("p");
      p2.innerHTML = window.airports_data_dict[element]["country"];
      a.appendChild(p2);
      var p3 = document.createElement("p");
      p3.innerHTML = window.airports_data_dict[element]["name"];
      a.appendChild(p3);

      a.addEventListener('click', function(){
        select_option(this.firstChild.innerHTML.split(",")[0], plaats);
      });
      list_item.appendChild(a);

      var hr = document.createElement("hr");
      list.appendChild(hr);

    }
  }
}

// show input options
function show_input_options(plaats="vertrekplaats") {
  var plaats_div = document.getElementById(plaats+"-div")
  div = document.createElement("div");
  div.classList.toggle('options-div');
  div.id = plaats+"-options-div"
  plaats_div.appendChild(div);

  add_input_options(plaats);
}

// hide input options
async function hide_input_options(plaats="vertrekplaats") {
  await delay(100);
  var div = document.getElementById(plaats+"-options-div")
  div.remove();
}
// seconds to hours
function seconds_to_hours(time) {
  hours_rest = time % 3600;
  hours = (time - hours_rest)/3600;
  seconds = hours_rest % 60;
  minutes = (hours_rest - seconds) / 60;

  hours2 = hours.toString().padStart(2, '0');
  minutes2 = minutes.toString().padStart(2, '0');
  seconds2 = seconds.toString().padStart(2, '0');

  return hours2+":"+minutes2+":"+seconds2;
}


//Zoeken
function zoeken() {
  var vertrekplaats = document.getElementById("vertrekplaats-input").value.toUpperCase().trim();
  var bestemming = document.getElementById("bestemming-input").value.toUpperCase().trim();

  var stops = document.getElementById("stops-dropdown").value;

  var vertrek_datum_input = document.getElementById("date-input1").value;
  var vertrek_date = vertrek_datum_input.split("-");
  var vertrek_datum = vertrek_date[2] + "/" + vertrek_date[1] + "/" + vertrek_date[0];

  var terug_datum_input = document.getElementById("date-input2").value;
  var terug_date = terug_datum_input.split("-");
  var terug_datum = terug_date[2] + "/" + terug_date[1] + "/" + terug_date[0];

  var tijd1 = document.getElementById("time-input1").value;
  var tijd2 = document.getElementById("time-input2").value;

  var overnachtingen1 = document.getElementById("nights-input1").value;
  var overnachtingen2 = document.getElementById("nights-input2").value;
  console.log(overnachtingen1);
  console.log(overnachtingen2);

  var munteenheid = document.getElementById("currency-dropdown").value;
  var error = false;
  var error_message = "";

  var today = new Date();
  var dag = today.getDate().toString().padStart(2, '0');
  var maand1 = today.getMonth() + 1
  var maand = maand1.toString().padStart(2, '0');
  var jaar2 = today.getFullYear() + 3;
  var jaar = today.getFullYear();

  var datum2 = new Date(jaar2 + "-" + maand + "-" + dag);
  var vertrek_datum_input2 = new Date(vertrek_datum_input);
  var terug_datum_input2 = new Date(terug_datum_input);
  var today2 = new Date(jaar + "-" + maand + "-" + dag);

  //console.log(overnachtingen1);
  //console.log(overnachtingen2 > overnachtingen1);//overnachtingen2);
  if (+overnachtingen1 > +overnachtingen2) {
    error = true;
    error_message =  "Het minimale aantal overnachtingen kan niet groter zijn dat het maximale aantal overnachtingen!"
  }
  if (vertrek_datum_input == "" || vertrek_datum_input == undefined || vertrek_datum_input == null) {
    error = true;
    error_message =  "Je hebt geen eerste datum ingegeven!"
  }

  else {
    if (terug_datum_input == "" || terug_datum_input == undefined || terug_datum_input == null) {
      error = true;
      error_message =  "Je hebt geen tweede datum ingegeven!"
    }
    else {
      if (vertrek_datum_input2 >= terug_datum_input2) {
        error = true;
        error_message =  "De eerste datum die je hebt ingegeven kan niet groter of gelijk zijn aan de tweede!"
      }
      else {
        if (today2 > vertrek_datum_input2) {
          error = true;
          error_message =  "De eerste datum die je hebt ingegeven, ligt in het verleden."
        }
        if (datum2 < terug_datum_input2) {
          error = true;
          error_message =  "De tweede datum die je hebt ingegeven, ligt te ver in de toekomst."
        }
      }
    }
  }

  if (tijd1 == "" || tijd1 == undefined || tijd1 == null) {
    error = true;
    error_message =  "Je hebt geen eerste tijd ingegeven!"
  }

  else {
    if (tijd2 == "" || tijd2 == undefined || tijd2 == null) {
      error = true;
      error_message =  "Je hebt geen tweede tijd ingegeven!"
    }
    else {
      if (tijd1 >= tijd2) {
        error = true;
        error_message =  "De eerste tijd die je hebt ingegeven kan niet later zijn dan de tweede!"
      }
    }
  }

  if (vertrekplaats == bestemming) {
    error = true;
    error_message =  "De vertrekplaats en de bestemming kunnen niet hetzelfde zijn!"
  }
  if (!(bestemming in window.airports_data_dict)) {
    if (bestemming!=="OVERAL") {
      if (window.ingelogd == false) {
        error = true;
        error_message =  "Deze bestemming werd niet gevonden."
      }
      else {
        if (bestemming!=="FAVORIETE BESTEMMINGEN") {
          error = true;
          error_message =  "Deze bestemming werd niet gevonden."
        }
      }
    }
  }
  if (!(vertrekplaats in window.airports_data_dict)) {
    error = true;
    error_message =  "Deze vertrekplaats werd niet gevonden."
  }


  if (error == true) {
    alert(error_message);
  }
  else {
    get_flights(vertrekplaats, bestemming, vertrek_datum, terug_datum, tijd1, tijd2, overnachtingen1, overnachtingen2, munteenheid, stops);
  }
}

function string_to_list(str) {
  if (str == "") {
   var list = []
  }
  else {
    var list = str.split(",")
  }

  return list;
}

// get flights
function get_flights(ve, be, da1, da2, t1, t2, ov1, ov2, mu, st) {
  var headers2 = {"apikey": "sQn-e3Rt2AEpL1z1XmSNL2oEPYf2mJO2"}


  if (be == "FAVORIETE BESTEMMINGEN") {
    bestemmingslijst = string_to_list(window.users["data"][window.gebruikersnaam]["bestemmingslijst"]);

    var error = false;
    if (bestemmingslijst.length == 0) {
      error = true;
    }
    if (bestemmingslijst.length == 1) {
      if (bestemmingslijst[0] == ve) {
        error = true;
      }
    }

    if (error == true) {
      alert("Je hebt geen favoriete bestemmingen of je favoriete bestemming is ook je vertrekplaats!");
    }

    else {
      for (element in bestemmingslijst) {
        var be2 = bestemmingslijst[element];
        if (be != ve) {
          window.data1 = {"data": []}
          window.details = false;
          window.details_num = 0;

          // Ryanair Only
          var url = "https://tequila-api.kiwi.com/v2/search?fly_from="+ve+"&fly_to="+be2+"&date_from="+da1+"&date_to="+da2+"&return_from="+da1+"&return_to="+da2+"&dtime_from="+t1+"&dtime_to="+t2+"&atime_from="+t1+"&atime_to="+t2+"&ret_dtime_from="+t1+"&ret_dtime_to="+t2+"&ret_atime_from="+t1+"&ret_atime_to="+t2+"&nights_in_dst_from="+ov1+"&nights_in_dst_to="+ov2+"&max_stopovers="+st+"&select_airlines=FR&select_airlines_exclude=False&flight_type=round&adults=1&children=0&infants=0&selected_cabins=M&curr="+mu+"&price_from=0&price_to=10000&conn_on_diff_airport=0&vehicle_type=aircraft&ret_from_diff_airport=0&ret_to_diff_airport=0&sort=price&limit=10&locale=nl";

          fetch(url, {headers: headers2})
          .then(response => {
            if (!response.ok) {throw new Error(`Request failed with status ${response.status}`)}
            return response.json()
            document.write("error")
          })
          .then(data => {
            // Combining the 2 dictionaries
            window.data1 = {"data": window.data1["data"].concat(data["data"])};

          })
          .catch(error => console.log(error))


          // Without Ryanair
          var url = "https://tequila-api.kiwi.com/v2/search?fly_from="+ve+"&fly_to="+be2+"&date_from="+da1+"&date_to="+da2+"&return_from="+da1+"&return_to="+da2+"&dtime_from="+t1+"&dtime_to="+t2+"&atime_from="+t1+"&atime_to="+t2+"&ret_dtime_from="+t1+"&ret_dtime_to="+t2+"&ret_atime_from="+t1+"&ret_atime_to="+t2+"&nights_in_dst_from="+ov1+"&nights_in_dst_to="+ov2+"&max_stopovers="+st+"&select_airlines=FR&select_airlines_exclude=True&flight_type=round&adults=1&children=0&infants=0&selected_cabins=M&curr="+mu+"&price_from=0&price_to=10000&conn_on_diff_airport=0&vehicle_type=aircraft&ret_from_diff_airport=0&ret_to_diff_airport=0&sort=price&limit=90&locale=nl";

          fetch(url, {headers: headers2})
          .then(response => {
            if (!response.ok) {throw new Error(`Request failed with status ${response.status}`)}
            return response.json()
            document.write("error")
          })
          .then(data => {
            // Combining the 2 dictionaries
            window.data1 = {"data": window.data1["data"].concat(data["data"])};

            if (+element+1 == bestemmingslijst.length) {
              //window.data3 = {"data": window.data1}
              console.log(window.data1);
              show_results(window.data1, mu);
            }
          })
          .catch(error => console.log(error))
        }
      }
    }
  }


  else {
    if (be.length ==3) {
      be= "airport:"+be
    }

    if (ve.length ==3) {
      ve= "airport:"+ve
    }
    //Ryanair Only
    if (be == "OVERAL") {
      var url = "https://tequila-api.kiwi.com/v2/search?fly_from="+ve+"&date_from="+da1+"&date_to="+da2+"&return_from="+da1+"&return_to="+da2+"&dtime_from="+t1+"&dtime_to="+t2+"&atime_from="+t1+"&atime_to="+t2+"&ret_dtime_from="+t1+"&ret_dtime_to="+t2+"&ret_atime_from="+t1+"&ret_atime_to="+t2+"&nights_in_dst_from="+ov1+"&nights_in_dst_to="+ov2+"&max_stopovers="+st+"&select_airlines=FR&select_airlines_exclude=False&flight_type=round&adults=1&children=0&infants=0&selected_cabins=M&curr="+mu+"&price_from=0&price_to=10000&conn_on_diff_airport=0&vehicle_type=aircraft&ret_from_diff_airport=0&ret_to_diff_airport=0&sort=price&limit=100&locale=nl";
    }
    else {
      var url = "https://tequila-api.kiwi.com/v2/search?fly_from="+ve+"&fly_to="+be+"&date_from="+da1+"&date_to="+da2+"&return_from="+da1+"&return_to="+da2+"&dtime_from="+t1+"&dtime_to="+t2+"&atime_from="+t1+"&atime_to="+t2+"&ret_dtime_from="+t1+"&ret_dtime_to="+t2+"&ret_atime_from="+t1+"&ret_atime_to="+t2+"&nights_in_dst_from="+ov1+"&nights_in_dst_to="+ov2+"&max_stopovers="+st+"&select_airlines=FR&select_airlines_exclude=False&flight_type=round&adults=1&children=0&infants=0&selected_cabins=M&curr="+mu+"&price_from=0&price_to=10000&conn_on_diff_airport=0&vehicle_type=aircraft&ret_from_diff_airport=0&ret_to_diff_airport=0&sort=price&limit=10&locale=nl";
    }
    console.log(url)

    fetch(url, {headers: headers2})
    .then(response => {
      if (!response.ok) {throw new Error(`Request failed with status ${response.status}`)}
      return response.json()
      document.write("error")
    })
    .then(data => {
      console.log(data);
      window.data1 = data;
      window.details = false;
      window.details_num = 0;
      //show_results(data, mu);
    })
    .catch(error => console.log(error))

    //Without Ryanair
    if (be == "OVERAL") {
      var url = "https://tequila-api.kiwi.com/v2/search?fly_from="+ve+"&date_from="+da1+"&date_to="+da2+"&dtime_from="+t1+"&dtime_to="+t2+"&atime_from="+t1+"&atime_to="+t2+"&ret_dtime_from="+t1+"&ret_dtime_to="+t2+"&ret_atime_from="+t1+"&ret_atime_to="+t2+"&return_from="+da1+"&return_to="+da2+"&nights_in_dst_from="+ov1+"&nights_in_dst_to="+ov2+"&max_stopovers="+st+"&select_airlines=FR&select_airlines_exclude=True&flight_type=round&adults=1&children=0&infants=0&selected_cabins=M&curr="+mu+"&price_from=0&price_to=10000&conn_on_diff_airport=0&vehicle_type=aircraft&ret_from_diff_airport=0&ret_to_diff_airport=0&sort=price&limit=1000&locale=nl";
    }
    else {
      var url = "https://tequila-api.kiwi.com/v2/search?fly_from="+ve+"&fly_to="+be+"&date_from="+da1+"&date_to="+da2+"&return_from="+da1+"&return_to="+da2+"&dtime_from="+t1+"&dtime_to="+t2+"&atime_from="+t1+"&atime_to="+t2+"&ret_dtime_from="+t1+"&ret_dtime_to="+t2+"&ret_atime_from="+t1+"&ret_atime_to="+t2+"&nights_in_dst_from="+ov1+"&nights_in_dst_to="+ov2+"&max_stopovers="+st+"&select_airlines=FR&select_airlines_exclude=True&flight_type=round&adults=1&children=0&infants=0&selected_cabins=M&curr="+mu+"&price_from=0&price_to=10000&conn_on_diff_airport=0&vehicle_type=aircraft&ret_from_diff_airport=0&ret_to_diff_airport=0&sort=price&limit=200&locale=nl";
    }

    console.log(url)

    fetch(url, {headers: headers2})
    .then(response => {
      if (!response.ok) {throw new Error(`Request failed with status ${response.status}`)}
      return response.json()
      document.write("error")
    })
    .then(data => {
      console.log(data);
      window.data2 = data;
      window.details = false;
      window.details_num = 0;
      //show_results(data, mu);

      // Combining the 2 dictionaries
      //var data3 = Object.assign({}, window.data1, window.data2);
      //var data3 = createObj(window.data1["data"], window.data2["data"]);
      var data3 = window.data1["data"].concat(window.data2["data"]);
      var data4 = {"data": data3}
      console.log(data4)
      show_results(data4, mu);
    })
    .catch(error => console.log(error))
  }
}

// Combine dictionaries
function createObj(obj1, obj2){
    var food = {};
    for (var i in obj1) {
      food[i] = obj1[i];
    }
    for (var j in obj2) {
      food[j] = obj2[j];
    }
    return food;
}

// Show Results
function show_results(data, munteenheid) {
  results_div = document.getElementById("results-div");
  results_div.replaceChildren();

  if (data["data"].length > 0) {
    note = document.createElement("p");
    note.innerHTML = "*De weergegeven tijden geven de lokale tijd aan op de weergegeven plaatsen.";
    results_div.appendChild(note);
  }

  else {
    note = document.createElement("p");
    note.innerHTML = "Geen resultaten gevonden.";
    results_div.appendChild(note);
  }

  for (result in data["data"]) {
    result2 = data["data"][result]

    witregel = document.createElement("br");
    results_div.appendChild(witregel);
    witregel = document.createElement("br");
    results_div.appendChild(witregel);



    result_div = document.createElement("div");
    result_div.style = "background: white;width:80%;margin-left: 10%;text-align:left;";
    result_div.id = "result_div"+(+result+1);
    results_div.appendChild(result_div);

    // creating heen- en terug- div
    heen_div = document.createElement("div");
    //heen_div.style = "background: white;width:80%;margin-left: 10%;text-align:left;";
    result_div.appendChild(heen_div);
    terug_div = document.createElement("div");
    //terug_div.style = "background: white;width:80%;margin-left: 10%;text-align:left;";
    result_div.appendChild(terug_div);
    totaal_div = document.createElement("div");
    //terug_div.style = "background: white;width:80%;margin-left: 10%;text-align:left;";
    result_div.appendChild(totaal_div);

    // creating heen- en terug- route
    var heen = true;
    var heen_route = [];
    var terug_route = [];
    //console.log(result2["route"])
    for (route in result2["route"]) {
      if (heen == true) {
        heen_route.push(result2["route"][route])
        if (result2["route"][route]["flyTo"] == result2["flyTo"]) {
          heen = false;
        }
      }
      else {
        terug_route.push(result2["route"][route])
      }
    }
    //console.log(heen_route);
    //console.log(terug_route);


    // airline lists
    var heen_airlines_list = []
    for (i = 0; i < heen_route.length; i++) {
      var airline = heen_route[i]["airline"]
      if (airline in airlines_data_dict) {
        var airline2 = airlines_data_dict[airline];
      }
      else {
        airline2 = airline;
      }

      var error = false;
      for (element in heen_airlines_list) {
        if (airline2 == heen_airlines_list[element]) {
          error = true;
        }
      }

      if (error == false) {
        heen_airlines_list.push(airline2);
      }
    }

    var terug_airlines_list = []
    for (i = 0; i < terug_route.length; i++) {
      var airline = terug_route[i]["airline"]
      if (airline in airlines_data_dict) {
        var airline2 = airlines_data_dict[airline];
      }
      else {
        airline2 = airline;
      }
      var error = false;
      for (element in terug_airlines_list) {
        if (airline2 == terug_airlines_list[element]) {
          error = true;
        }
      }

      if (error == false) {
        terug_airlines_list.push(airline2);
      }
    }


    //divs
    logo_div1 = document.createElement("div");
    logo_div1.style = "width:15%; text-align:left; display: inline-block; position: absolute; margin-top:30px";
    heen_div.appendChild(logo_div1);
    text_div1 = document.createElement("div");
    text_div1.style = "margin-left:20%; width:78%;text-align:left; display: inline-block;";
    heen_div.appendChild(text_div1);

    witregel = document.createElement("br");
    heen_div.appendChild(witregel);
    witregel = document.createElement("br");
    heen_div.appendChild(witregel);
    witregel = document.createElement("br");
    heen_div.appendChild(witregel);

    logo_div2 = document.createElement("div");
    logo_div2.style = "width:15%; text-align:left; display: inline-block; position: absolute; margin-top:30px";
    terug_div.appendChild(logo_div2);
    text_div2 = document.createElement("div");
    text_div2.style = "margin-left:20%; width:78%;text-align:left; display: inline-block;";
    terug_div.appendChild(text_div2);

    witregel = document.createElement("br");
    terug_div.appendChild(witregel);
    witregel = document.createElement("br");
    terug_div.appendChild(witregel);

    div1 = document.createElement("div");
    div1.style = "width:15%; text-align:left; display: inline-block; position: absolute; margin-top:30px";
    terug_div.appendChild(div1);
    div2 = document.createElement("div");
    div2.style = "margin-left:20%; width:78%;text-align:left; display: inline-block;";
    totaal_div.appendChild(div2);


    // heen div
    if (heen_airlines_list.length == 1) {
      airlines_logo = document.createElement("img");
      airlines_logo.src = heen_route[0]["airline"] +".png";
      airlines_logo.alt = heen_airlines_list[0];
      airlines_logo.style = "width:50%;margin-left: 15%;align:left;";
      logo_div1.appendChild(airlines_logo);
    }
    else {
      airlines_logo = document.createElement("img");
      airlines_logo.src = heen_route[0]["airline"] +".png";
      airlines_logo.alt = heen_airlines_list[0];
      airlines_logo.style = "width:30%;margin-left: 25%;align:left;";
      logo_div1.appendChild(airlines_logo);
      witregel = document.createElement("br");
      logo_div1.appendChild(witregel);
      airlines_logo = document.createElement("img");
      airlines_logo.src = heen_route[1]["airline"] +".png";
      airlines_logo.alt = heen_airlines_list[1];
      airlines_logo.style = "width:30%;margin-left: 25%;align:left;";
      logo_div1.appendChild(airlines_logo);
    }

    var uur_en_datum1 = data["data"][result]["local_departure"].split("T");
    var datum1 = uur_en_datum1[0];
    var datum1_list = datum1.split("-");
    var vertrek_datum = datum1_list[2] + "/" + datum1_list[1] + "/" + datum1_list[0];
    var uur1 = uur_en_datum1[1].substr(0, 5);

    var uur_en_datum2 = data["data"][result]["local_arrival"].split("T");
    var datum2 = uur_en_datum2[0];
    var datum2_list = datum2.split("-");
    var aankomst_datum = datum2_list[2] + "/" + datum2_list[1] + "/" + datum2_list[0];
    var uur2 = uur_en_datum2[1].substr(0, 5);

    var duur = seconds_to_hours(data["data"][result]["duration"]["departure"]);

    if (heen_route.length == 1) {
      var stops = "Rechtstreeks";
    }
    else {
      if (heen_route.length == 2) {
        var stopplaats = heen_route[0]["cityTo"];
        var stops = "1 stop ("+stopplaats+")";
      }
      else {
        var stops_list = [];
        var stops_count = heen_route.length - 1;
        for (var j = 0; j < stops_count; j++) {
          var stopplaats = heen_route[j]["cityTo"];
          stops_list.push(stopplaats);
        }
        var stops2 = stops_list.join(", ");
        var stops = stops_count + " stops ("+ stops2 +")";
        //var stops = heen_route[heen_route.length-1]["flyFrom"]
      }
    }


    witregel = document.createElement("br");
    text_div1.appendChild(witregel);

    airlines_text = document.createElement("p");
    airlines_text.style = "font-weight: bold;";
    airlines_text.innerHTML = "Heen:     " + heen_airlines_list.join(", ");
    text_div1.appendChild(airlines_text);
    line = document.createElement("hr");
    text_div1.appendChild(line);

    vertrekplaats_div1 = document.createElement("div");
    vertrekplaats_div1.style = "position: absolute; margin-top: 20px; width:35%; text-align:left; display: inline-block;";
    text_div1.appendChild(vertrekplaats_div1);
    img_div1 = document.createElement("div");
    img_div1.style = "margin-top: 20px; text-align:center; width:20%; display: inline-block; position: absolute; left:43%;";
    text_div1.appendChild(img_div1);
    bestemming_div1 = document.createElement("div");
    bestemming_div1.style = "margin-top: 20px; margin-left: 65%; width:35%; text-align: left; display: inline-block;";
    text_div1.appendChild(bestemming_div1);



    vertrekplaats_code_text = document.createElement("p");
    vertrekplaats_code_text.innerHTML = data["data"][result]["flyFrom"];
    vertrekplaats_div1.appendChild(vertrekplaats_code_text);
    vertrek_uur_text = document.createElement("p");
    vertrek_uur_text.innerHTML = uur1;
    vertrekplaats_div1.appendChild(vertrek_uur_text);
    vertrek_datum_text = document.createElement("p");
    vertrek_datum_text.innerHTML = vertrek_datum;
    vertrekplaats_div1.appendChild(vertrek_datum_text);
    vertrekplaats_naam_text = document.createElement("p");
    vertrekplaats_naam_text.innerHTML = window.airports_data_dict[data["data"][result]["flyFrom"]]["name"];
    vertrekplaats_div1.appendChild(vertrekplaats_naam_text);
    vertrekplaats_stad_text = document.createElement("p");
    vertrekplaats_stad_text.innerHTML = data["data"][result]["cityFrom"] + ", " + data["data"][result]["countryFrom"]["name"];
    vertrekplaats_div1.appendChild(vertrekplaats_stad_text);
    witregel = document.createElement("br");
    vertrekplaats_div1.appendChild(witregel);

    plane_img = document.createElement("img");
    plane_img.src = "images/vlucht_route.png";
    plane_img.style = "width: 100%;";
    img_div1.appendChild(plane_img);
    stops_text = document.createElement("p");
    stops_text.style = "font-weight: bold;";
    stops_text.innerHTML = stops;
    img_div1.appendChild(stops_text);
    duur_text = document.createElement("p");
    duur_text.style = "font-weight: bold;";
    duur_text.innerHTML = duur;
    img_div1.appendChild(duur_text);


    bestemming_code_text = document.createElement("p");
    bestemming_code_text.innerHTML = data["data"][result]["flyTo"];
    bestemming_div1.appendChild(bestemming_code_text);
    aankomst_uur_text = document.createElement("p");
    aankomst_uur_text.innerHTML = uur2;
    bestemming_div1.appendChild(aankomst_uur_text);
    aankomst_datum_text = document.createElement("p");
    aankomst_datum_text.innerHTML = aankomst_datum;
    bestemming_div1.appendChild(aankomst_datum_text);
    bestemming_naam_text = document.createElement("p");
    bestemming_naam_text.innerHTML = window.airports_data_dict[data["data"][result]["flyTo"]]["name"];
    bestemming_div1.appendChild(bestemming_naam_text);
    bestemming_stad_text = document.createElement("p");
    bestemming_stad_text.innerHTML = data["data"][result]["cityTo"] + ", " + data["data"][result]["countryTo"]["name"];
    bestemming_div1.appendChild(bestemming_stad_text);


    // TERUG div

    if (terug_airlines_list.length == 1) {
      airlines_logo = document.createElement("img");
      airlines_logo.src = terug_route[0]["airline"] +".png";
      airlines_logo.alt = terug_airlines_list[0];
      airlines_logo.style = "width:50%;margin-left: 15%;align:left;";
      logo_div2.appendChild(airlines_logo);
    }
    else {
      airlines_logo = document.createElement("img");
      airlines_logo.src = terug_route[0]["airline"] +".png";
      airlines_logo.alt = terug_airlines_list[0];
      airlines_logo.style = "width:30%;margin-left: 25%;align:left;";
      logo_div2.appendChild(airlines_logo);
      witregel = document.createElement("br");
      logo_div2.appendChild(witregel);
      airlines_logo = document.createElement("img");
      airlines_logo.src = terug_route[1]["airline"] +".png";
      airlines_logo.alt = terug_airlines_list[1];
      airlines_logo.style = "width:30%;margin-left: 25%;align:left;";
      logo_div2.appendChild(airlines_logo);
    }

    var uur_en_datum1 = terug_route[0]["local_departure"].split("T");
    var datum1 = uur_en_datum1[0];
    var datum1_list = datum1.split("-");
    var vertrek_datum = datum1_list[2] + "/" + datum1_list[1] + "/" + datum1_list[0];
    var uur1 = uur_en_datum1[1].substr(0, 5);

    var uur_en_datum2 = terug_route[terug_route.length-1]["local_arrival"].split("T");
    var datum2 = uur_en_datum2[0];
    var datum2_list = datum2.split("-");
    var aankomst_datum = datum2_list[2] + "/" + datum2_list[1] + "/" + datum2_list[0];
    var uur2 = uur_en_datum2[1].substr(0, 5);

    var duur = seconds_to_hours(data["data"][result]["duration"]["return"]);

    if (terug_route.length == 1) {
      var stops = "Rechtstreeks";
    }
    else {
      if (terug_route.length == 2) {
        var stopplaats = terug_route[0]["cityTo"];
        var stops = "1 stop ("+stopplaats+")";
      }
      else {
        var stops_list = [];
        var stops_count = terug_route.length - 1;
        for (var j = 0; j < stops_count; j++) {
          var stopplaats = terug_route[j]["cityTo"];
          stops_list.push(stopplaats);
        }
        var stops2 = stops_list.join(", ");
        var stops = stops_count + " stops ("+ stops2 +")";
      }
    }



    airlines_text = document.createElement("p");
    airlines_text.style = "font-weight: bold;";
    airlines_text.innerHTML = "Terug:     " + terug_airlines_list.join(", ");
    text_div2.appendChild(airlines_text);
    line = document.createElement("hr");
    text_div2.appendChild(line);

    vertrekplaats_div1 = document.createElement("div");
    vertrekplaats_div1.style = "position: absolute; margin-top: 20px; width:35%; text-align:left; display: inline-block;";
    text_div2.appendChild(vertrekplaats_div1);
    img_div1 = document.createElement("div");
    img_div1.style = "margin-top: 20px; text-align:center; width:20%; display: inline-block; position: absolute; left:43%;";
    text_div2.appendChild(img_div1);
    bestemming_div1 = document.createElement("div");
    bestemming_div1.style = "margin-top: 20px; margin-left: 65%; width:35%; text-align: left; display: inline-block;";
    text_div2.appendChild(bestemming_div1);



    vertrekplaats_code_text = document.createElement("p");
    vertrekplaats_code_text.innerHTML = terug_route[terug_route.length-1]["flyTo"];
    vertrekplaats_div1.appendChild(vertrekplaats_code_text);
    vertrek_uur_text = document.createElement("p");
    vertrek_uur_text.innerHTML = uur2;
    vertrekplaats_div1.appendChild(vertrek_uur_text);
    vertrek_datum_text = document.createElement("p");
    vertrek_datum_text.innerHTML = aankomst_datum;
    vertrekplaats_div1.appendChild(vertrek_datum_text);
    vertrekplaats_naam_text = document.createElement("p");
    vertrekplaats_naam_text.innerHTML = window.airports_data_dict[terug_route[terug_route.length-1]["flyTo"]]["name"];
    vertrekplaats_div1.appendChild(vertrekplaats_naam_text);
    vertrekplaats_stad_text = document.createElement("p");
    vertrekplaats_stad_text.innerHTML = window.airports_data_dict[terug_route[terug_route.length-1]["flyTo"]]["city"] + ", " + window.airports_data_dict[terug_route[terug_route.length-1]["flyTo"]]["country"];
    vertrekplaats_div1.appendChild(vertrekplaats_stad_text);

    plane_img = document.createElement("img");
    plane_img.src = "images/vlucht_route2.png";
    plane_img.style = "width: 100%;";
    img_div1.appendChild(plane_img);
    stops_text = document.createElement("p");
    stops_text.style = "font-weight: bold;";
    stops_text.innerHTML = stops;
    img_div1.appendChild(stops_text);
    duur_text = document.createElement("p");
    duur_text.style = "font-weight: bold;";
    duur_text.innerHTML = duur;
    img_div1.appendChild(duur_text);


    bestemming_code_text = document.createElement("p");
    bestemming_code_text.innerHTML = terug_route[0]["flyFrom"];
    bestemming_div1.appendChild(bestemming_code_text);
    aankomst_uur_text = document.createElement("p");
    aankomst_uur_text.innerHTML = uur1;
    bestemming_div1.appendChild(aankomst_uur_text);
    aankomst_datum_text = document.createElement("p");
    aankomst_datum_text.innerHTML = vertrek_datum;
    bestemming_div1.appendChild(aankomst_datum_text);
    bestemming_naam_text = document.createElement("p");
    bestemming_naam_text.innerHTML = window.airports_data_dict[terug_route[0]["flyFrom"]]["name"];
    bestemming_div1.appendChild(bestemming_naam_text);
    bestemming_stad_text = document.createElement("p");
    bestemming_stad_text.innerHTML = window.airports_data_dict[terug_route[0]["flyFrom"]]["city"] + ", " + window.airports_data_dict[terug_route[0]["flyFrom"]]["country"];
    bestemming_div1.appendChild(bestemming_stad_text);


    // TOTAAL DIV
    if (munteenheid == "EUR") {
      var teken = "€";
    }
    if (munteenheid == "USD") {
      var teken = "$";
    }
    if (munteenheid == "GBP") {
      var teken = "£";
    }

    airlines_text = document.createElement("p");
    airlines_text.style = "font-weight: bold;";
    airlines_text.innerHTML = "Totaal:";
    div2.appendChild(airlines_text);
    line = document.createElement("hr");
    div2.appendChild(line);

    div2_1 = document.createElement("div");
    div2_1.style = "position: absolute; margin-top: 20px; width:35%; text-align:left; display: inline-block;";
    div2.appendChild(div2_1);
    div2_2 = document.createElement("div");
    div2_2.style = "margin-top: 20px; text-align:center; width:20%; display: inline-block; position: absolute; left:43%;";
    div2.appendChild(div2_2);
    div2_3 = document.createElement("div");
    div2_3.style = "margin-top: 20px; margin-left: 65%; width:35%; text-align: left; display: inline-block;";
    div2.appendChild(div2_3);

    overnachtingen_text = document.createElement("p");
    overnachtingen_text.innerHTML = "Aantal overnachtingen: " + result2["nightsInDest"];
    div2_1.appendChild(overnachtingen_text);

    det_btn = document.createElement("p");
    det_btn.classList.toggle("det_btn");
    det_btn.id = "det_btn-"+(+result+1);
    det_btn.addEventListener('click', function(){
      show_details(data, this.id, munteenheid);
    });
    det_btn.innerHTML = "V";
    div2_2.appendChild(det_btn);

    prijs_text = document.createElement("a");
    prijs_text.classList.toggle("price")
    prijs_text.innerHTML = teken + data["data"][result]["conversion"][munteenheid];
    div2_3.appendChild(prijs_text);

    prijs_text2 = document.createElement("span");
    prijs_text.classList.toggle("price2")
    prijs_text2.innerHTML = "/persoon";
    div2_3.appendChild(prijs_text2);

    witregel = document.createElement("br");
    div2_3.appendChild(witregel);
    witregel = document.createElement("br");
    div2_3.appendChild(witregel);


  }
}

// show details
function show_details(data, id, munteenheid) {
  var error = false;

  if (window.details == true) {
    pre_pressed_btn = document.getElementById("det_btn-"+window.details_num);
    pre_pressed_btn.innerHTML = "V";
    result_div = document.getElementById("result_div"+window.details_num);
    result_div.lastChild.remove();

    if (window.details_num == id.split("-")[1]) {
      window.details = false;
      window.details_num = 0;
      error = true;
    }
  }

  if (error == false) {
    window.details = true;
    window.details_num = id.split("-")[1];
    pressed_btn = document.getElementById(id);
    pressed_btn.innerHTML = "Λ";

    if (munteenheid == "EUR") {
      var teken = "€";
    }
    if (munteenheid == "USD") {
      var teken = "$";
    }
    if (munteenheid == "GBP") {
      var teken = "£";
    }

    result_div = document.getElementById("result_div"+id.split("-")[1]);
    details_div = document.createElement("div");
    details_div.style = "background: white; width:100%; text-align:left;";
    result_div.appendChild(details_div);
    //details_div2 = document.createElement("div");
    //details_div2.style = "background: white; width:100%; text-align:left;";
    //result_div.appendChild(details_div2);

    line = document.createElement("hr");
    line.style = "border-style: dashed;width: 95%; margin-left: 2.5%;";
    details_div.appendChild(line);

    reis_div = document.createElement("div");
    reis_div.style = "width: 100%; text-align: left; display: inline-block;";
    details_div.appendChild(reis_div);
    //totaal_div = document.createElement("div");
    //totaal_div.style = "margin-left: 1%; width: 20%; text-align: left;display: inline-block;";
    //details_div.appendChild(totaal_div);

    heen_div = document.createElement("div");
    reis_div.appendChild(heen_div);
    terug_div = document.createElement("div");
    reis_div.appendChild(terug_div);

    var result = data["data"][window.details_num-1];
    var stops_count = result["route"].length-1;

    //v_line = document.createElement("hr");
    //var height = (180*stops_count) + 155;
    //v_line.style = "position: relative; bottom:"+height+"px; width: 1px; height: "+height+"px; display: inline-block;";
    //v_line.style = "width: 1px; height: "+height+"px; display: inline;";
    //reis_div.appendChild(v_line);

    heen_logo_div = document.createElement("div");
    heen_logo_div.style = "width: 11%; text-align: center; position: absolute;";
    heen_div.appendChild(heen_logo_div);
    heen_text_div = document.createElement("div");
    heen_text_div.style = "margin-left: 15%; text-align: left;";
    heen_div.appendChild(heen_text_div);

    terug_logo_div = document.createElement("div");
    terug_logo_div.style = "width: 11%; text-align: center; position: absolute;";
    terug_div.appendChild(terug_logo_div);
    terug_text_div = document.createElement("div");
    terug_text_div.style = "margin-left: 15%; text-align: left;";
    terug_div.appendChild(terug_text_div);

    // creating heen- en terug- route
    var heen = true;
    var heen_route = [];
    var terug_route = [];
    console.log(result["route"])
    for (route in result["route"]) {
      if (heen == true) {
        heen_route.push(result["route"][route])
        if (result["route"][route]["flyTo"] == result["flyTo"]) {
          heen = false;
        }
      }
      else {
        terug_route.push(result["route"][route])
      }
    }

    // heen stops
    if (heen_route.length == 1) {
      var heen_stops_count = 0;
      var heen_stops_text = "Rechtstreeks";
    }
    else {
      if (heen_route.length == 2) {
        var heen_stops_count = 1;
        var heen_stops_text = "1 stop";
      }
      else {
        var heen_stops_count = heen_route.length - 1;
        var heen_stops_text = heen_stops_count + " stops";
      }
    }

    // terug-stops
    if (terug_route.length == 1) {
      var terug_stops_count = 0;
      var terug_stops_text = "Rechtstreeks";
    }
    else {
      if (terug_route.length == 2) {
        var terug_stops_count = 1;
        var terug_stops_text = "1 stop";
      }
      else {
        var terug_stops_count = terug_route.length - 1;
        var terug_stops_text = terug_stops_count + " stops";
      }
    }

    //note_div = document.createElement("div");
    //note_div.style = "margin-left: 1%; display: inline-block; width: 20%; text-align: left;";
    //text_div.appendChild(note_div);

    const maanden = ["januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"]
    const weekdagen = ["zondag", "maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag"];


    // heen
    witregel = document.createElement("br");
    heen_text_div.appendChild(witregel);
    vlucht_text = document.createElement("p");
    vlucht_text.style = "font-weight: bold;";
    var vlucht = "Heen: "+ result["flyFrom"]+" ("+result["cityFrom"]+") --> "+result["flyTo"]+" ("+result["cityTo"]+") ("+ heen_stops_text +")";
    vlucht_text.innerHTML = vlucht;
    heen_text_div.appendChild(vlucht_text);
    line = document.createElement("hr");
    line.style = "width: 75%;";
    heen_text_div.appendChild(line);

    route_img_div = document.createElement("div");
    route_img_div.style = "position: absolute; width: 2.5%; text-align: center;";
    heen_text_div.appendChild(route_img_div);
    text_div2 = document.createElement("div");
    text_div2.style = "margin-left: 5%; width: 70%; text-align: left; margin-right: 0; display: inline-block;";
    heen_text_div.appendChild(text_div2);

    v_line = document.createElement("hr");
    var height = (180*heen_stops_count) + 190;
    v_line.style = "width: 1px; height: "+height+"px; display: inline-block;";
    heen_text_div.appendChild(v_line);

    totaal_div1 = document.createElement("div");
    totaal_div1.style = "margin-left: 1%; display: inline-block; width: 20%; text-align: left;";
    heen_text_div.appendChild(totaal_div1);

    for (n = 0; n < (heen_stops_count+1); n++) {
      var result2 = heen_route[n]

      var uur_en_datum1 = result2["local_departure"].split("T");
      var datum1 = uur_en_datum1[0];
      var date1 = new Date(datum1);
      var weekdag1 = date1.getDay();
      var dag1 = date1.getDate();
      var datum1_list = datum1.split("-");
      var uur1 = uur_en_datum1[1].substr(0, 5);
      var vertrek_datum = uur1 +", "+ weekdagen[weekdag1] + " " + dag1 + " " + maanden[datum1_list[1]-1] + " " + datum1_list[0];

      var uur_en_datum2 = result2["local_arrival"].split("T");
      var datum2 = uur_en_datum2[0];
      var date2 = new Date(datum2);
      var weekdag2 = date2.getDay();
      var dag2 = date2.getDate();
      var datum2_list = datum2.split("-");
      var uur2 = uur_en_datum2[1].substr(0, 5);
      var aankomst_datum = uur2 + ", " + weekdagen[weekdag2] + " " + dag2 + " " + maanden[datum2_list[1]-1] + " " + datum2_list[0];

      var utc_uur_en_datum1 = result2["utc_departure"].split("Z");
      var utc_datum1 = utc_uur_en_datum1[0];
      var utc_date1 = new Date(utc_datum1);

      var utc_uur_en_datum2 = result2["utc_arrival"].split("Z");
      var utc_datum2 = utc_uur_en_datum2[0];
      var utc_date2 = new Date(utc_datum2);

      var duur1 = utc_date2 - utc_date1;
      var duur = duur1/1000;

      witregel = document.createElement("br");
      text_div2.appendChild(witregel);
      vlucht_text_vertrek_datum = document.createElement("p");
      vlucht_text_vertrek_datum.style = "font-weight: bold;";
      vlucht_text_vertrek_datum.innerHTML = vertrek_datum;
      text_div2.appendChild(vlucht_text_vertrek_datum);

      if (result2["flyFrom"] in window.airports_data_dict) {
        var flight_text1 = result2["flyFrom"] + ", " + result2["cityFrom"] + ", " + window.airports_data_dict[result2["flyFrom"]]["country"];
      }
      else {
        var flight_text1 = result2["flyFrom"] + ", " + result2["cityFrom"];
      }

      vlucht_text_vertrek_plaats = document.createElement("p");
      vlucht_text_vertrek_plaats.style = "font-weight: bold;";
      vlucht_text_vertrek_plaats.innerHTML = flight_text1;
      text_div2.appendChild(vlucht_text_vertrek_plaats);

      var airline1 = result2["airline"];
      if (airline1 in airlines_data_dict) {
        airline = airlines_data_dict[airline1];
      }
      else {
        airline = airline1;
      }

      witregel = document.createElement("br");
      text_div2.appendChild(witregel);
      route_text_ = document.createElement("p");
      route_text_.innerHTML = seconds_to_hours(duur) + " in het vliegtuig ("+ airline +")";
      text_div2.appendChild(route_text_);

      witregel = document.createElement("br");
      text_div2.appendChild(witregel);
      vlucht_text_aankomst_datum = document.createElement("p");
      vlucht_text_aankomst_datum.style = "font-weight: bold;";
      vlucht_text_aankomst_datum.innerHTML = aankomst_datum;
      text_div2.appendChild(vlucht_text_aankomst_datum);

      if (result2["flyTo"] in window.airports_data_dict) {
        var flight_text2 = result2["flyTo"] + ", " + result2["cityTo"] + ", " + window.airports_data_dict[result2["flyTo"]]["country"];
      }
      else {
        var flight_text2 = result2["flyTo"] + ", " + result2["cityTo"];
      }

      vlucht_text_aankomst_plaats = document.createElement("p");
      vlucht_text_aankomst_plaats.style = "font-weight: bold;";
      vlucht_text_aankomst_plaats.innerHTML = flight_text2;
      text_div2.appendChild(vlucht_text_aankomst_plaats);
      witregel = document.createElement("br");
      text_div2.appendChild(witregel);

      logo_img = document.createElement("img");
      logo_img.style = "width: 60%; margin: 70px 25px 17px 25px;";
      logo_img.src = result2["airline"] + ".png";
      logo_img.alt = airlines_data_dict[result2["airline"]];
      heen_logo_div.appendChild(logo_img);

      route_img = document.createElement("img");
      route_img.style = "height: 100px; margin-top: 30px; margin-bottom: 7px;";
      route_img.src = "images/details_route_img.jpg";
      route_img_div.appendChild(route_img);

      if (n < heen_stops_count) {
        witregel = document.createElement("br");
        route_img_div.appendChild(witregel);
        witregel = document.createElement("br");
        route_img_div.appendChild(witregel);
        witregel = document.createElement("br");
        route_img_div.appendChild(witregel);

        var wachttijd_utc_uur_en_datum1 = result["route"][n+1]["utc_departure"].split("Z");
        var wachttijd_utc_datum1 = wachttijd_utc_uur_en_datum1[0];
        var wachttijd_utc_date1 = new Date(wachttijd_utc_datum1);

        var wachttijd_utc_uur_en_datum2 = result2["utc_arrival"].split("Z");
        var wachttijd_utc_datum2 = wachttijd_utc_uur_en_datum2[0];
        var wachttijd_utc_date2 = new Date(wachttijd_utc_datum2);

        var wachttijd1 = wachttijd_utc_date1 - wachttijd_utc_date2;
        var wachttijd = wachttijd1/1000;

        wachttijd_text = document.createElement("p");
        wachttijd_text.innerHTML = seconds_to_hours(wachttijd) + " om over te stappen in " + result2["cityTo"];
        text_div2.appendChild(wachttijd_text);
      }
    }



    // Terug
    witregel = document.createElement("br");
    terug_text_div.appendChild(witregel);
    vlucht_text = document.createElement("p");
    vlucht_text.style = "font-weight: bold;";
    var vlucht = "Terug: "+ terug_route[0]["flyFrom"]+" ("+terug_route[0]["cityFrom"]+") --> "+terug_route[terug_route.length-1]["flyTo"]+" ("+terug_route[terug_route.length-1]["cityTo"]+") ("+ terug_stops_text +")";
    vlucht_text.innerHTML = vlucht;
    terug_text_div.appendChild(vlucht_text);
    line = document.createElement("hr");
    line.style = "width: 75%;";
    terug_text_div.appendChild(line);

    route_img_div = document.createElement("div");
    route_img_div.style = "position: absolute; width: 2.5%; text-align: center;";
    terug_text_div.appendChild(route_img_div);
    text_div2 = document.createElement("div");
    text_div2.style = "margin-left: 5%; width: 70%; text-align: left; margin-right: 0; display: inline-block;";
    terug_text_div.appendChild(text_div2);

    v_line = document.createElement("hr");
    var height = (180*terug_stops_count) + 160;
    v_line.style = "width: 1px; height: "+height+"px; display: inline-block;";
    terug_text_div.appendChild(v_line);

    totaal_div = document.createElement("div");
    totaal_div.style = "margin-left: 1%; display: inline-block; width: 20%; text-align: left;";
    terug_text_div.appendChild(totaal_div);

    for (n = 0; n < (terug_stops_count+1); n++) {
      var result2 = terug_route[n]

      var uur_en_datum1 = result2["local_departure"].split("T");
      var datum1 = uur_en_datum1[0];
      var date1 = new Date(datum1);
      var weekdag1 = date1.getDay();
      var dag1 = date1.getDate();
      var datum1_list = datum1.split("-");
      var uur1 = uur_en_datum1[1].substr(0, 5);
      var vertrek_datum = uur1 +", "+ weekdagen[weekdag1] + " " + dag1 + " " + maanden[datum1_list[1]-1] + " " + datum1_list[0];

      var uur_en_datum2 = result2["local_arrival"].split("T");
      var datum2 = uur_en_datum2[0];
      var date2 = new Date(datum2);
      var weekdag2 = date2.getDay();
      var dag2 = date2.getDate();
      var datum2_list = datum2.split("-");
      var uur2 = uur_en_datum2[1].substr(0, 5);
      var aankomst_datum = uur2 + ", " + weekdagen[weekdag2] + " " + dag2 + " " + maanden[datum2_list[1]-1] + " " + datum2_list[0];

      var utc_uur_en_datum1 = result2["utc_departure"].split("Z");
      var utc_datum1 = utc_uur_en_datum1[0];
      var utc_date1 = new Date(utc_datum1);

      var utc_uur_en_datum2 = result2["utc_arrival"].split("Z");
      var utc_datum2 = utc_uur_en_datum2[0];
      var utc_date2 = new Date(utc_datum2);

      var duur1 = utc_date2 - utc_date1;
      var duur = duur1/1000;

      witregel = document.createElement("br");
      text_div2.appendChild(witregel);
      vlucht_text_vertrek_datum = document.createElement("p");
      vlucht_text_vertrek_datum.style = "font-weight: bold;";
      vlucht_text_vertrek_datum.innerHTML = vertrek_datum;
      text_div2.appendChild(vlucht_text_vertrek_datum);

      if (result2["flyFrom"] in window.airports_data_dict) {
        var flight_text1 = result2["flyFrom"] + ", " + result2["cityFrom"] + ", " + window.airports_data_dict[result2["flyFrom"]]["country"];
      }
      else {
        var flight_text1 = result2["flyFrom"] + ", " + result2["cityFrom"];
      }

      vlucht_text_vertrek_plaats = document.createElement("p");
      vlucht_text_vertrek_plaats.style = "font-weight: bold;";
      vlucht_text_vertrek_plaats.innerHTML = flight_text1;
      text_div2.appendChild(vlucht_text_vertrek_plaats);

      var airline1 = result2["airline"];
      if (airline1 in airlines_data_dict) {
        airline = airlines_data_dict[airline1];
      }
      else {
        airline = airline1;
      }

      witregel = document.createElement("br");
      text_div2.appendChild(witregel);
      route_text_ = document.createElement("p");
      route_text_.innerHTML = seconds_to_hours(duur) + " in het vliegtuig ("+ airline +")";
      text_div2.appendChild(route_text_);

      witregel = document.createElement("br");
      text_div2.appendChild(witregel);
      vlucht_text_aankomst_datum = document.createElement("p");
      vlucht_text_aankomst_datum.style = "font-weight: bold;";
      vlucht_text_aankomst_datum.innerHTML = aankomst_datum;
      text_div2.appendChild(vlucht_text_aankomst_datum);

      if (result2["flyTo"] in window.airports_data_dict) {
        var flight_text2 = result2["flyTo"] + ", " + result2["cityTo"] + ", " + window.airports_data_dict[result2["flyTo"]]["country"];
      }
      else {
        var flight_text2 = result2["flyTo"] + ", " + result2["cityTo"];
      }

      vlucht_text_aankomst_plaats = document.createElement("p");
      vlucht_text_aankomst_plaats.style = "font-weight: bold;";
      vlucht_text_aankomst_plaats.innerHTML = flight_text2;
      text_div2.appendChild(vlucht_text_aankomst_plaats);
      witregel = document.createElement("br");
      text_div2.appendChild(witregel);

      logo_img = document.createElement("img");
      logo_img.style = "width: 60%; margin: 70px 25px 17px 25px;";
      logo_img.src = result2["airline"] + ".png";
      logo_img.alt = airlines_data_dict[result2["airline"]];
      terug_logo_div.appendChild(logo_img);

      route_img = document.createElement("img");
      route_img.style = "height: 100px; margin-top: 30px; margin-bottom: 7px;";
      route_img.src = "images/details_route_img.jpg";
      route_img_div.appendChild(route_img);

      if (n < terug_stops_count) {
        witregel = document.createElement("br");
        route_img_div.appendChild(witregel);
        witregel = document.createElement("br");
        route_img_div.appendChild(witregel);
        witregel = document.createElement("br");
        route_img_div.appendChild(witregel);

        var wachttijd_utc_uur_en_datum1 = result["route"][n+1]["utc_departure"].split("Z");
        var wachttijd_utc_datum1 = wachttijd_utc_uur_en_datum1[0];
        var wachttijd_utc_date1 = new Date(wachttijd_utc_datum1);

        var wachttijd_utc_uur_en_datum2 = result2["utc_arrival"].split("Z");
        var wachttijd_utc_datum2 = wachttijd_utc_uur_en_datum2[0];
        var wachttijd_utc_date2 = new Date(wachttijd_utc_datum2);

        var wachttijd1 = wachttijd_utc_date1 - wachttijd_utc_date2;
        var wachttijd = wachttijd1/1000;

        wachttijd_text = document.createElement("p");
        wachttijd_text.innerHTML = seconds_to_hours(wachttijd) + " om over te stappen in " + result2["cityTo"];
        text_div2.appendChild(wachttijd_text);
      }
    }

    if (result["availability"]["seats"] != null) {
      var woord = "stoelen";
      if (result["availability"]["seats"]==1) {
        woord = "stoel"
      }
      vlucht_text_aankomst_plaats = document.createElement("p");
      vlucht_text_aankomst_plaats.style = "font-weight: bold;";
      vlucht_text_aankomst_plaats.innerHTML = "Nog maar " + result["availability"]["seats"] + " " + woord + " over!";
      totaal_div.appendChild(vlucht_text_aankomst_plaats);
      witregel = document.createElement("br");
      totaal_div.appendChild(witregel);
    }

    prijs_text = document.createElement("a");
    prijs_text.classList.toggle("price")
    prijs_text.innerHTML = teken + result["conversion"][munteenheid];
    totaal_div.appendChild(prijs_text);
    prijs_text2 = document.createElement("span");
    prijs_text2.classList.toggle("price2")
    prijs_text2.innerHTML = "/persoon";
    totaal_div.appendChild(prijs_text2);
    witregel = document.createElement("br");
    totaal_div.appendChild(witregel);
    witregel = document.createElement("br");
    totaal_div.appendChild(witregel);

    prijs_text = document.createElement("p");
    prijs_text.style = "font-weight: bold;";
    prijs_text.innerHTML = result["nightsInDest"] + " overnachtingen in " +result["cityTo"]+", "+ result["countryTo"]["name"];
    totaal_div1.appendChild(prijs_text);
  }
}


// delay function
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

// show function

async function show1() {
  get_airports();

  var today = new Date();
  var dag = today.getDate().toString().padStart(2, '0');
  var maand1 = today.getMonth() + 1
  var maand = maand1.toString().padStart(2, '0');
  var jaar = today.getFullYear();
  var jaar2 = today.getFullYear() + 3;

  var datum1 = jaar + "-" + maand + "-" + dag
  var datum2 = jaar2 + "-" + maand + "-" + dag

  date_picker1 = document.getElementById("date-input1");
  date_picker1.min = datum1;
  date_picker1.max = datum2;

  date_picker2 = document.getElementById("date-input2");
  date_picker2.min = datum1;
  date_picker2.max = datum2;


  var loading = true;
  while (loading==true) {
    await delay(1);
    if (window.airports_data_dict!=undefined) {
      console.log("data found!");
      //add_input_options("vertrekplaats");
      //add_input_options("bestemming");
      loading = false;
    }
  }
}

show1();
