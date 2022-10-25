<script setup>
import { reactive, toRefs } from "@vue/reactivity";
import { User, Lock } from "@element-plus/icons-vue";

const data = reactive({
  form: {
    username: "",
    password: "",
  },
  checked1: false,
});
const { form, checked1 } = toRefs(data);
</script>

<template>
  <div class="login">
    <div class="login_box">
      <div class="login_header">
        <h2>在线学习平台</h2>
        <p>拥有丰富的学习资源最好的学习平台之一</p>
      </div>
      <el-form :model="form">
        <el-form-item>
          <el-input
            :prefix-icon="User"
            :clearable="true"
            v-model="form.username"
          />
        </el-form-item>
      </el-form>
      <el-form :model="form">
        <el-form-item>
          <el-input
            :prefix-icon="Lock"
            type="password"
            v-model="form.password"
            show-password
          />
        </el-form-item>
      </el-form>
      <div class="login_footer">
        <el-checkbox v-model="checked1" size="large">自动登录</el-checkbox>
        <el-button type="text">忘记密码</el-button>
      </div>
      <el-button type="primary" style="width: 100%; margin-top: 10px"
        >登录</el-button
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: #f0f2f5;
  .login_box {
    position: absolute;
    width: 400px;
    height: 350px;
    left: 0;
    right: 0;
    top: 0;
    bottom: 200px;
    margin: auto;
    text-align: center;
    .login_header{
      height: 150px;
    }
    .el-input {
      height: 40px;
    }
    .login_footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>


