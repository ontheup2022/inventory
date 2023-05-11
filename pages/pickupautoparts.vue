

<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="นาม"
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="นามสกุล"
            placeholder=""
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="อายุ"
            solo
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="อีเมล"
            placeholder=""
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="6"
          md="3"
        >
          <v-text-field
            label="เบอร์โทรศัพท์"
            filled
          ></v-text-field>
        </v-col>

       

        

        <v-col
          cols="18"
          sm="6"
          md="9"
        >
          <v-text-field
            label="ที่อยู่"
            placeholder=""
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
  
  

<script>
export default {
  name: 'InspirePage'
}


</script>
