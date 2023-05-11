

<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="24"
          sm="12"
          md="6"
        >
          <v-text-field
            label="หมายเลขอะไหล่"
          ></v-text-field>
        </v-col>

        <v-col
        cols="24"
          sm="12"
          md="6"
        >
          <v-text-field
            label="ประเภทอะไหล่"
            placeholder=""
          ></v-text-field>
        </v-col>

        <v-col
        cols="24"
          sm="12"
          md="6"
        >
          <v-text-field
            label="ยี่ห้อ"
            solo
          ></v-text-field>
        </v-col>

        <v-col
        cols="24"
          sm="12"
          md="6"
        >
          <v-text-field
            label="บริษัท"
            placeholder=""
          ></v-text-field>
        </v-col>

        <v-col
        cols="24"
          sm="12"
          md="6"
        >
          <v-text-field
            label="จำนวนที่ต้องการเบิก"
            filled
          ></v-text-field>
        </v-col>

        <v-btn
      class="ma-2"
      :loading="loading2"
      :disabled="loading2"
      color="success"
      @click="loader = 'loading2'"
      to="/buyparts"
    >
      ยืนยัน
      <template v-slot:loader> </template>
    </v-btn>

      </v-row>
    </v-container>
  </v-form>
</template>
  
  

<script>
export default {
  name: 'InspirePage'
}


</script>
