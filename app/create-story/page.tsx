"use client";

import { Suspense, useState } from "react";
import ChildrenNavbar from "@/components/ChildrenNavbar";
import ChildrenFooter from "@/components/ChildrenFooter";

function CreateStoryContent() {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedStory, setGeneratedStory] = useState<any>(null);

  const handleCreateStory = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    
    // 模拟AI生成过程
    setTimeout(() => {
      setGeneratedStory({
        title: "小兔子的冒险",
        content: "从前有一只可爱的小兔子...",
        image: "/images/illustrations/KOXgu1EUeYFQ.jpg"
      });
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <>
      <ChildrenNavbar />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-8">
        <div className="max-w-4xl mx-auto px-8">
          {/* 页面标题 */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-6 py-3 rounded-full mb-6">
              <span className="text-2xl">🎨</span>
              <span className="text-blue-600 font-semibold">AI故事创作</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              创造你的
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                专属故事
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              告诉我们你想要什么样的故事，AI会为你创造一个独一无二的绘本
            </p>
          </div>

          {/* 创作表单 */}
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 mb-12">
            <div className="space-y-8">
              {/* 提示词输入 */}
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">💭</span>
                  描述你想要的故事
                </label>
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="例如：一只会飞的小猫咪在彩虹上的冒险..."
                  className="w-full h-32 p-6 border-2 border-gray-200 rounded-2xl focus:border-blue-400 focus:outline-none resize-none text-lg"
                  disabled={isGenerating}
                />
              </div>

              {/* 故事设置 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">故事长度</label>
                  <select className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none">
                    <option>短故事 (5-8页)</option>
                    <option>中等故事 (10-15页)</option>
                    <option>长故事 (20-25页)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">适合年龄</label>
                  <select className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none">
                    <option>3-5岁</option>
                    <option>6-8岁</option>
                    <option>9-12岁</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">故事类型</label>
                  <select className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-400 focus:outline-none">
                    <option>冒险故事</option>
                    <option>友谊故事</option>
                    <option>学习故事</option>
                    <option>幻想故事</option>
                  </select>
                </div>
              </div>

              {/* 创作按钮 */}
              <div className="text-center">
                <button
                  onClick={handleCreateStory}
                  disabled={!prompt.trim() || isGenerating}
                  className="btn bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white border-none px-12 py-4 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isGenerating ? (
                    <>
                      <span className="loading loading-spinner loading-md mr-2"></span>
                      AI正在创作中...
                    </>
                  ) : (
                    <>
                      ✨ 开始创作故事
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* 生成进度 */}
          {isGenerating && (
            <div className="bg-white rounded-3xl shadow-xl p-8 mb-12">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-4xl text-white animate-bounce">🎨</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">AI正在为你创作故事...</h3>
                <div className="max-w-md mx-auto">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>创作进度</span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full animate-pulse" style={{width: '75%'}}></div>
                  </div>
                </div>
                <p className="text-gray-600 mt-4">正在生成精美的插画和有趣的情节...</p>
              </div>
            </div>
          )}

          {/* 生成结果 */}
          {generatedStory && (
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">🎉 你的故事创作完成了！</h3>
                <p className="text-gray-600">点击下面的按钮开始阅读你的专属故事</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
                <h4 className="text-2xl font-bold text-gray-800 mb-4">{generatedStory.title}</h4>
                <p className="text-gray-600 mb-6">{generatedStory.content}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="btn bg-gradient-to-r from-green-500 to-blue-500 text-white border-none px-8 py-3 rounded-full">
                    📖 开始阅读
                  </button>
                  <button className="btn btn-outline border-2 border-blue-300 text-blue-600 hover:bg-blue-500 hover:text-white px-8 py-3 rounded-full">
                    💾 保存故事
                  </button>
                  <button className="btn btn-outline border-2 border-purple-300 text-purple-600 hover:bg-purple-500 hover:text-white px-8 py-3 rounded-full">
                    🔄 重新创作
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <ChildrenFooter />
    </>
  );
}

export default function CreateStoryPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="loading loading-spinner loading-lg"></div>
      </div>
    }>
      <CreateStoryContent />
    </Suspense>
  );
}

