<template>
  <v-row>
    <v-col cols="12" sm="6" class="my-2 px-1">
      <v-card class="mx-auto" max-width="800">
        <v-card-title>
          <h2 class="text-h4">Member</h2>
          <v-spacer></v-spacer>
        </v-card-title>

        <v-card-text>
          ชื่อ-นามสกุล : พิชชาภา สว่างโสดา เบอร์โทรศัพท์ : 080822xxxx อีเมล :
          6331305019@lamduan.mfu.ac.th
        </v-card-text>
        <v-card-text> ที่อยู่ : มหาวิทยาลัยแม่ฟ้าหลวง </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-actions>
          <v-btn
            block
            class="white--text"
            color="deep-purple accent-4"
            to="/message"
          >
            ส่งข้อความ
          </v-btn>
        </v-card-actions>

        <v-card-title>
          <h2 class="text-h4">Member</h2>
          <v-spacer></v-spacer>
        </v-card-title>

        <v-card-text>
          ชื่อ-นามสกุล : เดือนฉาย เต็งสุวรรณ เบอร์โทรศัพท์ : 089685xxxx อีเมล :
          6331305009@lamduan.mfu.ac.th
        </v-card-text>
        <v-card-text> ที่อยู่ : มหาวิทยาลัยแม่ฟ้าหลวง </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-actions>
          <v-btn
            block
            class="white--text"
            color="deep-purple accent-4"
            to="/message"
          >
            ส่งข้อความ
          </v-btn>
        </v-card-actions>

        <v-card-title>
          <h2 class="text-h4">Member</h2>
          <v-spacer></v-spacer>
        </v-card-title>

        <v-card-text>
          ชื่อ-นามสกุล : อกนิษ อินนัน เบอร์โทรศัพท์ : 084795xxxx อีเมล :
          6331305029@lamduan.mfu.ac.th
        </v-card-text>
        <v-card-text> ที่อยู่ : มหาวิทยาลัยแม่ฟ้าหลวง </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-actions>
          <v-btn
            block
            class="white--text"
            color="deep-purple accent-4"
            to="/message"
          >
            ส่งข้อความ
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
    <v-btn
      class="ma-2"
      :loading="loading2"
      :disabled="loading2"
      color="light"
      @click="loader = 'loading2'"
      to="/profile"
    >
      กลับไปที่หน้าโปรไฟล์
    </v-btn>
  </v-row>
</template>
 
 
 
 <script>
export default {
  data: () => ({
    selection: 8,
  }),
};
</script>