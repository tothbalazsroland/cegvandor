<template>
  <v-app>
    <!-- NAVBAR -->
    <v-app-bar flat color="white" elevation="1">
    <v-row align="center" class="px-4" style="width: 100%;">
        <v-col cols="6" class="text-left text-h6 font-weight-bold">Cégvándor</v-col>
        <v-col cols="6" class="text-right">
          <v-btn text>Rólunk</v-btn>
        </v-col>
      </v-row>
    </v-app-bar>

    <!-- MAIN CONTENT -->
    <v-main>
      <v-container class="py-12">
        <v-row justify="center">
          <v-col cols="12" md="8">
            <h1 class="text-h4 font-weight-bold mb-6">
              Cégvándor – Az alkalmazottak otthona, bárhol is dolgoznak
            </h1>

            <p class="mb-4">
              Üdvözöljük a Cégvándornál, ahol az Ön vállalatának igényeire szabott szállásmegoldásokat kínálunk belföldön és külföldön egyaránt! Cégünk kifejezetten olyan partnereket keres, akik nagy létszámú vagy hosszú távú szálláshely biztosítására törekednek alkalmazottaik számára.
            </p>

            <h2 class="text-h5 font-weight-bold mt-8 mb-4">Miért válassza a Cégvándort?</h2>

            <ul class="mb-6">
              <li class="mb-2">
                <strong>Testreszabott Megoldások:</strong> Minden alkalmazott különálló személyiséggel és igényekkel rendelkezik. A Cégvándornál pontosan arra törekszünk, hogy minden egyes vendégünk számára személyre szabott kényelmet és szolgáltatást nyújtsunk.
              </li>
              <li class="mb-2">
                <strong>Globális Elérhetőség:</strong> Legyen szó belföldi vagy nemzetközi szállásigényről, kiterjedt hálózatunknak köszönhetően bárhol a világon behálózhatjuk Önt és csapatát.
              </li>
              <li class="mb-2">
                <strong>Megbízhatóság és Kényelem:</strong> Megértjük, hogy a hatékonyság kulcsfontosságú a sikerhez. Ezért biztosítjuk az Ön munkatársainak azt a nyugalmat és kényelmet, amelyre egy hosszú munkanap után szükségük van.
              </li>
            </ul>

            <p class="mb-6">
              A Cégvándor célja az, hogy Ön és csapata a munkára koncentrálhassanak, miközben mi gondoskodunk az otthont nyújtó szállásról. Tapasztalja meg a velünk való együttműködés előnyeit, és hagyja, hogy mi felügyeljünk mindent, ami a kényelemről és a vendégszeretetről szól.
            </p>

            <h2 class="text-h5 font-weight-bold mb-4">Lépjen kapcsolatba velünk</h2>
            <p class="mb-4">
              Kérdése van, vagy érdeklődne a szolgáltatásainkról? Forduljon hozzánk bizalommal az alábbi e-mail címen:
            </p>
            <v-btn color="primary" href="mailto:info@cegvandor.hu" target="_blank">
              Írjon nekünk: info@cegvandor.hu
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <!-- FOOTER -->
    <v-footer color="grey-lighten-4" padless>
      <v-container class="text-center py-6">
        <p class="text-caption">&copy; {{ new Date().getFullYear() }} Cégvándor – Minden jog fenntartva.</p>
      </v-container>
    </v-footer>
  </v-app>
</template>
