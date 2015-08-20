angular.module('starter.services', [])

.factory('Plants', function() {
  // Array of plants and information
  var plants = [{
    "name": "Beets",
    "primeMonths": ["1", "2", "3", "4", "5", "10", "11", "12"],
    "description": "Cool season<br />Best planting times for Southern California: Oct thru May<br /><br />Spacing - use the following planting triangles for John Jeavons' Biodynamic spacing: beets 4”, spinach 6”<br />Planting depth: beets 1”; spinach 1/2”<br />Guild for our Vegetable Crop Rotation Wheel: Roots+Greens Guild; ok in Broccoli, Tomato Guilds<br /><br />Plant family: Chenopod<br />Seed viable for 5-6 years <br /><br />Very consistent soil moisture is critical to success.  Beets and spinach will often bolt (send up flower stalks and end their life cycle) when we get a heat wave in the midst of our Southern California winters.",
    "id": 0
  }, {
    "name": "Broccoli",
    "primeMonths": ["1", "2", "10", "11", "12"],
    "description": "Cool season<br />Best planting times for broccoli, Brussels sprouts, cabbage in Southern California: Oct thru Feb<br />Best planting times for cauliflower Oct thru Jan<br />Acceptable planting times for broccoli, Brussels sprouts, cabbage: Mar<br /><br />Spacing - use the following planting triangles for John Jeavons' Biodynamic spacing: broccoli, cauliflower 15”; cabbage 10”; Brussels sprouts 18”<br />Planting depth: 1/4”<br />Guild for our Vegetable Crop Rotation Wheel: Broccoli Guild<br /><br />Plant family: Brassica<br />Seed viable for 4-5 years<br />Companion planting: Interplant broccoli family with cilantro to deter Cabbage White butterfly.<br /><br />When broccoli family plants succumb to aphid infestations with the warmer weather of spring, it is time to give up and move to warm season crops.<br /><br />Plants in the brassica family are heavy users of soil nutrients, especially nitrogen. It is important to use good soil-building practices, to plant legumes soon afterward, and to rotate your crops year after year.",
    "id": 1
  }, {
    "name": "Brussels Sprouts",
    "primeMonths": ["1", "2", "10", "11", "12"],
    "description": "Cool season<br />Best planting times for broccoli, Brussels sprouts, cabbage in Southern California: Oct thru Feb<br />Best planting times for cauliflower Oct thru Jan<br />Acceptable planting times for broccoli, Brussels sprouts, cabbage: Mar<br /><br />Spacing - use the following planting triangles for John Jeavons' Biodynamic spacing: broccoli, cauliflower 15”; cabbage 10”; Brussels sprouts 18”<br />Planting depth: 1/4”<br />Guild for our Vegetable Crop Rotation Wheel: Broccoli Guild<br /><br />Plant family: Brassica<br />Seed viable for 4-5 years<br />Companion planting: Interplant broccoli family with cilantro to deter Cabbage White butterfly.<br /><br />When broccoli family plants succumb to aphid infestations with the warmer weather of spring, it is time to give up and move to warm season crops.<br /><br />Plants in the brassica family are heavy users of soil nutrients, especially nitrogen. It is important to use good soil-building practices, to plant legumes soon afterward, and to rotate your crops year after year.",
    "id": 2
  }, {
    "name": "Cabbage",
    "primeMonths": ["1", "2", "10", "11", "12"],
    "description": "Cool season<br />Best planting times for broccoli, Brussels sprouts, cabbage in Southern California: Oct thru Feb<br />Best planting times for cauliflower Oct thru Jan<br />Acceptable planting times for broccoli, Brussels sprouts, cabbage: Mar<br /><br />Spacing - use the following planting triangles for John Jeavons' Biodynamic spacing: broccoli, cauliflower 15”; cabbage 10”; Brussels sprouts 18”<br />Planting depth: 1/4”<br />Guild for our Vegetable Crop Rotation Wheel: Broccoli Guild<br /><br />Plant family: Brassica<br />Seed viable for 4-5 years<br />Companion planting: Interplant broccoli family with cilantro to deter Cabbage White butterfly.<br /><br />When broccoli family plants succumb to aphid infestations with the warmer weather of spring, it is time to give up and move to warm season crops.<br /><br />Plants in the brassica family are heavy users of soil nutrients, especially nitrogen. It is important to use good soil-building practices, to plant legumes soon afterward, and to rotate your crops year after year.",
    "id": 3
  }, {
    "name": "Carrots",
    "primeMonths": ["1", "2", "3", "4", "10", "11", "12"],
    "description": "Mostly Cool season<br />Best planting times for Southern California: Oct thru Apr<br />Acceptable planting times with special care: May<br /><br />Spacing: use 3\" planting triangle for John Jeavons' Biodynamic spacing<br />Planting depth: 1/2”<br />Guild for our Vegetable Crop Rotation Wheel: Roots+Greens Guild; ok in Tomato Guild<br /><br />Plant family: Umbellifer<br />Seed viable for 3 years<br />Companion planting: To assist carrot germination, interplant carrots with radishes and maintain consistent soil moisture.<br /><br />Avoid transplanting carrots because the roots will get twisted. If you have a shallow planting area or are growing in a container, select one of the shorter varieties of carrots.  Most carrot plants mature quickly, thus gardeners \"succession sow,\" which means you plant a few seeds every two weeks through the months listed above.<br /><br />History tells us that the original parent plants of carrots were not orange. Many heirloom varieties are available in beautiful colors including purple, red, yellow, and white.",
    "id": 4
  }, {
    "name": "Cauliflower",
    "primeMonths": ["1", "10", "11", "12"],
    "description": "Cool season<br />Best planting times for broccoli, Brussels sprouts, cabbage in Southern California: Oct thru Feb<br />Best planting times for cauliflower Oct thru Jan<br />Acceptable planting times for broccoli, Brussels sprouts, cabbage: Mar<br /><br />Spacing - use the following planting triangles for John Jeavons' Biodynamic spacing: broccoli, cauliflower 15”; cabbage 10”; Brussels sprouts 18”<br />Planting depth: 1/4”<br />Guild for our Vegetable Crop Rotation Wheel: Broccoli Guild<br /><br />Plant family: Brassica<br />Seed viable for 4-5 years<br />Companion planting: Interplant broccoli family with cilantro to deter Cabbage White butterfly.<br /><br />When broccoli family plants succumb to aphid infestations with the warmer weather of spring, it is time to give up and move to warm season crops.<br /><br />Plants in the brassica family are heavy users of soil nutrients, especially nitrogen. It is important to use good soil-building practices, to plant legumes soon afterward, and to rotate your crops year after year.",
    "id": 5
  }, {
    "name": "Celery",
    "primeMonths": ["1", "9", "10", "11"],
    "description": "No Description Yet.",
    "id": 6
  }, {
    "name": "Chard",
    "primeMonths": ["1", "2", "3", "4", "5", "9", "10", "11", "12"],
    "description": "Cool season to year-round<br />Best planting times for Southern California: Oct thru May<br />Acceptable planting times with special care: June-Sept<br /><br />Spacing: use 8\" planting triangle for John Jeavons' Biodynamic spacing<br />Planting depth: 1/2”<br />Guild for our Vegetable Crop Rotation Wheel: Roots+Greens Guild; ok in Tomato, Broccoli Guilds<br /><br />Plant family: Chenopod<br />Seed viable for 6 years<br /><br />Chard yields a mild-flavored, delicate textured green nearly year-round (except the hottest part of summer). Chard can be used in any recipe that calls for “spinach.” Rainbow chard varieties look spectacular in an urban edible landscape. Use cut-and-come-again harvesting to prolong your bounty.",
    "id": 7
  }, {
    "name": "Collards",
    "primeMonths": ["1", "2", "10", "11", "12"],
    "description": "Cool season<br />Best planting times for Southern California: Oct thru Feb<br />Acceptable planting times with special care: March<br /><br />Spacing - use the following planting triangles for John Jeavons' Biodynamic spacing:  collards 12”, kale 15”, mustard 6”<br />Planting depth: 1/4”<br />Guild for our Vegetable Crop Rotation Wheel: Broccoli Guild<br /><br />Plant family: Brassica<br />Seed viable for 4-5 years<br /><br />Companion planting: Interplant broccoli family with cilantro to deter Cabbage White butterfly<br /><br />When broccoli family plants succumb to aphid infestations with the warmer weather of spring, it is time to give up and move to warm season crops.<br /><br />Collards and kale are great cool season performers in our climate. Plus as cruciferous vegetables they are highly nutritious. Use cut-and-come-again harvesting to prolong the season.<br /><br />In an edible landscape, collards and kale are very handsome. Heirloom varieties are quite unique and beautiful.<br /><br />Plants in the brassica family are heavy users of soil nutrients, especially nitrogen. It is important to use good soil-building practices, to plant legumes soon afterward, and to rotate your crops year after year.",
    "id": 8
  }, {
    "name": "Endive &amp; chicory",
    "primeMonths": ["1", "10", "11", "12"],
    "description": "No Description Yet.",
    "id": 9
  }, {
    "name": "Favas",
    "primeMonths": ["1"],
    "description": "Cool season<br />Best planting times for Southern California: Oct thru Jan<br /><br />Spacing: use 8\" planting triangle for John Jeavons' Biodynamic spacing<br />Planting depth: 1”<br />Guild for our Vegetable Crop Rotation Wheel: 3 Sisters Guild, Roots+Greens Guild; ok in Broccoli Guild<br /><br />Plant family: Legume<br />Seed viable for 6 years<br />Companion planting: Avoid planting onion family nearby.<br /><br />Favas are wonderful garden helpers because, like all legumes, they help replenish nitrogen in your soil. They are also spectacular “compost crops” which means they provide plenty of material for your compost pile. At our garden, when the fava plants are about 1’ tall we put our tomato cages around them to prevent them from falling over with March winds.<br /><br />Called “ful” in the Middle East and “broad beans” in Europe, favas can be eaten at almost every life stage. You can eat the whole pods of tiny favas. Most people eat the seed part of the fava as a green shelly bean, harvested when the pods are plump and you can feel large beans inside. Middle Eastern cuisine has many recipes for the fully-mature dried bean, cooked similarly to split peas. You can also steam and eat the leafy tips of the growing plants.",
    "id": 10
  }, {
    "name": "Kale",
    "primeMonths": ["1", "2", "10", "11", "12"],
    "description": "Cool season<br />Best planting times for Southern California: Oct thru Feb<br />Acceptable planting times with special care: March<br /><br />Spacing - use the following planting triangles for John Jeavons' Biodynamic spacing:  collards 12”, kale 15”, mustard 6”<br />Planting depth: 1/4”<br />Guild for our Vegetable Crop Rotation Wheel: Broccoli Guild<br /><br />Plant family: Brassica<br />Seed viable for 4-5 years<br /><br />Companion planting: Interplant broccoli family with cilantro to deter Cabbage White butterfly<br /><br />When broccoli family plants succumb to aphid infestations with the warmer weather of spring, it is time to give up and move to warm season crops.<br /><br />Collards and kale are great cool season performers in our climate. Plus as cruciferous vegetables they are highly nutritious. Use cut-and-come-again harvesting to prolong the season.<br /><br />In an edible landscape, collards and kale are very handsome. Heirloom varieties are quite unique and beautiful.<br /><br />Plants in the brassica family are heavy users of soil nutrients, especially nitrogen. It is important to use good soil-building practices, to plant legumes soon afterward, and to rotate your crops year after year.",
    "id": 11
  }, {
    "name": "Leeks",
    "primeMonths": ["1", "11", "12"],
    "description": "Cool season<br />Best planting times for Southern California: leeks Nov thru Jan; green onions Nov thru Feb<br />Acceptable planting times with special care: leeks Feb, Oct<br /><br />Spacing - use the following planting triangles for John Jeavons' Biodynamic spacing: leeks 6”, bunching onions 3”<br />Planting depth: 1/2”<br />Guild for our Vegetable Crop Rotation Wheel: Roots+Greens Guild, ok in Tomato Guild<br /><br />Plant family: Allium<br />Onion seed viable for 2 years, leek 3 years<br /><br />Companion planting: avoid planting legume family nearby<br /><br />The seeds of onion-family plants seem to sprout best when the soil is quite moist; put them out before a rainstorm. Most bulbing-type onions will not form a bulb at our Southern California latitude; “short day” varieties are most likely to be successful.  Perennial “walking onions” do quite well in Southern California.<br /><br />Grocery store leeks are blanched, which means they are grown in darkness. To do this, wrap leek shaft with scrap cardboard or hill up soil to cover, although they are very flavorful when allowed to grow naturally green.",
    "id": 12
  }, {
    "name": "Lettuce",
    "primeMonths": ["1", "2", "10", "11", "12"],
    "description": "Cool season<br />Best planting times for Southern California: Oct thru Feb<br />Acceptable planting times with special care: Mar<br /><br />Spacing - use the following planting triangles for John Jeavons' Biodynamic spacing: leaf lettuce 8”, head lettuce 12”<br />Planting depth: 1/8”<br />Guild for our Vegetable Crop Rotation Wheel: Roots+Greens Guild; ok in Tomato, Broccoli Guilds<br /><br />Plant family: Compositae<br />Seed viable for 3 years<br /><br />Heirloom lettuces are available in many gorgeous colors and shapes. In catalog descriptions, seek “slow bolting” lettuce varieties to get through the occasional heat spells we get during Southern California autumn and spring. Nearly any variety of lettuce will grow nicely here in the middle of our winters.<br /><br />Most lettuce plants are short lived, thus gardeners \"succession sow,\" which means you plant a few seeds every two weeks through the months listed above.",
    "id": 13
  }, {
    "name": "Mustard",
    "primeMonths": ["1", "2", "10", "11", "12"],
    "description": "Cool season<br />Best planting times for Southern California: Oct thru Feb<br />Acceptable planting times with special care: March<br /><br />Spacing - use the following planting triangles for John Jeavons' Biodynamic spacing:  collards 12”, kale 15”, mustard 6”<br />Planting depth: 1/4”<br />Guild for our Vegetable Crop Rotation Wheel: Broccoli Guild<br /><br />Plant family: Brassica<br />Seed viable for 4-5 years<br /><br />Companion planting: Interplant broccoli family with cilantro to deter Cabbage White butterfly<br /><br />When broccoli family plants succumb to aphid infestations with the warmer weather of spring, it is time to give up and move to warm season crops.<br /><br />Collards and kale are great cool season performers in our climate. Plus as cruciferous vegetables they are highly nutritious. Use cut-and-come-again harvesting to prolong the season.<br /><br />In an edible landscape, collards and kale are very handsome. Heirloom varieties are quite unique and beautiful.<br /><br />Plants in the brassica family are heavy users of soil nutrients, especially nitrogen. It is important to use good soil-building practices, to plant legumes soon afterward, and to rotate your crops year after year.",
    "id": 14
  }, {
    "name": "Onions, green",
    "primeMonths": ["1", "2"],
    "description": "Cool season<br />Best planting times for Southern California: leeks Nov thru Jan; green onions Nov thru Feb<br />Acceptable planting times with special care: leeks Feb, Oct<br /><br />Spacing - use the following planting triangles for John Jeavons' Biodynamic spacing: leeks 6”, bunching onions 3”<br />Planting depth: 1/2”<br />Guild for our Vegetable Crop Rotation Wheel: Roots+Greens Guild, ok in Tomato Guild<br /><br />Plant family: Allium<br />Onion seed viable for 2 years, leek 3 years<br /><br />Companion planting: avoid planting legume family nearby<br /><br />The seeds of onion-family plants seem to sprout best when the soil is quite moist; put them out before a rainstorm. Most bulbing-type onions will not form a bulb at our Southern California latitude; “short day” varieties are most likely to be successful.  Perennial “walking onions” do quite well in Southern California.<br /><br />Grocery store leeks are blanched, which means they are grown in darkness. To do this, wrap leek shaft with scrap cardboard or hill up soil to cover, although they are very flavorful when allowed to grow naturally green.",
    "id": 15
  }, {
    "name": "Parsley",
    "primeMonths": ["1", "2", "3", "10", "11", "12"],
    "description": "Cool season<br />Best planting times for Southern California: Oct thru Mar<br /><br />Spacing: use 5\" planting triangle for John Jeavons' Biodynamic spacing<br />Planting depth: 1/4”<br />Guild for our Vegetable Crop Rotation Wheel: Roots+Greens Guild; ok in Tomato Guild<br /><br />Plant family: Umbellifer<br />Seed viable for 3 years<br /><br />Parsley is available in flat leafed and curly leafed varieties. “ParCel” herb, aka leafing celery, can be used as a warm-weather substitute for parsley.",
    "id": 16
  }, {
    "name": "Parsnip",
    "primeMonths": ["1", "2", "10", "11", "12"],
    "description": "Cool season<br />Best planting times for Southern California: Oct thru Feb<br /><br />Spacing: use 4\" planting triangle for John Jeavons' Biodynamic spacing<br />Planting depth: 1/2”<br />Guild for our Vegetable Crop Rotation Wheel: Roots+Greens Guild<br /><br />Plant family: Umbellifer<br />Seed viability deteriorates quickly.  Plant within 1 year.",
    "id": 17
  }, {
    "name": "Peas &amp; snowpeas",
    "primeMonths": ["1", "2", "10", "11", "12"],
    "description": "Cool season<br />Best planting times for Southern California: Oct thru Feb<br />Acceptable planting times with special care: Mar<br /><br />Spacing: use 4\" planting triangle for John Jeavons' Biodynamic spacing<br />Planting depth: 3/4”<br />Guild for our Vegetable Crop Rotation Wheel: 3 Sisters Guild, Roots+Greens Guild; ok in Broccoli Guild<br /><br />Plant family: Legume<br />Seed viable for 3 years<br />Companion planting: avoid planting onion family nearby<br /><br />In catalogs, you will find garden peas, edible podded peas (snowpeas), and soup peas (“split peas”).  When peas get mildew in the spring, it is time to give up and move to summer crops.<br /><br />Peas are wonderful garden helpers because, like all legumes, they help replenish nitrogen in your soil. Most need a trellis for support. Read seed packet to determine height.<br /><br />For edible landscaping, several varieties have purple or lavender flowers, or purple or yellow pods.",
    "id": 18
  }, {
    "name": "Potatoes",
    "primeMonths": ["1", "2", "3"],
    "description": "Cool season<br />Best planting times for Southern California: Jan thru Mar<br />Acceptable planting times with special care: Apr, Jun<br /><br />Spacing: use 9\" planting triangle for John Jeavons' Biodynamic spacing<br />Planting depth:  9”<br />Guild for our Vegetable Crop Rotation Wheel: Tomato Guild<br /><br />Plant family: Solanicae<br /><br />Potatoes are grown vegetatively, not from seeds but from sprouted eyes on a potato tuber. For best results, start with organic potatoes, since conventionally grown tubers are usually sprayed with a sprouting inhibitor. You can find unique varieties at a farmers’ market.<br /><br />Important note: Sweet potatoes, aka “yams,” are a different plant (Convolvula family), and are a WARM\\HOT season crop.",
    "id": 19
  }, {
    "name": "Radish",
    "primeMonths": ["1", "2", "3", "4", "5"],
    "description": "Cool season<br />Best planting times for Southern California: Oct thru Feb<br />Acceptable planting times with special care: March<br /><br />Spacing - use the following planting triangles for John Jeavons' Biodynamic spacing: standard radish 2”, daikon radish 6”, turnip 4”<br />Planting depth: 1/4”<br />Guild for our Vegetable Crop Rotation Wheel: Brassica Guild; ok in Broccoli Guild<br /><br />Plant family: Brassica<br />Companion planting: Interplant broccoli family with cilantro to deter Cabbage White butterfly.<br /><br />Most radish plants (except daikon) mature quickly, thus gardeners \"succession sow,\" which means you plant a few seeds every two weeks through the months listed above.<br /><br />Daikon radish can be an effective tool in improving your soil texture. Its thick root can reportedly break up heavy clay! Many parts of a radish plant are edible including the greens (they make great soup) and the young tender green pods (intriguing salad topper).<br /><br />Plants in the brassica family are heavy users of soil nutrients, especially nitrogen. It is important to use good soil-building practices, to plant legumes soon afterward, and to rotate your crops year after year.",
    "id": 20
  }, {
    "name": "Spinach",
    "primeMonths": ["1", "2", "11", "12"],
    "description": "Cool season<br />Best planting times for Southern California: Oct thru May<br /><br />Spacing - use the following planting triangles for John Jeavons' Biodynamic spacing: beets 4”, spinach 6”<br />Planting depth: beets 1”; spinach 1/2”<br />Guild for our Vegetable Crop Rotation Wheel: Roots+Greens Guild; ok in Broccoli, Tomato Guilds<br /><br />Plant family: Chenopod<br />Seed viable for 5-6 years <br /><br />Very consistent soil moisture is critical to success.  Beets and spinach will often bolt (send up flower stalks and end their life cycle) when we get a heat wave in the midst of our Southern California winters.",
    "id": 21
  }, {
    "name": "Turnips",
    "primeMonths": ["1", "2", "10", "11", "12"],
    "description": "Cool season<br />Best planting times for Southern California: Oct thru Feb<br />Acceptable planting times with special care: March<br /><br />Spacing - use the following planting triangles for John Jeavons' Biodynamic spacing: standard radish 2”, daikon radish 6”, turnip 4”<br />Planting depth: 1/4”<br />Guild for our Vegetable Crop Rotation Wheel: Brassica Guild; ok in Broccoli Guild<br /><br />Plant family: Brassica<br />Companion planting: Interplant broccoli family with cilantro to deter Cabbage White butterfly.<br /><br />Most radish plants (except daikon) mature quickly, thus gardeners \"succession sow,\" which means you plant a few seeds every two weeks through the months listed above.<br /><br />Daikon radish can be an effective tool in improving your soil texture. Its thick root can reportedly break up heavy clay! Many parts of a radish plant are edible including the greens (they make great soup) and the young tender green pods (intriguing salad topper).<br /><br />Plants in the brassica family are heavy users of soil nutrients, especially nitrogen. It is important to use good soil-building practices, to plant legumes soon afterward, and to rotate your crops year after year.",
    "id": 22
  }, {
    "name": "",
    "primeMonths": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
    "description": "Blank.",
    "id": 23
  }, {
    "name": "Summer squash",
    "primeMonths": ["2", "3", "4", "5", "6"],
    "description": "Warm season<br />Best planting times for Southern California: Mar, Apr, May<br />Acceptable planting times for winter squash, pumpkins: June<br />Acceptable planting times for summer squash, zucchini: Feb, June, July<br /><br />Spacing: use 18\" planting triangle for John Jeavons' Biodynamic spacing <br />Planting depth: 1”<br />Guild for our Vegetable Crop Rotation Wheel: 3 Sisters Guild<br /><br />Plant family: Cucurbit<br />Seed viable for 6 years<br /><br />Summer squash are bred for delicate immature fruit, but you can eat the immature fruit of any squash. Pumpkins are simply winter squash that look like Halloween. In an urban edible landscape, squash is a plant to hide at the back because it tends to look sprawly and untidy.<br /><br />Water the soil, not the plants.  Watering the fuzzy leaves of squash plants brings the mildew sooner!  When squash plants succumb to mildew as our late summer nights grow cool and moist, it is time to give up and move to cool season crops.<br /><br />Plants in the squash family are heavy users of soil nutrients, especially nitrogen. It is important to use good soil-building practices, to plant legumes with them or soon afterward, and to rotate your crops year after year.",
    "id": 24
  }, {
    "name": "Beans, bush",
    "primeMonths": ["3", "4", "5", "6", "7", "8"],
    "description": "Warm season<br />Best planting times for Southern California: Mar thru Aug<br />Acceptable planting times with special care: bush beans Sep<br /><br />Spacing: use 6\" planting triangle for John Jeavons' Biodynamic spacing<br />Planting depth: 1”<br />Guild for our Vegetable Crop Rotation Wheel: 3 Sisters Guild, Roots+Greens Guild, Broccoli Guild<br /><br />Plant family: Legume<br />Seed viable for 4 years <br />Companion planting: Avoid planting onion family nearby.<br /><br />For beans that are tolerant of hot, dry conditions, look for heirloom varieties from the desert Southwest.<br /><br />Beans are wonderful garden helpers because, like all legumes, they help replenish nitrogen in your soil. Pole beans and runner beans need a trellis for support. Read seed packet to determine height.<br /><br />For an edible landscape, you can select purple, yellow or speckled-pod beans. Some runner beans have beautifully colored flowers.",
    "id": 25
  }, {
    "name": "Beans, pole",
    "primeMonths": ["3", "4", "5", "6", "7", "8"],
    "description": "Warm season<br />Best planting times for Southern California: Mar thru Aug<br />Acceptable planting times with special care: bush beans Sep<br /><br />Spacing: use 6\" planting triangle for John Jeavons' Biodynamic spacing<br />Planting depth: 1”<br />Guild for our Vegetable Crop Rotation Wheel: 3 Sisters Guild, Roots+Greens Guild, Broccoli Guild<br /><br />Plant family: Legume<br />Seed viable for 4 years <br />Companion planting: Avoid planting onion family nearby.<br /><br />For beans that are tolerant of hot, dry conditions, look for heirloom varieties from the desert Southwest.<br /><br />Beans are wonderful garden helpers because, like all legumes, they help replenish nitrogen in your soil. Pole beans and runner beans need a trellis for support. Read seed packet to determine height.<br /><br />For an edible landscape, you can select purple, yellow or speckled-pod beans. Some runner beans have beautifully colored flowers.",
    "id": 26
  }, {
    "name": "Pumpkin",
    "primeMonths": ["3", "4", "5"],
    "description": "Warm season<br />Best planting times for Southern California: Mar, Apr, May<br />Acceptable planting times for winter squash, pumpkins: June<br />Acceptable planting times for summer squash, zucchini: Feb, June, July<br /><br />Spacing: use 18\" planting triangle for John Jeavons' Biodynamic spacing <br />Planting depth: 1”<br />Guild for our Vegetable Crop Rotation Wheel: 3 Sisters Guild<br /><br />Plant family: Cucurbit<br />Seed viable for 6 years<br /><br />Summer squash are bred for delicate immature fruit, but you can eat the immature fruit of any squash. Pumpkins are simply winter squash that look like Halloween. In an urban edible landscape, squash is a plant to hide at the back because it tends to look sprawly and untidy.<br /><br />Water the soil, not the plants.  Watering the fuzzy leaves of squash plants brings the mildew sooner!  When squash plants succumb to mildew as our late summer nights grow cool and moist, it is time to give up and move to cool season crops.<br /><br />Plants in the squash family are heavy users of soil nutrients, especially nitrogen. It is important to use good soil-building practices, to plant legumes with them or soon afterward, and to rotate your crops year after year.",
    "id": 27
  }, {
    "name": "Winter squash",
    "primeMonths": ["3", "4", "5"],
    "description": "Warm season<br />Best planting times for Southern California: Mar, Apr, May<br />Acceptable planting times for winter squash, pumpkins: June<br />Acceptable planting times for summer squash, zucchini: Feb, June, July<br /><br />Spacing: use 18\" planting triangle for John Jeavons' Biodynamic spacing <br />Planting depth: 1”<br />Guild for our Vegetable Crop Rotation Wheel: 3 Sisters Guild<br /><br />Plant family: Cucurbit<br />Seed viable for 6 years<br /><br />Summer squash are bred for delicate immature fruit, but you can eat the immature fruit of any squash. Pumpkins are simply winter squash that look like Halloween. In an urban edible landscape, squash is a plant to hide at the back because it tends to look sprawly and untidy.<br /><br />Water the soil, not the plants.  Watering the fuzzy leaves of squash plants brings the mildew sooner!  When squash plants succumb to mildew as our late summer nights grow cool and moist, it is time to give up and move to cool season crops.<br /><br />Plants in the squash family are heavy users of soil nutrients, especially nitrogen. It is important to use good soil-building practices, to plant legumes with them or soon afterward, and to rotate your crops year after year.",
    "id": 28
  }, {
    "name": "Sunflowers",
    "primeMonths": ["3", "4", "5", "9"],
    "description": "Warm season<br />Best planting times for Southern California: Mar, Apr, May<br />Acceptable planting times with special care: Jun, Sep, Oct<br /><br />Spacing: use 18\" planting triangle for John Jeavons' Biodynamic spacing<br />Planting depth: 1”<br />Guild for our Vegetable Crop Rotation Wheel: 3 Sisters Guild; ok in Roots+Greens Guild<br /><br />Plant family: Compositae<br /><br />Giant sunflowers should be sown directly where you wish them to grow.  Avoid transplanting to gain maximum support from root structure.",
    "id": 29
  }, {
    "name": "Tomatoes",
    "primeMonths": ["3", "4"],
    "description": "Warm season<br />Best planting times for Southern California: tomato Mar thru Apr; pepper Apr thru Jun; eggplant Apr thru May<br />Acceptable planting times with special care: tomato May<br /><br />Spacing - use the following planting triangles for John Jeavons' Biodynamic spacing: tomato and eggplant 18”, Pepper 12”<br />Planting depth: 1/4”<br />Guild for our Vegetable Crop Rotation Wheel: Tomato Guild<br /><br />Plant family: Solanicae<br />Pepper Seed viable for 3 years, Tomato for 4-10 years, Eggplant for 7 years<br />Companion planting: Avoid planting tomato-family plants with beans.<br /><br />In Southern California, some tomatoes and many pepper plants will survive through the winter; they yield much earlier in their second year. For early harvests, you might also try tomato varieties which are were bred for the cool weather of extreme northern climates.<br /><br />Tomatoes, eggplants, and peppers are heavy-users of soil nutrients other than nitrogen. Rotate your crops year after year for best results.",
    "id": 30
  }, {
    "name": "Cantaloupe",
    "primeMonths": ["4", "5", "6"],
    "description": "Warm & Hot seasons<br />Best planting times for Southern California: Apr thru Jun<br /><br />Spacing - use the following planting triangles for John Jeavons' Biodynamic spacing:  melons 15”, watermelon 12”<br />Planting depth:  1/2”<br />Guild for our Vegetable Crop Rotation Wheel: 3 Sisters Guild<br /><br />Plant family: Cucurbit<br />Seed viable for 5-6 years<br /><br />Standard melons like to be warm and moist. For low-effort gardening, simply wait until summer weather has warmed up.  Plant your melons and mulch the resulting sprouts with leaves or shredded newspaper.<br /><br />Watermelons are naturally tolerant of high temperatures and drought.  Water them less often than your zucchinis, cucumbers and standard melons.<br /><br />In an urban edible landscape, melons are a plant to hide at the back because they tend to look sprawly and untidy.",
    "id": 31
  }, {
    "name": "Corn",
    "primeMonths": ["4", "5", "6", "7", "8"],
    "description": "Warm season<br />Best planting times for Southern California: Apr thru Aug <br /><br />Spacing: use 15\" planting triangle for John Jeavons' Biodynamic spacing<br />Planting depth: 1”<br />Guild for our Vegetable Crop Rotation Wheel: 3 Sisters Guild<br /><br />Plant family: Graminae<br /><br />Corn is wind pollinated.  For adequate pollination to fill out kernels, plant corn in close groupings of at least 9 biodynamically-spaced plants.<br /><br />Of all the home garden plants, corn is the most likely plant to be tainted with GMO material; thus purchase your seed from vendors who have taken the “Safe Seed Pledge.”<br /><br />Corn is a heavy user of soil nutrients, especially nitrogen. It is important to use good soil-building practices, to plant legumes soon afterward, and to rotate your crops year after year.",
    "id": 32
  }, {
    "name": "Cucumbers",
    "primeMonths": ["4", "5", "6", "7", "8"],
    "description": "Warm, Hot seasons<br />Best planting times for Southern California: Apr thru Aug<br /><br />Spacing: use 12\" planting triangle for John Jeavons' Biodynamic spacing<br />Planting depth: 1/2”<br />Guild for our Vegetable Crop Rotation Wheel: 3 Sisters Guild<br /><br />Plant family: Cucurbit<br />Seed viable for 10 years<br /><br />Cucumbers like to be warm and moist. For low-effort gardening, simply wait until summer weather has warmed up.  Plant your cukes and mulch the resulting sprouts with leaves or shredded newspaper.<br /><br />Experiment with varieties from the Middle East which might be more drought-tolerant than English or New England varieties.  \"Persian\" cucumbers in the market are often the immature fruits of certain melons and not truly a cucumber at all; to grow them, look for Italian and Armenian cucumber varieties.",
    "id": 33
  }, {
    "name": "Eggplant",
    "primeMonths": ["4", "5", "6"],
    "description": "Warm season<br />Best planting times for Southern California: tomato Mar thru Apr; pepper Apr thru Jun; eggplant Apr thru May<br />Acceptable planting times with special care: tomato May<br /><br />Spacing - use the following planting triangles for John Jeavons' Biodynamic spacing: tomato and eggplant 18”, Pepper 12”<br />Planting depth: 1/4”<br />Guild for our Vegetable Crop Rotation Wheel: Tomato Guild<br /><br />Plant family: Solanicae<br />Pepper Seed viable for 3 years, Tomato for 4-10 years, Eggplant for 7 years<br />Companion planting: Avoid planting tomato-family plants with beans.<br /><br />In Southern California, some tomatoes and many pepper plants will survive through the winter; they yield much earlier in their second year. For early harvests, you might also try tomato varieties which are were bred for the cool weather of extreme northern climates.<br /><br />Tomatoes, eggplants, and peppers are heavy-users of soil nutrients other than nitrogen. Rotate your crops year after year for best results.",
    "id": 34
  }, {
    "name": "Lima beans",
    "primeMonths": ["4", "5", "6", "7", "8"],
    "description": "Warm season<br />Best planting times for Southern California: Apr thru Aug<br /><br />Spacing: use 8\" planting triangle for John Jeavons' Biodynamic spacing<br />Planting depth: 1”<br />Guild for our Vegetable Crop Rotation Wheel: 3 Sisters Guild, Roots+Greens Guild, Broccoli Guild<br /><br />Plant family: Legume<br />Seed viable for 3 years<br />Companion planting: Avoid planting onion family nearby.<br /><br />Most lima beans are tall climbers, but some are bush plants; read seed packet to determine plant height.  Vining varieties need a trellis for support.<br /><br />Lima beans are wonderful garden helpers because, like all legumes, they help replenish nitrogen in your soil.",
    "id": 35
  }, {
    "name": "Peppers",
    "primeMonths": ["4", "5", "6"],
    "description": "Warm season<br />Best planting times for Southern California: tomato Mar thru Apr; pepper Apr thru Jun; eggplant Apr thru May<br />Acceptable planting times with special care: tomato May<br /><br />Spacing - use the following planting triangles for John Jeavons' Biodynamic spacing: tomato and eggplant 18”, Pepper 12”<br />Planting depth: 1/4”<br />Guild for our Vegetable Crop Rotation Wheel: Tomato Guild<br /><br />Plant family: Solanicae<br />Pepper Seed viable for 3 years, Tomato for 4-10 years, Eggplant for 7 years<br />Companion planting: Avoid planting tomato-family plants with beans.<br /><br />In Southern California, some tomatoes and many pepper plants will survive through the winter; they yield much earlier in their second year. For early harvests, you might also try tomato varieties which are were bred for the cool weather of extreme northern climates.<br /><br />Tomatoes, eggplants, and peppers are heavy-users of soil nutrients other than nitrogen. Rotate your crops year after year for best results.",
    "id": 36
  }, {
    "name": "Watermelon",
    "primeMonths": ["4"],
    "description": "Warm & Hot seasons<br />Best planting times for Southern California: Apr thru Jun<br /><br />Spacing - use the following planting triangles for John Jeavons' Biodynamic spacing:  melons 15”, watermelon 12”<br />Planting depth:  1/2”<br />Guild for our Vegetable Crop Rotation Wheel: 3 Sisters Guild<br /><br />Plant family: Cucurbit<br />Seed viable for 5-6 years<br /><br />Standard melons like to be warm and moist. For low-effort gardening, simply wait until summer weather has warmed up.  Plant your melons and mulch the resulting sprouts with leaves or shredded newspaper.<br /><br />Watermelons are naturally tolerant of high temperatures and drought.  Water them less often than your zucchinis, cucumbers and standard melons.<br /><br />In an urban edible landscape, melons are a plant to hide at the back because they tend to look sprawly and untidy.",
    "id": 37
  }, {
    "name": "Blackeyed peas",
    "primeMonths": ["5", "6", "7", "8"],
    "description": "Warm & Hot seasons<br />Best planting times for Southern California: May thru Aug<br /><br />Spacing: use 12\" planting triangle for John Jeavons' Biodynamic spacing<br />Planting depth: 1/2”<br />Guild for our Vegetable Crop Rotation Wheel: 3 Sisters Guild, Roots+Greens Guild, Broccoli Guild<br /><br />Plant family: Legume<br />Seed viable for 4 years<br /><br />Blackeyed peas, also known as cowpeas or crowders, have an elegant appearance in the garden for most of their lifespan. Most are partial-runner plants, and can look quite nice trailing over the edge of a growing bed. Alternatively, you might opt to use short trellises.<br /><br />Blackeyed peas are wonderful garden helpers because, like all legumes, they help replenish nitrogen in your soil. There are many drought-tolerant heirloom varieties available.",
    "id": 38
  }, {
    "name": "Bush beans",
    "primeMonths": ["9"],
    "description": "Warm season<br />Best planting times for Southern California: Mar thru Aug<br />Acceptable planting times with special care: bush beans Sep<br /><br />Spacing: use 6\" planting triangle for John Jeavons' Biodynamic spacing<br />Planting depth: 1”<br />Guild for our Vegetable Crop Rotation Wheel: 3 Sisters Guild, Roots+Greens Guild, Broccoli Guild<br /><br />Plant family: Legume<br />Seed viable for 4 years <br />Companion planting: Avoid planting onion family nearby.<br /><br />For beans that are tolerant of hot, dry conditions, look for heirloom varieties from the desert Southwest.<br /><br />Beans are wonderful garden helpers because, like all legumes, they help replenish nitrogen in your soil. Pole beans and runner beans need a trellis for support. Read seed packet to determine height.<br /><br />For an edible landscape, you can select purple, yellow or speckled-pod beans. Some runner beans have beautifully colored flowers.",
    "id": 39
  }, {
    "name": "Garlic",
    "primeMonths": ["9", "10", "11"],
    "description": "Season: Plant in autumn, grows into summer<br />Best planting times for Southern California: Oct, Nov<br />Acceptable planting times with special care: Sept<br /><br />Spacing: use 4\" planting triangle for John Jeavons' Biodynamic spacing<br />Guild for our Vegetable Crop Rotation Wheel: Roots+Greens Guild, ok in Tomato Guild<br /><br />Plant family: Allium<br /><br />Companion planting: avoid planting legume family nearby<br /><br />Garlic is grown vegetatively, not from seeds but from garlic cloves (plant the way you would daffodils). Most hard-necked garlic varieties will not form a bulb in our Southern California climate; soft-necked “silverskin,” “Asiatic,” and “silverskin” varieties are most likely to be successful.",
    "id": 40
  }, {
    "name": "Fava beans",
    "primeMonths": ["10", "11", "12"],
    "description": "Cool season<br />Best planting times for Southern California: Oct thru Jan<br /><br />Spacing: use 8\" planting triangle for John Jeavons' Biodynamic spacing<br />Planting depth: 1”<br />Guild for our Vegetable Crop Rotation Wheel: 3 Sisters Guild, Roots+Greens Guild; ok in Broccoli Guild<br /><br />Plant family: Legume<br />Seed viable for 6 years<br />Companion planting: Avoid planting onion family nearby.<br /><br />Favas are wonderful garden helpers because, like all legumes, they help replenish nitrogen in your soil. They are also spectacular “compost crops” which means they provide plenty of material for your compost pile. At our garden, when the fava plants are about 1’ tall we put our tomato cages around them to prevent them from falling over with March winds.<br /><br />Called “ful” in the Middle East and “broad beans” in Europe, favas can be eaten at almost every life stage. You can eat the whole pods of tiny favas. Most people eat the seed part of the fava as a green shelly bean, harvested when the pods are plump and you can feel large beans inside. Middle Eastern cuisine has many recipes for the fully-mature dried bean, cooked similarly to split peas. You can also steam and eat the leafy tips of the growing plants.",
    "id": 41
  }, {
    "name": "Radishes",
    "primeMonths": ["10", "11", "12"],
    "description": "Cool season<br />Best planting times for Southern California: Oct thru Feb<br />Acceptable planting times with special care: March<br /><br />Spacing - use the following planting triangles for John Jeavons' Biodynamic spacing: standard radish 2”, daikon radish 6”, turnip 4”<br />Planting depth: 1/4”<br />Guild for our Vegetable Crop Rotation Wheel: Brassica Guild; ok in Broccoli Guild<br /><br />Plant family: Brassica<br />Companion planting: Interplant broccoli family with cilantro to deter Cabbage White butterfly.<br /><br />Most radish plants (except daikon) mature quickly, thus gardeners \"succession sow,\" which means you plant a few seeds every two weeks through the months listed above.<br /><br />Daikon radish can be an effective tool in improving your soil texture. Its thick root can reportedly break up heavy clay! Many parts of a radish plant are edible including the greens (they make great soup) and the young tender green pods (intriguing salad topper).<br /><br />Plants in the brassica family are heavy users of soil nutrients, especially nitrogen. It is important to use good soil-building practices, to plant legumes soon afterward, and to rotate your crops year after year.",
    "id": 42
  }, {
    "name": "California wildflowers",
    "primeMonths": ["11", "12"],
    "description": "No Description Yet.",
    "id": 43
  }]

  //Functionality options
  return {
    all: function() {
      return plants;
    },
    get: function(plantId) {
      for (var i = 0; i < plants.length; i++) {
        if (plants[i].id === parseInt(plantId)) {
          return plants[i];
        }
      }
      return null;
    }
  };
});
