<template>
    <v-form>
      <v-container>
        <v-row>
            <v-col
            cols="12"
            sm="6"
            md="12"
          >
            <v-text-field
              label="รหัสสมาชิก"
              placeholder=""
              solo
            ></v-text-field>
          </v-col>

       
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
            <v-text-field
              label="ชื่อผู้ยืม"
              placeholder=""
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
            md="6"
          >
            <v-text-field
              label="วันที่ยืม"
              solo
            ></v-text-field>
          </v-col>
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
            <v-text-field
              label="ชื่อผู้รับ"
              placeholder=""
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
            md="6"
          >
            <v-text-field
              label="วันที่คืน"
              placeholder=""
              solo
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="12"
            sm="6"
            md="12"
          >
            <v-text-field
              label="ชื่อหนังสือ"
              filled
            ></v-text-field>
          </v-col>
  
          
  
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
            <v-text-field
              label="ราคาหนังสือ"
              outlined
            ></v-text-field>
          </v-col>
  
          <v-col
            cols="12"
            sm="6"
            md="3"
          >
            <v-text-field
              label="หมวดหมู่"
              placeholder=""
              outlined
            ></v-text-field>
            
          </v-col>
        </v-row>
        
    <v-btn
      depressed
      color="primary"
    >
      ตกลง
    </v-btn>
    <v-btn
      depressed
      color="error"
    >
      ยกเลิก
    </v-btn>
    
      </v-container>
      
    </v-form>
    
  </template>
    
    
    
  
  <script>
  export default {
    name: 'InspirePage'
  }
  
  
  </script>
  
  
  