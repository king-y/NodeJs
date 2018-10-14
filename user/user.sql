/*
 Navicat Premium Data Transfer

 Source Server         : wamp
 Source Server Type    : MySQL
 Source Server Version : 50711
 Source Host           : localhost:3306
 Source Schema         : s79

 Target Server Type    : MySQL
 Target Server Version : 50711
 File Encoding         : 65001

 Date: 13/10/2018 21:31:05
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `age` tinyint(3) UNSIGNED NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE,
  UNIQUE INDEX `idxlq_name`(`name`) USING BTREE,
  INDEX `idx_name`(`name`) USING BTREE,
  INDEX `idxl_name`(`name`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 52 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (6, '安娜', 80);
INSERT INTO `user` VALUES (7, '天使', 30);
INSERT INTO `user` VALUES (8, '查莉娅', 36);
INSERT INTO `user` VALUES (9, '黑百合', 32);
INSERT INTO `user` VALUES (10, '猎空', 23);
INSERT INTO `user` VALUES (11, '狂鼠', 40);
INSERT INTO `user` VALUES (12, '托比昂', 50);
INSERT INTO `user` VALUES (13, 'D.Va', 20);
INSERT INTO `user` VALUES (14, '源氏', 35);
INSERT INTO `user` VALUES (15, '死神', 40);
INSERT INTO `user` VALUES (17, '堡垒', 99);
INSERT INTO `user` VALUES (18, '老王', 40);
INSERT INTO `user` VALUES (19, '小美', 23);
INSERT INTO `user` VALUES (20, '莱因哈特', 80);
INSERT INTO `user` VALUES (21, '路霸', 43);
INSERT INTO `user` VALUES (22, '温斯顿', 20);
INSERT INTO `user` VALUES (23, '秩序之光', 19);
INSERT INTO `user` VALUES (24, '小王', 40);
INSERT INTO `user` VALUES (25, '小王八', 4);
INSERT INTO `user` VALUES (26, '小霸王', 4);
INSERT INTO `user` VALUES (27, '王尼玛', 40);
INSERT INTO `user` VALUES (28, '王老五', 0);
INSERT INTO `user` VALUES (30, '王中王', 0);
INSERT INTO `user` VALUES (31, '王守义', 0);
INSERT INTO `user` VALUES (47, '坚果', 1);
INSERT INTO `user` VALUES (48, 'hhhh', 12);
INSERT INTO `user` VALUES (50, '二狗子', 12);
INSERT INTO `user` VALUES (51, 'heda', 12);

SET FOREIGN_KEY_CHECKS = 1;
