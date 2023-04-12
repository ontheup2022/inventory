<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6">
        <v-textarea
          solo
          name="input-7-4"
          label="บริษัทที่สั่งซื้อ"
        ></v-textarea>
      </v-col>
      <v-col cols="12" md="6"> </v-col>
    </v-row>
    <v-col align="center">
      <v-col class="d-flex" cols="12" sm="6">
        <v-select :items="items" label="วันที่" dense>
          <v-row justify="center">
            <v-date-picker v-model="picker"></v-date-picker>
          </v-row>
        </v-select>
      </v-col>
    </v-col>
  </v-container>
</template>