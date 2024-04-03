
 /// Benim Cozumum /// 

function longest(s1, s2) {
    const string1 = [...new Set(s1)]
    const string2 = [...new Set(s2)]
    const subString = string1.concat(string2)
    const subString2 = [...new Set(subString)]
    return subString2.sort().join('')
  }

  /// Benim Cozumum /// 

  /// Başkasının Çözümü ///

  const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

  /// Başkasının Çözümü ///

console.log(longest('dsaihdgsainbxzjcbnxzibg','asoidhasiuodsa'))