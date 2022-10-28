<script setup>
import { reactive, toRefs } from "@vue/reactivity";
import { User, Lock } from "@element-plus/icons-vue";
// 数据集合
const data = reactive({
  // 表单数据
  form: {
    username: "",
    password: "",
    userPassword: "",
  },
  rules: {
    username: [
      {
        required: true,
        message: "手机号不能为空",
        trigger: "blur",
      },
      {
        required: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
        message: "请输入正确的手机号",
        trigger: "blur",
        trigger: "change",
      },
    ],
    password: [
      {
        required: true,
        message: "密码不能为空",
        trigger: "blur",
      },
      {
        min: 3,
        max: 5,
        message: "请输入正确的手机号",
        trigger: "blur",
        trigger: "change",
      },
    ],
  },
});
// 点击注册
const Register = async (formEl) => {
  if (!formEl) return;
  await formEl.validate((valid, fields) => {
    console.log(valid, fields);
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};
const resetForm = (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
};
// 抛出
const { form, rules } = toRefs(data);
</script>
<template>
  <div class="register">
    <div class="login_box">
      <div class="login_header">
        <h1 style="font-weight: 900">
          <img src="../../img/icon.png" alt="" /> <span>在线学习平台</span>
        </h1>
        <p style="color: #409eff">拥有丰富的学习资源最好的学习平台之一</p>
      </div>
      <div class="login_title">
        <p style="color: #409eff">账号密码注册</p>
      </div>
      <el-divider />
      <el-form :model="form" :rules="rules" ref="ruleFormRef">
        <el-form-item prop="username">
          <el-input
            :prefix-icon="User"
            :clearable="true"
            placeholder="请手机号"
            v-model="form.username"
          />
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            :prefix-icon="Lock"
            type="password"
            placeholder="请输入密码"
            v-model="form.password"
            show-password
          />
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            :prefix-icon="Lock"
            type="password"
            placeholder="请再次输入密码"
            v-model="form.userPassword"
            show-password
          />
        </el-form-item>
      </el-form>
      <el-button
        type="primary"
        style="width: 100%; margin-top: 10px"
        @click="Register(ruleFormRef)"
        >注册</el-button
      >
    </div>
  </div>
</template>
