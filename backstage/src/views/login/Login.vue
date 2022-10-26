<script setup>
import { reactive, toRefs } from "@vue/reactivity";
import { User, Lock } from "@element-plus/icons-vue";

const data = reactive({
  form: {
    username: "",
    password: "",
    userPassword: "",
  },
  checked1: false,
  NewStatus: false,
  loginName: "账号密码登录",
});
const NewUser = () => {
  data.NewStatus = true;
  if (data.NewStatus) {
    data.loginName = "账号密码注册";
  } else if(!data.NewStatus) {
    data.loginName = "账号密码注册";
  }
};
const { form, checked1, NewStatus, loginName } = toRefs(data);
</script>

<template>
  <div class="login">
    <div class="login_box" v-show="!NewStatus">
      <div class="login_header">
        <h1 style="font-weight: 900">在线学习平台</h1>
        <p style="color: #409eff">拥有丰富的学习资源最好的学习平台之一</p>
        <div class="login_title">
          <p style="color: #409eff">{{ loginName }}</p>
        </div>
        <el-divider />
      </div>
      <el-form :model="form">
        <el-form-item>
          <el-input
            :prefix-icon="User"
            :clearable="true"
            placeholder="请输入账号"
            v-model="form.username"
          />
        </el-form-item>
      </el-form>
      <el-form :model="form">
        <el-form-item>
          <el-input
            :prefix-icon="Lock"
            type="password"
            placeholder="请输入密码"
            v-model="form.password"
            show-password
          />
        </el-form-item>
      </el-form>
      <div class="login_footer">
        <el-checkbox v-model="checked1" size="large">自动登录</el-checkbox>
        <span @click="NewUser">新用户注册</span>
        <span>忘记密码</span>
      </div>
      <el-button type="primary" style="width: 100%; margin-top: 10px"
        >登录</el-button
      >
    </div>

    <div class="login_box" v-show="NewStatus">
      <div class="login_header">
        <h1 style="font-weight: 900">在线学习平台</h1>
        <p style="color: #409eff">拥有丰富的学习资源最好的学习平台之一</p>
      </div>
      <div class="login_title">
        <p style="color: #409eff">{{ loginName }}</p>
      </div>
      <el-divider />
      <el-form :model="form">
        <el-form-item>
          <el-input
            :prefix-icon="User"
            :clearable="true"
            placeholder="请手机号"
            v-model="form.username"
          />
        </el-form-item>
      </el-form>

      <el-form :model="form">
        <el-form-item>
          <el-input
            :prefix-icon="Lock"
            type="password"
            placeholder="请输入密码"
            v-model="form.password"
            show-password
          />
        </el-form-item>
      </el-form>

      <el-form :model="form">
        <el-form-item>
          <el-input
            :prefix-icon="Lock"
            type="password"
            placeholder="请再次输入密码"
            v-model="form.userPassword"
            show-password
          />
        </el-form-item>
      </el-form>
      <el-button type="primary" style="width: 100%; margin-top: 10px"
        >注册</el-button
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

    .login_header {
    }
    .login_title {
      margin: auto;
      position: relative;
      margin-top: 20px;
      height: 30px;
      line-height: 30px;
      p{
        width: 100%;
        text-align: center;
      }
    }

    .el-input {
      height: 40px;
    }

    .login_footer {
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        color: #409eff;
        cursor: pointer;
      }
    }
  }
}
::v-deep .el-divider {
  margin-top: 9px;
}
</style>
