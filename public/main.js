const businessList = [
  {
    "Business Name": "Dr. Shaye Pennington, MD",
    "Business Phone": 5174010056,
    "Business Address": "210 25th Ave N Ste 1220 Nashville, TN 37203"
  },
  {
    "Business Name": "Tara Michelle Forrest",
    "Business Phone": 6155942376,
    "Business Address": "210 25th Ave N Ste 1220 Nashville, TN 37203"
  },
  {
    "Business Name": "Mimi Mungomba, LMFT",
    "Business Phone": 6154225638,
    "Business Address": "210 25th Ave N Ste 1220 Nashville, TN 37203"
  },
  {
    "Business Name": "Dr. Jordan Simmons, MD",
    "Business Phone": 6156319560,
    "Business Address": "335 Murfreesboro Pike Nashville, TN 37210"
  },
  {
    "Business Name": "Stephen Gerard Navyac, LMFT",
    "Business Phone": 6153000883,
    "Business Address": "1919 19th Ave S Nashville, TN 37212"
  },
  {
    "Business Name": "Dr. Leighton Teague, MD",
    "Business Phone": 6162247429,
    "Business Address": "230 Great Circle Rd Ste 229 Nashville, TN 37228"
  },
  {
    "Business Name": "Elisabeth Porter, MFT",
    "Business Phone": 6159339318,
    "Business Address": "2021 21st Ave S Ste 430 Nashville, TN 37212"
  },
  {
    "Business Name": "Corey Springer, MMFT",
    "Business Phone": 6159885123,
    "Business Address": "2021 21st Ave S Ste 410 Nashville, TN 37212"
  },
  {
    "Business Name": "Laura Anderson",
    "Business Phone": 6156690508,
    "Business Address": "2021 21st Ave S Ste 426 Nashville, TN 37212"
  },
  {
    "Business Name": "Grace Mullins, LMFT",
    "Business Phone": 6158155189,
    "Business Address": "2021 21st Ave S Ste 410 Nashville, TN 37212"
  },
  {
    "Business Name": "Emily Kratzert, TLMFT",
    "Business Phone": 9048917067,
    "Business Address": "2021 21st Ave S Ste 430 Nashville, TN 37212"
  },
  {
    "Business Name": "Mia Velarde",
    "Business Phone": 9092388474,
    "Business Address": "2021 21st Ave S Nashville, TN 37212"
  },
  {
    "Business Name": "Stephanie Bashirian, LMFT",
    "Business Phone": 6154926700,
    "Business Address": "2021 21st Ave S Ste 410 Nashville, TN 37212"
  },
  {
    "Business Name": "Katia Hurt",
    "Business Phone": 6154926700,
    "Business Address": "2021 21st Ave S Ste 410 Nashville, TN 37212"
  },
  {
    "Business Name": "Mahaley Patel, MA, MMFT",
    "Business Phone": 6159885123,
    "Business Address": "2107 Bernard Ave Nashville, TN 37212"
  },
  {
    "Business Name": "Jill Huse Tietz, LMFT",
    "Business Phone": 6154604200,
    "Business Address": "2400 White Ave Nashville, TN 37204"
  },
  {
    "Business Name": "Dr. Laurence Lopez, MD",
    "Business Phone": 6154604200,
    "Business Address": "2400 White Ave Nashville, TN 37204"
  },
  {
    "Business Name": "Jennifer Maynard, MMFT",
    "Business Phone": 6159056371,
    "Business Address": "2200 21st Ave S Ste 304 Nashville, TN 37212"
  },
  {
    "Business Name": "Fresenius Kidney Care East Nashville",
    "Business Phone": 8008815101,
    "Business Address": "1001 Riverside Dr Nashville, TN 37206"
  },
  {
    "Business Name": "Fresenius Kidney Care Vanderbilt",
    "Business Phone": 8008815101,
    "Business Address": "2906 Foster Creighton Dr Ste 100 Nashville, TN 37204"
  },
  {
    "Business Name": "Vanderbilt Dialysis Clinic",
    "Business Phone": 8008815101,
    "Business Address": "2906 Foster Creighton Dr Ste 200 Nashville, TN 37204"
  },
  {
    "Business Name": "Vanderbilt East Dialysis Clinic",
    "Business Phone": 8008815101,
    "Business Address": "20 Rachel Dr Nashville, TN 37214"
  },
  {
    "Business Name": "DaVita",
    "Business Phone": 6153291162,
    "Business Address": "1919 Charlotte Ave Nashville, TN 37203"
  },
  {
    "Business Name": "Dialysis Associates",
    "Business Phone": 6153540053,
    "Business Address": "344 White Bridge Pike Nashville, TN 37209"
  },
  {
    "Business Name": "The Vanderbilt University",
    "Business Phone": 6154674070,
    "Business Address": "20 Rachel Dr Nashville, TN 37214"
  },
  {
    "Business Name": "Dialysis Clinic Inc",
    "Business Phone": 6153273061,
    "Business Address": "1633 Church St Ste 160 Nashville, TN 37203"
  },
  {
    "Business Name": "Dialysis Clinic Inc",
    "Business Phone": 6159150323,
    "Business Address": "1616 Hayes St Nashville, TN 37203"
  },
  {
    "Business Name": "Dialysis Clinic Inc",
    "Business Phone": 6153273984,
    "Business Address": "935 21st Ave N Nashville, TN 37208"
  },
  {
    "Business Name": "Dialysis Associates of East Nashville",
    "Business Phone": 6152583288,
    "Business Address": "604 Gallatin Ave Nashville, TN 37206"
  },
  {
    "Business Name": "Dialysis Clinic Inc",
    "Business Phone": 6157423033,
    "Business Address": "3229 Clarksville Pike Nashville, TN 37218"
  },
  {
    "Business Name": "Dialysis Clinic Inc",
    "Business Phone": 6158320761,
    "Business Address": "510 Recovery Rd Nashville, TN 37211"
  },
  {
    "Business Name": "Dialysis Clinic Inc",
    "Business Phone": 6158320959,
    "Business Address": "417 Harding Industrial Dr Nashville, TN 37211"
  },
  {
    "Business Name": "Dialysis Clinic Inc",
    "Business Phone": 6158657310,
    "Business Address": "605 W Due West Ave Madison, TN 37115"
  },
  {
    "Business Name": "DaVita Briley Dialysis",
    "Business Phone": 6158700580,
    "Business Address": "1221 Briarville Rd Madison, TN 37115"
  },
  {
    "Business Name": "DaVita Nashville Kidney Care Dialysis",
    "Business Phone": 6152329165,
    "Business Address": "3810 Central Pike Hermitage, TN 37076"
  },
  {
    "Business Name": "Dci Hermitage",
    "Business Phone": 6159027036,
    "Business Address": "5653 Frist Blvd Hermitage, TN 37076"
  },
  {
    "Business Name": "Cass Lake Dialysis Facility",
    "Business Phone": 2183354095,
    "Business Address": "5200 Virginia Way Brentwood, TN 37027"
  },
  {
    "Business Name": "Franklin Kidney Clinic",
    "Business Phone": 6156288064,
    "Business Address": "256 Seaboard Ln Franklin, TN 37067"
  },
  {
    "Business Name": "Dialysis Associates of West Nashville",
    "Business Phone": 6155999810,
    "Business Address": "1120 Lakeview Dr Ste 400 Franklin, TN 37067"
  },
  {
    "Business Name": "Fmc Fresenius Med Care Nephro",
    "Business Phone": 6158072306,
    "Business Address": "1120 Lakeview Dr Franklin, TN 37067"
  },
  {
    "Business Name": "Dialysis Clinic Inc-Smyrna",
    "Business Phone": 6154626149,
    "Business Address": "623 Fitzhugh Blvd Smyrna, TN 37167"
  },
  {
    "Business Name": "Dr. Elizabeth C Podoba, MD",
    "Business Phone": 2818942900,
    "Business Address": "11302 Fallbrook Dr Houston, TX 77065"
  },
  {
    "Business Name": "Jayne, Christopher, MD",
    "Business Phone": 8329248788,
    "Business Address": "11302 Fallbrook Dr Houston, TX 77065"
  },
  {
    "Business Name": "Women's Care",
    "Business Phone": 2814693399,
    "Business Address": "11301 Fallbrook Dr Houston, TX 77065"
  },
  {
    "Business Name": "Chuong Pham, MD",
    "Business Phone": 8322370222,
    "Business Address": "18220 State Highway 249 Houston, TX 77070"
  },
  {
    "Business Name": "Jonathan R. Russell, MD, FACOG",
    "Business Phone": 2818904448,
    "Business Address": "18220 State Highway 249 Houston, TX 77070"
  },
  {
    "Business Name": "Norton, Stacy L, MD",
    "Business Phone": 2814443440,
    "Business Address": "18220 State Highway 249 Houston, TX 77070"
  },
  {
    "Business Name": "Stephanie S. Bruce, MD, FACOG",
    "Business Phone": 2814443440,
    "Business Address": "18220 State Highway 249 Houston, TX 77070"
  },
  {
    "Business Name": "Latricia Thompson, MD, FACOG",
    "Business Phone": 2818904448,
    "Business Address": "18220 State Highway 249 Houston, TX 77070"
  },
  {
    "Business Name": "Nora Chiu, DO",
    "Business Phone": 8322370222,
    "Business Address": "18220 State Highway 249 Houston, TX 77070"
  },
  {
    "Business Name": "Dr. Nahille Ibrahim Natour, MD",
    "Business Phone": 2814771000,
    "Business Address": "18220 State Highway 249 Houston, TX 77070"
  },
  {
    "Business Name": "Dr. Muhammad Shahid Mustafa, MD",
    "Business Phone": 2616687702,
    "Business Address": "14781 Memorial Dr Ste 1598 Houston, TX 77079"
  },
  {
    "Business Name": "Lauren Correa Siemer, MD",
    "Business Phone": 6153225000,
    "Business Address": "3601 The Vanderbilt Clinic Nashville, TN 37232"
  },
  {
    "Business Name": "Trevor Alan Robison, MD",
    "Business Phone": 6153223000,
    "Business Address": "3601 The Vanderbilt Clinic Nashville, TN 37232"
  },
  {
    "Business Name": "George, Alexander J, MD",
    "Business Phone": 6153223000,
    "Business Address": "3601 The Vanderbilt Clinic Nashville, TN 37232"
  },
  {
    "Business Name": "McIlroy, David R, MD",
    "Business Phone": 6153223000,
    "Business Address": "3601 The Vanderbilt Clinic Nashville, TN 37232"
  },
  {
    "Business Name": "Chang, Tony C, MD",
    "Business Phone": 6153223000,
    "Business Address": "3601 The Vanderbilt Clinic Nashville, TN 37232"
  },
  {
    "Business Name": "Ana Maria Lobo, MD",
    "Business Phone": 6153223000,
    "Business Address": "3601 The Vanderbilt Clinic Nashville, TN 37232"
  },
  {
    "Business Name": "Krishnan Sridhar Ramanujan, MD",
    "Business Phone": 6159361830,
    "Business Address": "3601 The Vanderbilt Clinic Nashville, TN 37232"
  },
  {
    "Business Name": "Prudhvi Raj Budati, MD",
    "Business Phone": 6153223000,
    "Business Address": "3601 The Vanderbilt Clinic Nashville, TN 37232"
  },
  {
    "Business Name": "Maricela Jacobo Rubio, MD",
    "Business Phone": 6159362000,
    "Business Address": "3601 The Vanderbilt Clinic Nashville, TN 37232"
  },
  {
    "Business Name": "Pauline Ripchik, MD",
    "Business Phone": 6159362000,
    "Business Address": "3601 The Vanderbilt Clinic Nashville, TN 37232"
  },
  {
    "Business Name": "Kehinde, Tolulope, MD",
    "Business Phone": 6153223000,
    "Business Address": "3601 The Vanderbilt Clinic Nashville, TN 37232"
  },
  {
    "Business Name": "Langford, Brendan, MD",
    "Business Phone": 6153223000,
    "Business Address": "3601 The Vanderbilt Clinic Nashville, TN 37232"
  },
  {
    "Business Name": "Angel, Federica B, MD",
    "Business Phone": 6159363636,
    "Business Address": "1211 Medical Center Dr Nashville, TN 37232"
  },
  {
    "Business Name": "Ferrell, Paul B, MD",
    "Business Phone": 6153225000,
    "Business Address": "1211 Medical Center Dr Nashville, TN 37232"
  },
  {
    "Business Name": "Greene, Matthew H, MD",
    "Business Phone": 6153225000,
    "Business Address": "1211 Medical Center Dr Nashville, TN 37232"
  },
  {
    "Business Name": "Walther, Michelle M, MD",
    "Business Phone": 6159361160,
    "Business Address": "1211 Medical Center Dr Nashville, TN 37232"
  },
  {
    "Business Name": "Dimiceli-Zsigm, Mary, MD",
    "Business Phone": 6153228476,
    "Business Address": "1211 Medical Center Dr Nashville, TN 37232"
  },
  {
    "Business Name": "Matthew David Lipton, MD",
    "Business Phone": 6153225000,
    "Business Address": "1211 Medical Center Dr Nashville, TN 37232"
  },
  {
    "Business Name": "Bales, Brian D, MD",
    "Business Phone": 6153225000,
    "Business Address": "1211 Medical Center Dr Nashville, TN 37232"
  },
  {
    "Business Name": "Deegan, Robert J, MD",
    "Business Phone": 6153225000,
    "Business Address": "1211 Medical Center Dr Nashville, TN 37232"
  },
  {
    "Business Name": "Dr. William R Furman, MD",
    "Business Phone": 6159365194,
    "Business Address": "1211 Medical Center Dr Nashville, TN 37232"
  },
  {
    "Business Name": "Harvey, Stephen T, MD",
    "Business Phone": 6153225000,
    "Business Address": "1211 Medical Center Dr Nashville, TN 37232"
  },
  {
    "Business Name": "Rao Vidya N MD",
    "Business Phone": 6153225000,
    "Business Address": "1211 Medical Center Dr Nashville, TN 37232"
  },
  {
    "Business Name": "Chandrashekar, Meera, MD",
    "Business Phone": 6153221000,
    "Business Address": "1211 Medical Center Dr Nashville, TN 37232"
  },
  {
    "Business Name": "Foster, John R, MD",
    "Business Phone": 6153225000,
    "Business Address": "1211 Medical Center Dr Nashville, TN 37232"
  },
  {
    "Business Name": "Cummings, Jared J, MD",
    "Business Phone": 6159361830,
    "Business Address": "1211 Medical Center Dr Nashville, TN 37232"
  },
  {
    "Business Name": "Loren Elisa Smith, MD",
    "Business Phone": 6159361830,
    "Business Address": "1211 Medical Center Dr Nashville, TN 37232"
  },
  {
    "Business Name": "Jeffery Deontai Clemmons, MD",
    "Business Phone": 6159361830,
    "Business Address": "1211 Medical Center Dr Nashville, TN 37232"
  },
  {
    "Business Name": "Jonathan Wanderer, MD",
    "Business Phone": 6153325000,
    "Business Address": "1211 Medical Center Dr Nashville, TN 37232"
  },
  {
    "Business Name": "Alexander Kieber, MD",
    "Business Phone": 6159361830,
    "Business Address": "1211 Medical Center Dr Nashville, TN 37232"
  },
  {
    "Business Name": "Boyle, Jill Kay, MD",
    "Business Phone": 6153225000,
    "Business Address": "1211 Medical Center Dr Nashville, TN 37232"
  },
  {
    "Business Name": "Dr. Jessica Anne Quinlan, MD",
    "Business Phone": 6159360005,
    "Business Address": "1211 Medical Center Dr Nashville, TN 37232"
  },
  {
    "Business Name": "Reid Alden Phelps, MDPHD",
    "Business Phone": 8016331862,
    "Business Address": "1211 Medical Center Dr Nashville, TN 37232"
  },
  {
    "Business Name": "Austin Woolard, MD",
    "Business Phone": 6159361830,
    "Business Address": "1211 Medical Center Dr Nashville, TN 37232"
  },
  {
    "Business Name": "Montes, Rebekah, OD",
    "Business Phone": 7135278480,
    "Business Address": "190 Heights Blvd Houston, TX 77007"
  },
  {
    "Business Name": "Crossroads Medical Group",
    "Business Phone": 6156727122,
    "Business Address": "491 Sage Rd N Ste 200 White House, TN 37188"
  },
  {
    "Business Name": "Springer, Michael A, MD",
    "Business Phone": 8655840962,
    "Business Address": "400 Sugartree Ln Franklin, TN 37064"
  },
  {
    "Business Name": "DR John P Overholt DR",
    "Business Phone": 6155956673,
    "Business Address": "400 Sugartree Ln Franklin, TN 37064"
  },
  {
    "Business Name": "Cara T Stevens, FNP",
    "Business Phone": 6019554224,
    "Business Address": "1311 W Main St Franklin, TN 37064"
  },
  {
    "Business Name": "Franklin Chiropractic Center",
    "Business Phone": 6157906363,
    "Business Address": "128 Holiday Ct Ste 107 Franklin, TN 37067"
  },
  {
    "Business Name": "Hagaman, David D, MD",
    "Business Phone": 6157917373,
    "Business Address": "919 Murfreesboro Rd Franklin, TN 37064"
  },
  {
    "Business Name": "Stauffer, Megan, MD",
    "Business Phone": 6155956673,
    "Business Address": "400 Sugartree Ln Franklin, TN 37064"
  },
  {
    "Business Name": "Dr. Felisa L Gilbert, MD",
    "Business Phone": 6154597104,
    "Business Address": "741 President Pl Ste 200 Smyrna, TN 37167"
  },
  {
    "Business Name": "Dr. Mitchell Andrew Pullias, MD",
    "Business Phone": 6154597104,
    "Business Address": "741 President Pl Ste 200 Smyrna, TN 37167"
  },
  {
    "Business Name": "Joshua Mark Mccollum, MD",
    "Business Phone": 6154597104,
    "Business Address": "741 President Pl Ste 200 Smyrna, TN 37167"
  },
  {
    "Business Name": "Perkins, Matthew L, MD",
    "Business Phone": 6154597104,
    "Business Address": "741 President Pl Smyrna, TN 37167"
  },
  {
    "Business Name": "Grace Pediatrics PLLC",
    "Business Phone": 6154595256,
    "Business Address": "699 President Pl Ste 402 Smyrna, TN 37167"
  },
  {
    "Business Name": "Dr. Hal Jefferson Jenkins, MD",
    "Business Phone": 6156727122,
    "Business Address": "491 Sage Rd N Ste 200 White House, TN 37188"
  }
]
businessList.forEach((element,_)=>{
    console.log(element)
})