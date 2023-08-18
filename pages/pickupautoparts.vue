

<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="24" sm="12" md="6">
          <v-text-field label="หมายเลขอะไหล่"></v-text-field>
        </v-col>

        <v-col cols="24" sm="12" md="6">
          <v-text-field label="ประเภทอะไหล่" placeholder=""></v-text-field>
        </v-col>

        <v-col cols="24" sm="12" md="6">
          <v-text-field label="ยี่ห้อ" solo></v-text-field>
        </v-col>

        <v-col cols="24" sm="12" md="6">
          <v-text-field label="บริษัท" placeholder=""></v-text-field>
        </v-col>

        <v-col cols="24" sm="12" md="6">
          <v-text-field label="จำนวนที่ต้องการเบิก" filled></v-text-field>
        </v-col>
      </v-row>
      <v-container>
        <div class="text-center">
          <v-bottom-sheet v-model="sheet" persistent>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="green" dark v-bind="attrs" v-on="on">
                ยืนยันการเบิกอ่ะไหล่
              </v-btn>
            </template>
            <v-sheet class="text-center" height="200px">
              <v-btn
                class="mt-6"
                text
                color="green"
                @click="sheet = !sheet"
                to="/buyparts"
              >
                กลับไปหน้าเบิกอะไหล่
              </v-btn>
              <div class="py-3">เบิกอะไหล่เสร็จสมบูรณ์</div>
            </v-sheet>
          </v-bottom-sheet>
          <v-btn depressed color="error" to="/buyparts"> ยกเลิก </v-btn>
        </div>
      </v-container>
    </v-container>
  </v-form>
</template>
  
  

<script>
export default {
  name: "InspirePage",
};
</script>
