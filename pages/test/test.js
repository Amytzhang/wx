//test.js
Page({
  data: {
    name: "test"
  },
  onLoad(query) {
    console.log('页面参数',query)
  },
  onReady() {
    const query = this.createSelectorQuery()
    query.select('#myCanvas')
      .fields({ node: true, size: true })
      .exec((res) => {
        console.log('res:',res)
        const canvas = res[0].node
        const ctx = canvas.getContext('2d')
        ctx.beginPath();
        const dpr = wx.getSystemInfoSync().pixelRatio
        canvas.width = res[0].width * dpr
        canvas.height = res[0].height * dpr
        ctx.scale(dpr, dpr)
        ctx.fillStyle='#FFA500'
        ctx.fillRect(25, 25, 100, 100)
        ctx.clearRect(45, 45, 60, 60)
        ctx.strokeStyle='rgb(255,200,211)'
        ctx.strokeRect(50, 50, 50, 50)
        
      })
      query.select('#myCanvas2')
      .fields({ node: true})
      .exec((res) => {
        console.log('res:',res)
        const canvas1 = res[1].node
        const ctx1 = canvas1.getContext('2d')
        ctx1.strokeStyle='#09f'
        ctx1.beginPath()
        ctx1.moveTo(75, 25)
        ctx1.quadraticCurveTo(25, 25, 25, 62.5)
        ctx1.quadraticCurveTo(25, 100, 50, 100)
        ctx1.quadraticCurveTo(50, 120, 30, 125)
        ctx1.quadraticCurveTo(60, 120, 65, 100)
        ctx1.quadraticCurveTo(125, 100, 125, 62.5)
        ctx1.quadraticCurveTo(125, 25, 75, 25)
        ctx1.stroke()
      })
  }
})
