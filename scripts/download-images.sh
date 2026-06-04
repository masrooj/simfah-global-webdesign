#!/usr/bin/env bash
# Unique content-matched images (Pexels) — one file per <img> on the page
set -euo pipefail
DIR="$(cd "$(dirname "$0")/.." && pwd)/public/images"
mkdir -p "$DIR"
BASE="https://images.pexels.com/photos"

dl() {
  local file="$1" id="$2"
  echo "→ $file"
  curl -fsSL "${BASE}/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900&h=600&fit=crop" -o "${DIR}/${file}"
}

dl hero.jpg 6476587

# Filmstrip row 1 — set A (12)
dl strip-ltr-restaurant.jpg 262978
dl strip-ltr-salon.jpg 3065209
dl strip-ltr-gym.jpg 841130
dl strip-ltr-hotel.jpg 271624
dl strip-ltr-cafe.jpg 302899
dl strip-ltr-retail.jpg 996329
dl strip-ltr-barber.jpg 1239291
dl strip-ltr-bakery.jpg 1721932
dl strip-ltr-events.jpg 2306281
dl strip-ltr-wine.jpg 2741920
dl strip-ltr-spa.jpg 3865679
dl strip-ltr-photography.jpg 269140

# Filmstrip row 1 — set B (12 unique, loop half)
dl strip-ltr-catering.jpg 5638272
dl strip-ltr-pharmacy.jpg 305568
dl strip-ltr-florist.jpg 931177
dl strip-ltr-bookstore.jpg 1370295
dl strip-ltr-daycare.jpg 861308
dl strip-ltr-plumbing.jpg 848616
dl strip-ltr-electrician.jpg 442150
dl strip-ltr-roofing.jpg 221027
dl strip-ltr-marina.jpg 457881
dl strip-ltr-brewery.jpg 276724
dl strip-ltr-nursery.jpg 703160
dl strip-ltr-auto.jpg 1703272

# Filmstrip row 2 — set A (12)
dl strip-rtl-clinic.jpg 4386466
dl strip-rtl-fine-dining.jpg 3535383
dl strip-rtl-fitness.jpg 3822863
dl strip-rtl-barber.jpg 3998429
dl strip-rtl-bakery.jpg 3275923
dl strip-rtl-law.jpg 5669602
dl strip-rtl-dental.jpg 3845810
dl strip-rtl-pet.jpg 1108099
dl strip-rtl-carwash.jpg 116675
dl strip-rtl-foodtruck.jpg 2014773
dl strip-rtl-juice.jpg 1435907
dl strip-rtl-tourism.jpg 315566

# Filmstrip row 2 — set B (12 unique, loop half)
dl strip-rtl-yoga.jpg 4056723
dl strip-rtl-chiro.jpg 4164835
dl strip-rtl-vet.jpg 33432784
dl strip-rtl-cleaning.jpg 4108710
dl strip-rtl-tutoring.jpg 5212347
dl strip-rtl-music.jpg 1763075
dl strip-rtl-art.jpg 1191710
dl strip-rtl-farm.jpg 1148956
dl strip-rtl-construction.jpg 1199957
dl strip-rtl-security.jpg 532785
dl strip-rtl-laundry.jpg 4430503
dl strip-rtl-moving.jpg 814464

dl work-zara.jpg 941861
dl work-lumiere.jpg 1319460
dl work-vitale.jpg 4021775

dl step-consult.jpg 7688336
dl step-mockup.jpg 196644
dl step-launch.jpg 3184418

dl ind-restaurant.jpg 260922
dl ind-salon.jpg 3993449
dl ind-clinic.jpg 236380
dl ind-gym.jpg 1954524
dl ind-hotel.jpg 164595
dl ind-retail.jpg 1884581

dl scroll-cafe.jpg 324028
dl scroll-barber.jpg 2801985
dl scroll-law.jpg 8112165
dl scroll-bakery.jpg 1775043
dl scroll-carwash.jpg 2877781
dl scroll-events.jpg 2747449
dl scroll-pet.jpg 4587997
dl scroll-agency.jpg 3182812
dl scroll-wine.jpg 1308324
dl scroll-juice.jpg 1123254
dl scroll-realestate.jpg 106399
dl scroll-foodtruck.jpg 1639562
dl scroll-dental.jpg 305567
dl scroll-photography.jpg 1983037
dl scroll-tourism.jpg 2387871
dl scroll-dessert.jpg 291528
dl scroll-spa.jpg 3757942
dl scroll-fitness.jpg 2261482

echo "Done: $(ls -1 "$DIR"/*.jpg 2>/dev/null | wc -l | tr -d ' ') images"
