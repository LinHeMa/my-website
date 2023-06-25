---
title: Can place flower
description: leet code 解題的心得！
---
# 前言 
## Greddy
貪婪（Greedy）是一種解決問題的範式或演算法方法，它通過在每個步驟上做出局部最佳選擇來逐步構建解決方案。換句話說，貪婪演算法在每個階段都選擇最佳的選擇，而不考慮該選擇的整體影響或長期後果。

在花圃問題中，貪婪方法涉及遍歷每個花床的區塊，並根據當前區塊的相鄰區塊進行決策，判斷是否種植花朵。該演算法在當前區塊為空（0）且相鄰區塊也為空（0）的情況下種植花朵，以滿足不相鄰花朵的規則。

貪婪方法的優點是簡單且高效，通常相較於其他演算法方法需要較少的計算開銷。然而，需要注意的是並非所有問題都可以使用貪婪演算法找到最優解。貪婪演算法無法保證在每種情況下找到全局最優解，因為它們優先考慮當前局部最佳選擇。

因此，在使用貪婪方法時，關鍵是確保問題具有貪婪選擇特性，即每個步驟的局部最佳選擇會導致全局最優解。