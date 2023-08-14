<!--<template>
    <v-row>
      <v-col class="text-center">
        <img
          src="/v.png"
          alt="Vuetify.js"
          class="mb-5"
        >
        <blockquote class="blockquote">
          &#8220;First, solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
              <em>&mdash;</em>
            </small>
          </footer>
        </blockquote>
      </v-col>
    </v-row>
  </template>>-->


  <template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field label="ชื่อ"></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field label="นามสกุล" placeholder=""></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field label="อายุ" solo></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field label="อีเมล" placeholder=""></v-text-field>
        </v-col>

        <v-col cols="12" sm="6" md="3">
          <v-text-field label="เบอร์โทรศัพท์" filled></v-text-field>
        </v-col>

        <v-col cols="18" sm="6" md="9">
          <v-text-field label="ที่อยู่" placeholder="" outlined></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <div class="text-center">
      <v-bottom-sheet v-model="sheet" inset>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="green" dark v-bind="attrs" v-on="on"> บันทึก </v-btn>
        </template>
        <v-sheet class="text-center" height="200px">
          <v-btn
            class="mt-6"
            text
            color="blue"
            @click="sheet = !sheet"
            to="/dataemployee"
          >
            กลับไปที่รายชื่อ
          </v-btn>
          <div class="my-3">บันทึกไปในรายชื่อแล้ว</div>
        </v-sheet>
      </v-bottom-sheet>
    </div>
  </v-form>
</template>
    
    
  
  <script>
export default {
  name: "InspirePage",
};
</script>
  
  
  