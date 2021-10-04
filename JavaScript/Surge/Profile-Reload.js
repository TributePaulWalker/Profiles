$httpAPI("POST", "/v1/profiles/reload", {}, data => {
    $notification.post("配置重载","成功","")
    $done({
        title: "配置重载",
        content: "配置重载成功",
        icon: "arrow.triangle.2.circlepath.doc.on.clipboard",
        "icon-color": "#FFD700",
     })
    });
