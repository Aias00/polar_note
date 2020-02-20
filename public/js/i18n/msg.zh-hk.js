var MSG={"app":"Leanote\r","share":"分享\r","noTag":"無標簽\r","inputUsername":"請輸入使用者名稱\r","inputEmail":"請輸入Email\r","inputPassword":"請輸入密碼\r","inputPassword2":"請輸入確認密碼\r","confirmPassword":"兩次密碼輸入不正確\r","history":"歷史記錄\r","editorTips":"說明\r","editorTipsInfo":"<h4>1. 快捷鍵</h4>ctrl+shift+c 代碼塊切換 <h4>2. shift+enter 跳出當前區域</h4>比如在代碼塊中<img src=\"/images/outofcode.png\" style=\"width: 90px\"/>按shift+enter可跳出當前代碼塊.\r","all":"最新\r","trash":"垃圾桶\r","delete":"刪除\r","unTitled":"無標題\r","defaultShare":"預設分享\r","writingMode":"寫作模式\r","normalMode":"普通模式\r","saving":"正在儲存\r","saveSuccess":"儲存成功\r","Are you sure to delete it ?":"確認刪除?\r","Insert link into content":"將附件連結插入到內容中\r","Download":"下載\r","Delete":"刪除\r","update":"更新\r","Update Time":"更新時間\r","Create Time":"建立時間\r","Post Url":"博文連結\r","close":"關閉\r","cancel":"取消\r","send":"傳送\r","shareToFriends":"分享給好友\r","publicAsBlog":"公開為博客\r","cancelPublic":"取消公開為博客\r","move":"移動\r","copy":"複製\r","rename":"重命名\r","exportPdf":"匯出PDF\r","addChildNotebook":"新增子記事本\r","deleteAllShared":"刪除所有分享\r","deleteSharedNotebook":"刪除分享記事本\r","copyToMyNotebook":"複製到我的記事本\r","checkEmail":"查看郵件\r","sendVerifiedEmail":"傳送驗證郵箱\r","sendSuccess":"傳送成功\r","sendFailed":"傳送失敗\r","friendEmail":"好友郵箱\r","readOnly":"只讀\r","writable":"可寫\r","inputFriendEmail":"請輸入好友郵箱\r","clickToChangePermission":"點擊改變權限\r","sendInviteEmailToYourFriend":"傳送邀請email給Ta\r","friendNotExits":"該用戶還沒有註冊%s, 複製邀請連結傳送給Ta, 邀請連結: %s\r","emailBodyRequired":"郵件內容不能為空\r","inviteEmailBody":"Hi, 你好, 我是%s, %s非常好用, 快來註冊吧!\r","historiesNum":"leanote會儲存筆記的最近<b>10</b>份歷史記錄\r","noHistories":"無歷史記錄\r","datetime":"日期\r","restoreFromThisVersion":"從該版本還原\r","confirmBackup":"確定要從該版還原? 還原前leanote會備份當前版本到歷史記錄中.\r","createAccountSuccess":"帳號建立成功\r","createAccountFailed":"帳號建立失敗\r","updateUsernameSuccess":"使用者名稱修改成功\r","usernameIsExisted":"使用者名稱已存在\r","noSpecialChars":"不能包含特殊字符\r","minLength":"長度至少為%s\r","errorEmail":"請輸入正確的email\r","verifiedEmaiHasSent":"驗證郵件已傳送, 請及時查閱郵件並驗證.\r","emailSendFailed":"郵件傳送失敗\r","inputNewPassword":"請輸入新密碼\r","errorPassword":"請輸入長度不少於6位的密碼, 盡量復雜\r","updatePasswordSuccess":"修改密碼成功\r","Please save note firstly!":"請先儲存筆記!\r","Please sign in firstly!":"你還沒有登入, 請先登入!\r","Are you sure ?":"你確定執行該操作?\r","Are you sure to install it ?":"你確定安裝該主題?\r","Are you sure to delete":"你確定刪除\r","Success":"成功\r","Error":"錯誤\r","File exists":"檔案已存在\r","Delete file":"刪除檔案\r","No images":"無圖片\r","Filename":"文件名\r","Group Title":"群組標題\r","Hyperlink":"超連結\r","Please provide the link URL and an optional title":"請填寫連結和一個可選的標題\r","optional title":"可選標題\r","Cancel":"取消\r","Strong":"粗體\r","strong text":"粗體\r","Emphasis":"斜體\r","emphasized text":"斜體\r","Blockquote":"引用\r","Code Sample":"代碼\r","enter code here":"代碼\r","Image":"圖片\r","Heading":"標題\r","Numbered List":"有序列表\r","Bulleted List":"無序列表\r","List item":"項目\r","Horizontal Rule":"水平線\r","Markdown syntax":"Markdown 語法\r","Undo":"還原\r","Redo":"重作\r","enter image description here":"圖片標題\r","enter link description here":"連結標題\r","Edit mode":"編輯模式\r","Vim mode":"Vim模式\r","Emacs mode":"Emacs模式\r","Normal mode":"普通模式\r","Normal":"普通\r","Light":"輕量\r","Light editor":"輕量編輯器\r","Add Album":"新增相簿\r","Cannot delete default album":"不能刪除預設相簿\r","Cannot rename default album":"不能重命名預設相簿\r","Rename Album":"重新命名\r","Add Success!":"新增成功!\r","Rename Success!":"重新命名成功!\r","Delete Success!":"刪除成功\r","Are you sure to delete this image ?":"確定刪除該圖片?\r","click to remove this image":"刪除圖片\r","error":"錯誤\r","Prev":"上一頁\r","Next":"下一頁\r"};function getMsg(key, data) {var msg = MSG[key];if(msg) {if(data) {if(!isArray(data)) {data = [data];}for(var i = 0; i < data.length; ++i) {msg = msg.replace("%s", data[i]);}}return msg;}return key;}