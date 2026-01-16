<template>
    <!-- HERO SECTION -->
    <section class="hero">
      <v-container class="py-16">
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <h1 class="hero-title">
              Cégvándor – Otthon az Ön munkavállalóinak, bárhol is dolgoznak
            </h1>

            <p class="hero-subtitle mt-6">
              Megbízható, rugalmas szállásmegoldásokat kínálunk vállalatok számára –
              belföldön és külföldön egyaránt. Kifejezetten olyan partnerekkel
              dolgozunk, akik hosszú távon vagy nagyobb létszámú csapatok
              elhelyezését keresik.
            </p>

            <div class="hero-actions mt-10">
              <v-btn
                variant="outlined"
                color="primary"
                size="large"
                to="/hogyan-mukodunk"
              >
                Hogyan működik
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- WHY SECTION -->
    <section class="why">
      <v-container class="py-16">
        <v-row>
          <v-col cols="12" class="text-center mb-12">
            <h2>Miért a Cégvándor?</h2>
          </v-col>

          <v-col cols="12" md="4">
            <h3>Egyedi megoldások</h3>
            <p>
              Minden cég és minden munkavállaló más igényekkel rendelkezik.
              Mi ezekhez igazodva alakítjuk ki a szállásmegoldásokat.
            </p>
          </v-col>

          <v-col cols="12" md="4">
            <h3>Nemzetközi lefedettség</h3>
            <p>
              Belföldi vagy külföldi elhelyezés esetén is kiterjedt
              partnerhálózatunk biztosítja a megfelelő megoldást.
            </p>
          </v-col>

          <v-col cols="12" md="4">
            <h3>Megbízhatóság és kényelem</h3>
            <p>
              Gondoskodunk róla, hogy munkavállalói egy hosszú munkanap után
              valóban otthon érezzék magukat.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>

    <!-- CLOSING SECTION -->
    <section class="closing">
      <v-container class="py-16">
        <v-row justify="center">
          <v-col cols="12" md="8" class="text-center">
            <p class="closing-text">
              A Cégvándor célja, hogy Ön és csapata a munkára koncentrálhasson,
              miközben mi átvállaljuk a szállással kapcsolatos szervezési és
              kényelmi feladatokat.
            </p>
          </v-col>
        </v-row>
      </v-container>
    </section>
</template>

<script setup>
// no logic needed yet
</script>

<style scoped>
.hero {
  background: rgb(var(--v-theme-surface));
}

.hero-title {
  font-size: 2.4rem;
  font-weight: 600;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 0.7);
}

.why {
  background: white;
}

.why h3 {
  margin-bottom: 0.5rem;
}

.closing {
  background: rgb(var(--v-theme-background));
}

.closing-text {
  font-size: 1.1rem;
  color: rgba(0, 0, 0, 0.7);
}
</style>
