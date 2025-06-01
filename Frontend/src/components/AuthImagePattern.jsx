import React from "react";

const codeSnippets = `function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
}`;

const CodeEditor = () => {
  const lines = codeSnippets.split("\n");

  return (
    <div className="w-full max-w-2xl">
      <div className="bg-gray-900/90 backdrop-blur-xl rounded-2xl border border-gray-700 overflow-hidden shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 bg-gray-800/80 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="w-16" />
        </div>

        {/* Code Area */}
        <div className="p-6 font-mono text-sm leading-relaxed bg-gray-900 overflow-y-auto max-h-[500px]">
          <div className="space-y-1">
            {lines.map((rawLine, idx) => {
              const leadingSpaces = rawLine.match(/^ */)[0].length;
              const content = rawLine.trimEnd();
              const tokens = content.split(
                /(\bfunction\b|\bconst\b|\bfor\b|\bif\b|\breturn\b|\b(let)\b|\[|\]|{|}|=|\(|\)|;|[,])/g
              );

              return (
                <div key={idx} className="flex">
                  {/* Line number */}
                  <span className="text-gray-500 w-8 text-right mr-4 select-none">
                    {idx + 1}
                  </span>

                  <span
                    className="whitespace-pre"
                    style={{ width: `${leadingSpaces * 0.6}ch` }}
                  ></span>

                  <pre className="inline-flex flex-wrap">
                    {tokens.map((tok, tIdx) => {
                      if (
                        /^function$/.test(tok) ||
                        /^for$/.test(tok) ||
                        /^if$/.test(tok)
                      ) {
                        return (
                          <span key={tIdx} className="text-purple-400">
                            {tok}
                          </span>
                        );
                      }
                      if (/^const$/.test(tok) || /^let$/.test(tok)) {
                        return (
                          <span key={tIdx} className="text-purple-400">
                            {tok}
                          </span>
                        );
                      }
                      if (/^return$/.test(tok)) {
                        return (
                          <span key={tIdx} className="text-purple-400">
                            {tok}
                          </span>
                        );
                      }
                      if (/^\[|\]|\{|}|\(|\)|,|;$/.test(tok)) {
                        return (
                          <span key={tIdx} className="text-yellow-400">
                            {tok}
                          </span>
                        );
                      }
                      if (/^=|\+|-|\*|\//.test(tok)) {
                        return (
                          <span key={tIdx} className="text-white">
                            {tok}
                          </span>
                        );
                      }
                      if (/^["'].*["']$/.test(tok) || /^`.*`$/.test(tok)) {
                        return (
                          <span key={tIdx} className="text-green-400">
                            {tok}
                          </span>
                        );
                      }
                      if (/^\d+$/.test(tok)) {
                        return (
                          <span key={tIdx} className="text-yellow-300">
                            {tok}
                          </span>
                        );
                      }
                      // Variable names / identifiers
                      return (
                        <span key={tIdx} className="text-blue-400">
                          {tok}
                        </span>
                      );
                    })}
                  </pre>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CodeEditor;
