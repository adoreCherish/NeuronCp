# AI基本概念:
    1. 感知器
    2. 权重和阈值
    3. 决策和模型
    4. 矢量化
    5. 运作过程
    6. 输出的连续性


类比人脑:  
    >神经末梢---电信号---神经细胞(神经元)---神经中枢---对外部做出反应
z = ∑权重*外部因素+阈值    ——>z = wx+b
      w     x     b
模型训练的本质就是训练权重+阈值
z->∞ ->1
z->-∞ ->0
所以形成的图由0 1 组成—>输出的连续性

感知器｛
        单向信号模型
        递归神经网络模型
      ｝


成熟技术方案
    TensorFlow(基于数据流图Data Flow Graph)
    Caffe2
    Core ML
库{
    算法方向:{
                Natual(自然语言处理)
                ConrNetJs(卷积神经网络CNN)
                pixzcode
          }
    神经网络:{
                brain.js
                Deep playground
                Synaptic deeplearn.js
         }
    辅助库{
                node-svm(向量机)
                mljs(具有多个函数方法的子库)
         } 


}
