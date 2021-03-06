# Comprehensive Quality Assessment Algorithm for Smart Meters

摘要：随着智能电表运行监控和数据采集水平的提高，与智能电表相关的数据挖掘成为可能。此外，准确评估操作智能电表的质量对计量设备的采购和改进起着重要的作用电力设施的经济效益。一是智能电表运行质量的七个评价指标基于计量数据和高斯混合模型(GMM)聚类，定义了计量表应用算法从智能电表的海量数据中提取典型指标数据。然后,结合课题经验，提出了指标权重的组合优化模型考虑专家和对象的数据差异;并基于综合评价算法提出了一种基于理想溶液相似度的排序偏好修正方法评价智能电表的运行质量。最后，提出了数据驱动的评估方法以浙江宁波供电公司计量实际数据为例，说明了算法的有效性简要介绍了中国及实际应用情况。结果表明，该算法是有效的对智能电表的运行质量进行评估是否有效?对能源是否有帮助计量和资产管理。

1.绪论
随着用户对电能质量要求的提高，电力市场越来越受到电力公司的重视[1,2]。能源作为电力营销的基础计量为准确核算能源使用和能源收入提供了基础数据。因此,智能电表的运行质量将对数据质量、应用产生重要影响电力信息采集系统与电力企业效率的关系[3,4]。因此,它研究智能电表运行质量评价算法具有实际意义[5,6]。

目前，有几种模型和算法可以综合评价供应商生产的智能电表的质量。这些模型和算法主要可以分为三类:

第一类是根据一定的指标对智能电表和供应商进行评价。

二是从不同方面提出智能电表的多项指标，并进行处理数据采用简单相加加权(SAW)[7]法对设备进行评价。然而，不同的指标对智能电表的运行质量有不同的影响，因此进行评价如果不考虑索引的重要性，那么这种算法的结果是不准确的。

第三个是应用专家评分算法[8]、层次分析法(AHP)[9]等主观赋权法直接确定各指标的权重，其中考虑了指标对智能电表影响的差异性。然而，结果是相当主观的，由于专家的知识和经验的限制，这可能会导致很大的差异不同专家对智能电表运行质量的评价结果。此外,质量终端仪表运行前质量、运行质量及维护评价指标提出了基于熵的全生命周期质量评价模型参考[11]中的权重法及改进的AHP。在参考[12]中，层次模型和提出了一种基于三角形的智能电表全生命周期质量评价方法模糊层次分析法和缺陷推理法。参考[8]，全生命周期质量评价建立了智能电表的模型，并从不同的角度进行了质量评价实现供应商、型号、批次、单批。参考[13]，一个运行评估提出了一种基于健康指标的电能计量装置设计方法。在参考[14]中研究了电能表的状态评价指标和模型。在参考[15]中可靠性预测系统的需求分析、技术架构和开发平台介绍了基于云平台的电能表。参考[16]，质量评估智能的正差率、负差率、零差率等指标提出了智能电表的计量评定方法，构建了智能电表计量评定系统开发了智能电表实时监控平台。的优点和缺点上述方法如表1所示。

| Research | How Many Indexes?     | How to Determine the Weights of Indexes? | Strength | Weakness|
|----|----------|-----|--------|--------|
| 7  | 多种 | SAW  | Very Simplest      |没有考虑各指标的重要性差异 |
| 8  | 多种   | Expert scoring  | Simple      |太主观，需要专家的经验|
| 9 | 多种  | AHP  | Simple and better than direct expert scoring      |太主观，需要专家的经验|
| 11  | 多种   | Entropy weight method and improved AHP  | Consider the subjective and objective weight together      |不考虑数据的变化|
| 12 | 多种   | Triangular fuzzy AHP and defect deduction method  | Consider the fuzzy information     |不考虑客观权重|
| 13  | 多种   | N/A  | Vivid      |单一指标无法进行综合评价|
| 14  | 单一   | N/A  | Simplest      |单一指标无法进行综合评价|
| 15  | 单一   | N/A  | Simplest      |单一指标无法进行综合评价|
| 16  | 多种   | SAW  | Very Simplest      | 不考虑各指标的重要性差异|

综上所述，目前对智能电表质量评价的研究还不够充分对智能电表运行质量的供应商排序研究较少。另外，本研究基于智能电表基本特性的假设但是，如何提取这些基本特征仍然是一个问题。

为了及时、准确地监测用电状态，在用户端终端安装了大量的智能电表，定期向计量控制中心发送计量和故障报警数据。由于设备的生产批量和安装面积不同，型号和接口也不同，智能电表[11]会不断地产生大量的计量和故障报警信息。此外，环境噪声、电磁干扰等非质量因素也会导致数据不良、数据无效等问题。因此，首先利用数据分析技术对采集到的原始数据进行聚类，有助于提高智能电表的数据质量[17,18]。数据分析技术逐渐被应用到电力系统领域，主要包括数据处理和数据分析算法。到目前为止，数据分析技术已经逐渐被用来全面评价智能电表的运行质量。因此，本文基于智能电表质量数据的统计特性，试图将智能电表产生的各种故障报警事件的概率考虑为多个高斯分布的叠加。高斯混合模型(GMM)(20、21)聚类算法应用于发现之间的内在关联故障报警数据和提取典型特征的索引操作的智能电表质量,从而减少存储规模和计算智能电表的综合评估模型的复杂性。

这项工作的动机总结如下:
1. 智能电表的运行质量将对其计量精度产生很大的影响对智能电表质量的综合评价具有重要意义。
2. 虽然对智能电表的评价有一定的研究，但也存在不足如片面性和主观性。因此，有必要提出一个全面的评价算法包括多指标评价法和综合权重法智能电表的质素。
3. 有大量的数据需要处理，因此，有必要利用合适的数据(即聚类方法。，本文采用的GMM聚类方法)来减小数据的规模为进一步评估

在此背景下，基于GMM、组合权重模型和修正TOPSIS (GCT)本文提出了一种算法。

首先，定义七个指标来表示操作质量智能电表。采用GMM聚类算法提取典型指标数据智能电表的海量数据。为了更准确地确定这七个指标的权重提出了基于层次分析法、熵权法、相关系数法和变异系数法。然后，修改后的TOPSIS，可对智能电表的运行质量进行综合评价和分类。最后，数据来自中国浙江省宁波市某小区电力公司的智能电表对算法进行了验证。该算法在实际中的应用简要介绍了浙江省的制度。

2. 基于GMM的智能电表运行质量评价指标挖掘聚类算法
电力信息采集系统，如图1所示，部署在大部分中国的电力设施。从图1可以看出，能量数据，瞬时活跃电力和无功功率、三相或两相电流和电压的幅值和总功率功率因数由各供应商生产的智能电表记录。那么，这些数据是通过RS-485协议传输给收集器。接下来，收集的数据将进一步集中集中器由可编程控制器(PLC)与无线网络组成。最后,所有的数据会通过光纤传输到用电信息采集系统，一般包吗无线业务(GPRS)，第四代移动电话移动通信技术标准(4G)和码分多址(CMDA)技术。

随着信息技术的提高，这些数据可以用来改善智能电表运行状态分析的准确性。因此，这些数据逐渐被利用评价智能电表的运行质量。因此，有7个指标，它们可以表示从不同方面对智能电表的运行质量分别定义如下:当智能电表从用户端采集数据时，由于各种因素会产生不良数据例如电流或电压的突然变化和电磁干扰。因此,前收集到的数据被提交到评估系统，不可用的数据应该被消除首先，留下可用的工具来执行质量评估。事实上，智能电表只能在正常情况下准确测量功耗。如果电流变化率电压太快，测量的数据就不准确。此外,智能电表电子设备和从仪表到集中器的传输过程是基于无线的吗因此，如果存在电测干扰，测量数据也会受到影响。所有这些现象会影响智能电表测量数据的准确性和测量能力这种影响可以作为评价智能电表质量的一个指标。越可用的数据越多，智能电表的质量就越好。

由于智能电表数量庞大，类型各异，来自电力信息采集系统的智能电表数据不能直接应用于运行质量评估。因此，本文采用数据聚类的方法，探索各供应商智能电表运行质量的典型特征，从而达到综合评价的目的。事实上，智能电表的运行质量受到许多独立因素的影响，如同一批次生产工人的熟练程度、随机误差等

对于GMM，使用高斯分布概率密度函数来描述数据。通过这种数据分析技术，是将数据投影到多个高斯模型上的概率得到了各高斯模型的数据。那么，概率最大的模型为选择将一个大数据集分解成几个符合高斯分布的小数据集分布(20、21)。因此，可以使用高斯混合模型对数据进行聚类提取数据集的典型特征。如前所述，智能电表下的K个批次的设备供应商的指标数据可以看作是K个高斯分布数据集的叠加。因此，高斯混合模型聚类算法更适合挖掘指标数据智能电表的运行质量比其他的聚类算法不考虑数据分布特征

3.智能电表组合权重优化模型
采用GMM聚类算法后，得到七个典型的运行质量指标每个供应商的智能电表都可以获得。这七个指标描述了操作智能电表的质量来自各个方面。为了全面考虑各指标对运行质量评价的影响，有必要选择一种合适的评价方法确定重要性(如权重)。重量测定方法其中包括考虑专家主观经验的层次分析法、熵权法该方法考虑了数据的离散度[25,26]，相关系数法考虑数据相关性[27]的程度和考虑的变异系数法数据[28]的对比强度。为了考虑数据分散、相关的程度，综合对比强度和专家主观意愿，综合指标权重为提出了智能电表的运行质量。在本节中，将对其进行规范化处理在引入重量测定之前需要进行;然后以上四个权重介绍了测定方法;最后，建立了组合优化运行模型介绍了智能电表的质量指标。实际上，第2节中定义的7个索引可以不仅受到智能电表质量的影响，还受到智能电表质量等诸多因素的影响配电故障或其他设备质量差及外部环境。是很困难的完全区分这些因素，以提取有关质量的考虑智能电表。该问题是数据驱动算法的固有缺陷，本文对此进行了尝试利用组合权重优化模型对该问题进行求解。例如，有些索引可能是在很大程度上受与智能电表质量无关的因素影响，则这些指标可以根据AHP方法专家的经验，给出了小重量法

4. 基于智能电表的综合运行质量评价算法修改后的指标值

为了验证所提算法的有效性，对智能电表数据进行了验证本节从中国浙江省宁波市的部分配电系统入手为评估。原始数据集中共有11,565条记录，有11,312条可用记录数据预处理后保留。这些数据来自17家供应商生产的智能电表(即。位于宁波市的供应商和这些供应商将接受评估。在那里每个供应商有几个设备批次，共58个批次。在这一部分，数据对基于GMM聚类算法的智能电表运行质量进行了分析第一。然后，提出了基于组合的运行质量评价算法的有效性证明了权值优化模型和改进的TOPSIS。接下来，比较一下给出了基于gcts的算法和基于SAW和AHP的算法。最后,简要介绍了该算法在实际系统中的应用。



1. html的形式

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="result" data-user="tinnnny" data-slug-hash="NWPLXrm" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="NWPLXrm">
  <span>See the Pen <a href="https://codepen.io/tinnnny/pen/NWPLXrm">
  NWPLXrm</a> by Tinnnny (<a href="https://codepen.io/tinnnny">@tinnnny</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>