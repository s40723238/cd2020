var tipuesearch = {"pages": [{'title': 'Week1~9', 'text': 'week1 \n 創建倉儲 \n 1.在自己的guthub上新增倉儲 \n 2.將自己倉儲設定底下的github page將sourse改成master branch \n 3.git clone自己的倉儲 \n 4.在cd2020打git submodule add  https://github.com/mdecourse/cmsimde.git \xa0取得 \n cmsimde的資料夾 \n 5.在cmsimde/up_dir複製所有資料貼到cd2020底下 \n 6.回到cd2020並add/commit/push打自己的帳號密碼就完成創建網站了 \n week2 \n 更新可攜系統 \n 1.在隨身碟創建data的資料夾 \n 2.創建py382資料夾，下載python3.8.2，安裝時將pip的選項取消 \n 3.創建msys64資料夾，下載msys2 \n 4.下載 PortableGit到data底下 \n 5.創wscite432資料夾，下載SciTE \n 6.打開SciTE，輸入 \n @echo off\nset Disk=y\nsubst %Disk%: "data"\n \n%Disk%:\n \nset HomePath=%Disk%:\\home\nset HomeDrive=%Disk%:\\home\nset Home=%Disk%:\\home\nset USERPROFILE=%Disk%:\\home\n \nREM 將系統 Python 程式的 io 設為 utf-8\nset PYTHONIOENCODING="utf-8"\n \n#REM for putty\n#Set GIT_HOME=%CDisk%:\\portablegit\\bin\\\n#Set GIT_SSH=%Disk%:\\putty\\plink.exe\n \nset PYTHONPATH=%Disk%:\\py382\\DLLs;%Disk%:\\py382\\Lib;%Disk%:\\py382\\Lib\\site-packages;\nset PYTHONHOME=%Disk%:\\py382\n \nset path_python=%Disk%:\\py382;%Disk%:\\py382\\Scripts;\nset path_msys2=%Disk%:\\msys64\\mingw64\\bin;\nset path_git=%Disk%:\\portablegit\\bin;\nset path_tcc=%Disk%:\\tcc;\n \npath=%Disk%:;%path_python%;%path_msys2%;%path_git%;%path_tcc%;\n \nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\nstart /MIN cmd.exe\n \nstart /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe\nstart /MIN %Disk%:\\wscite432\\wscite\\SciTE.exe\n \nExit \n 另存新檔到隨身碟下，名稱打start.bat \n @echo off\nset Disk=y\npath=%PATH%;\n \ntaskkill /IM python.exe /F\ntaskkill /IM pythonw.exe /F\ntaskkill /IM scite.exe /F\n \nREM 終止虛擬硬碟與目錄的對應\nsubst %Disk%: /D\nREM 關閉 cmd 指令視窗\ntaskkill /IM cmd.exe /F\n \nEXIT \n 另存新檔到隨身碟下，名稱打stop.bat，將wscite432資料夾複製一個到y槽 \n 7.到 網站 底下將檔案另存新檔到data底下 \n 8.打開小黑窗，輸入下載模組的指令 \n python get-pip.py \n pip install flask bs4 lxml pelican markdown flask_cors leo \n 這樣就完成可攜系統的更新了 \n w6 \n 開會紀錄 \n \n w8 \n 開會紀錄 \n \n', 'tags': '', 'url': 'Week1~9.html'}, {'title': 'week10~17', 'text': 'w10 \n 開會紀錄 \n \n w11 \n 1.進入 cd2020pj1 \n 2.進入 google的api設定網址 並登入gm帳號 \n 3.點選建立專案 \n \n 4.git clone\xa0 https://github.com/mdecourse/cd2020pj1.git \n 5.點選api服務再點 Google+ Domains API建立 \n \n 6.點憑證 並建立憑證，建立後將用戶端id跟用戶端密碼複製到記事本並存在倉儲資料夾外 \n 7.設定第一個url: https://localhost:8443 ，第二個url: https://localhost:8443/login/google/按儲存 \n \n 8.開啟leo，打開cd2020pj1.leo，在@path ./@edit coonfig.py找到第7行key file =...將上下兩個都改成自己剛剛儲存憑證密碼的檔案名稱 \n \n 9.在小黑窗打pip install authomatic \n 10.進入cd2020pj1打python wsgi.py就能開啟近端，畫面長這樣 \n \n 開會直播 \n \n \xa0開會直播2 \n \n w12 \n 分組作業 \n 倉儲 \n 網站 \n 開會紀錄 \n \n \n w13開會紀錄 \n \n 筆記: \n 虛擬主機都要使用vi指令編輯，因虛擬主機裡無法複製貼上故要下載共享文件 filezilla ，解壓縮後建立站台跟虛擬主機連線就可以共享文件了。 \n ipv4遠端控制 \n 1.cmd打開小黑窗打ipconfig查自己ipv4的位址 \n 2.將自己主機的前三個埠號改成自己的ip，打開ubuntu \n 3.開啟lxtermial，putty \n 4.putty/connection/ssh/x11打勾enable x11 fowarding跟輸入localhost:0.0之後open就能連線到虛擬主機 \n 5.帳密都為kmol2020，輸入xterm&打開小白窗 \n 6.進入cd2020pj1先git pull查看有無新版本，在cd docs/cmsimde \n 7.輸入vi wsgi.py，i編輯並將host:改成10.0.2.4在按esc退出:wq儲存 \n 8.輸入python3 wsgi.py啟動，網址是https://自己的ipv4:17443 \n \n 問題1: \n 用putty開啟的小白窗是連接到虛擬主機的，不是連接自己的電腦。 \n \n 問題2: \n 在小白窗不能ctrl+c，那樣會被解讀成關閉網站，要老老實實的打好網址。 \n \n ipv6對外連線 \n \n \n 問題: \n 不小心刪掉虛擬主機裡的cd2020pj1了，應該是失敗了。 \n w14開會 \n \n w15 \n 問題: \n 想要重新做的時候在載入ubuntu時遇到名為E_INVALIDARG (0x80070057)的問題，這時候要到virtualbox的虛擬媒體媒體管理器刪除vdi的檔案 \n \n \n 虛擬主機中coppeliasim模擬 \n 1.virtualbox的設定/網路改成僅限網路介面卡 \n 2.啟動ubuntu後數入密碼kmol2020 \n 3.開啟lxterminal，輸入xterm&開啟小黑窗 \n 4.使用ls查看當下資料夾有甚麼檔案，在依序cd coppeliasim4_rev4/cd CoppeliaSim_Edu_V4_0_0_Ubuntu18_04 \n 5.使用./coppeliaSim.sh開啟 coppeliaSim \n 6.開啟老師的檔案 \n \n 使用putty連接虛擬主機進行小車模擬 \n', 'tags': '', 'url': 'week10~17.html'}, {'title': '分組作業', 'text': 'assignment1 \n assignment2 \n assignment2 \n \n', 'tags': '', 'url': '分組作業.html'}, {'title': 'Assignment1', 'text': 'what do you need to know from\xa0 http://www.coppeliarobotics.com/helpFiles/index.html \xa0 to implement a four-wheeled robot? \n 泡泡龍跟線走 \n pdf檔 \n 首先開啟教程一的 BubbleRob 檔案，下圖是接下來的仿真場景。 \n \n 首先創建三個視覺傳感器的第一個，並拖至泡泡龍本體的下方，選擇[Menu bar --> Add --> Vision sensor --> Orthographic type]，並雙擊對話框將對話框內嵾數修改如下: \n \n 視覺傳感器需面對地面，選擇它，在orientation dialog/orientation tab將數值設定為[180;0;0]。 \n (path edit mode)將視覺傳感器複製並貼上兩次，將名稱改成leftSensor，middleSensor和rightSensor，並將其都拖到泡泡龍本體下。 \n 打開position dialog/position tab,將 left sensor設[0.2;0.042;0.018]， middle sensor設[0.2;0;0.018]，right sensor設[0.2;-0.042;0.018]。 \n 現在修改環境，，移去 BubbleRob 前面的幾個圓柱體，並按[Menu bar --> Add --> Path --> Circle type]在地上加入線，有兩種方法使線形狀改變線路徑 \n 1.點線，crtl加一節點並拖動。 \n 2.點選path edit modle\xa0 即可調整 \n 一旦對路徑線條滿意後，雙擊路徑圖案，將Show orientation of points，Show path line和Show current position on path的打勾取消。然後按下Show path shaping dialog，將Path shaping enabled打勾，將type轉到horizontal segment，再將Scaling factor調整為4，最後將顏色調整為黑色，最後還須對路徑作一重要調整，現在路徑的z位置與地板的z位置重合，者樣會使我們有時看到地板，有時看到路徑，為避免此現象，只需將路徑上移0.5即可。 \n 最後一步是調整BubbleRob的控制器，使其也將遵循黑色路徑。 打開附加到bubbleRob的子腳本，並將其替換為以下代碼： \n ------------------------------ \n function speedChange_callback(ui,id,newVal)\n    speed=minMaxSpeed[1]+(minMaxSpeed[2]-minMaxSpeed[1])*newVal/100\nend\n\nfunction sysCall_init()\n    -- This is executed exactly once, the first time this script is executed\n    bubbleRobBase=sim.getObjectAssociatedWithScript(sim.handle_self)\n    leftMotor=sim.getObjectHandle("leftMotor")\n    rightMotor=sim.getObjectHandle("rightMotor")\n    noseSensor=sim.getObjectHandle("sensingNose")\n    minMaxSpeed={50*math.pi/180,300*math.pi/180}\n    backUntilTime=-1 -- Tells whether bubbleRob is in forward or backward mode\n    floorSensorHandles={-1,-1,-1}\n    floorSensorHandles[1]=sim.getObjectHandle("leftSensor")\n    floorSensorHandles[2]=sim.getObjectHandle("middleSensor")\n    floorSensorHandles[3]=sim.getObjectHandle("rightSensor")\n    -- Create the custom UI:\n        xml = \'<ui title="\'..sim.getObjectName(bubbleRobBase)..\' speed" closeable="false" resizeable="false" activate="false">\'..[[\n        <hslider minimum="0" maximum="100" onchange="speedChange_callback" id="1"/>\n        <label text="" style="* {margin-left: 300px;}"/>\n        </ui>\n        ]]\n    ui=simUI.reate(xml)\n    speed=(minMaxSpeed[1]+minMaxSpeed[2])*0.5\n    simUI.setSliderValue(ui,1,100*(speed-minMaxSpeed[1])/(minMaxSpeed[2]-minMaxSpeed[1]))\nend\n\nfunction sysCall_actuation()\n    result=sim.readProximitySensor(noseSensor)\n    if (result>0) then backUntilTime=sim.getSimulationTime()+4 end\n\n    -- read the line detection sensors:\n    sensorReading={false,false,false}\n    for i=1,3,1 do\n        result,data=sim.readVisionSensor(floorSensorHandles[i])\n        if (result>=0) then\n            sensorReading[i]=(data[11]<0.3) -- data[11] is the average of intensity of the image\n        end\n        print(sensorReading[i])\n    end\n\n    -- compute left and right velocities to follow the detected line:\n    rightV=speed\n    leftV=speed\n    if sensorReading[1] then\n        leftV=0.03*speed\n    end\n    if sensorReading[3] then\n        rightV=0.03*speed\n    end\n    if sensorReading[1] and sensorReading[3] then\n        backUntilTime=sim.getSimulationTime()+2\n    end\n\n    if (backUntilTime<sim.getSimulationTime()) then\n        -- When in forward mode, we simply move forward at the desired speed\n        sim.setJointTargetVelocity(leftMotor,leftV)\n        sim.setJointTargetVelocity(rightMotor,rightV)\n    else\n        -- When in backward mode, we simply backup in a curve at reduced speed\n        sim.setJointTargetVelocity(leftMotor,-speed/2)\n        sim.setJointTargetVelocity(rightMotor,-speed/8)\n    end\nend\n\nfunction sysCall_cleanup()\n\tsimUI.destroy(ui)\nend \n ------------------------------ 現在可以輕鬆地調整視覺感應器的線，選擇一個，按右鍵[Add --> Floating view]然後 在新添加的Floating view跟視覺感應器選起來右鍵[View --> Associate view with selected vision sensor] 最後刪除再教程一的輔助項目，刪除圖像處理視覺傳感器(vision sensor)，該浮動視圖表示障礙物的清除。 通過距 離對話框也刪除距離計算對象。 \n', 'tags': '', 'url': 'Assignment1.html'}, {'title': 'Assignment2', 'text': "topic0 p18~p24 \n 以下各節介紹了每種類型的設計過程的詳細特徵以及相關的上下文。 \n 由工業設計師主導概念設計流程 \n \n 第一階段 (Concept Design-I) ：工業設計師獨立開發產品的概念，而不受其他部門的干擾。 \n 他們主要關注與美學外觀和用戶體驗有關的方面。 他們很少考慮內部零件，這給了他們很多自由。 他們為外部和高質量渲染圖像生成 3D CAD 數據以測試該概念。 最終確定外觀形式後，他們會製作一個“設計模型”（一個無功能的原型）來驗證該概念。 \n \xa0 \n 最後，在“設計評估會議”上選擇最佳設計。此階段的最終結果是外形的 3D CAD 數據和設計模型。 工程設計師在此階段不採取任何行動。通常，他們甚至不知道工業設計師在設計什麼。 \n \xa0 \n 第二階段 (Product Planning) ：產品計劃部門決定所選設計的商業化以及目標市場，設計的目標價格和材料成本。 最後，他們準備了產品計劃文件，並為設計的商業化確定了具體的方向。 \n 第三階段 (Concept Design-E/Shape Modification) ：前一階段的產品規劃文檔以及由工業設計師開發的最終 3D CAD 數據是提供給工程設計師的初始輸入。工程設計人員檢查其設計概念的可行性。 \n 工程設計人員會製作實驗性原型，以測試是否可以通過工業設計的外觀形式實現所需的性能。 \n 由於工業設計人員在定義外觀形式時並未考慮內部零件，因此在將內部零件佈置時必會遇到麻煩。 \n 因此， Concept Design-E 有一個相應的過程：工業設計師的“形狀修改”。工業設計師使用從工程設計師那裡收到的佈局數據來修改外觀形式。此時，兩個目標相互碰撞。 \n 工業設計師嘗試以保留原始形式，而工程設計人員要求進行修改以確保功能和性能。在這個過程中，發生了非常緊密的交互。結果是有關外部形狀和內部零件佈局的 3D CAD 數據。 \n 第四階段 (Detail design\xa0 testing & production/Follow-up) ：從這一階段開始，工程設計師在所有零件中領導該過程。 工程設計人員根據上一階段確定的 3D CAD 數據來決定各個零件的幾何形狀和成分結構。 由於考慮了批量生產或可靠性測試，他們有時會要求工業設計師對外觀設計進行修改。 \n 完成後為了進行詳細設計，我們製作了稱為“工程樣品”的工作原型，以檢查其形式和功能。 在這一點上，工業設計師要評估其外觀設計符合其設計理念的程度。 \n 然後，工程設計師決定供應商，生產模具，並通過多個事件過程測試“生產前原型”，以提高性能的可靠性和產品的耐用性。 \n 另一方面，在“ follow-up ”中，工業設計師決定如何在產品上應用顏色，圖形，材料和表面處理，並為工程設計師提供相關規範。 對於所生產的每種工作原型，工業設計師都要根據規格測試美學和情感品質。 當他們批准後，他們在設計過程中的正式角色便結束了。 除非獲得批准，否則工程設計師應再次生產和測試有問題的零件。 我們發現所有六個公司都具有這種機制來維持產品的設計質量。 \n 類型 1 與傳統觀念相反，傳統觀念認為新產品開發過程是通過市場研究或開發新技術來確定市場需求而開始的。 它始於純粹的工業設計師的完全自由的概念化。 這意味著可以根據工業設計師在腦海中設想的圖片來開發新產品。 這與工程設計準則中描述的產品設計流程不一致（例如，在 Dym ， 1994 年；  Haik ＆ Shahin ， 2010 年；  Pahl 等， 2007 年）中，工業設計人員在概念設計中的作用缺失了。 \n 考慮到相關的理論，即創造力是在以解決方案為導向的方法（ Wynn ＆ Clarkson ， 2005 ）對問題進行徹底分析之前發生的，例如“主要生成器”（ Darke ， 1979 ）和猜想分析模型（ Hillier ）。 ， Musgrove 和 O'Sullivan ， 1972 年）以及 Lawson （ 2006 年）和 March （ 1984 年）的其他相關發現和論點，這將是公司賦予工業設計者自由和自主權以產生創造性解決方案概念的最佳策略。不受外界干擾。實際上，類型 1 在兩種情況下使用：一種是在形狀和功能上開發新概念產品，包括開發新產品類別（如在公司 A 和 E 中），另一種是盡快推出現有產品的新模型（如在公司 C 中）。當有大量參考設計時，後一種情況似乎是可能的，因此，工業設計師可以在交貨時間短時決定產品尺寸和外部元素而無需任何產品規格。 \n 2.2 類型 2 ：由工業設計師領導的組合內外流程 \n 公司使用此過程來開發新型產品或修改現有產品。 在任何一種情況下，與類型 1 不同，產品計劃團隊都將啟動該過程。 我們可以分四個階段來解釋類型 2 ，如下圖所示。 \n \n 第一階段（ Product Planning ）：產品計劃團隊創建產品計劃文件以啟動產品開發。 它設置了目標市場，目標價格和產品規格。 在開發現有產品的修改版本時，它會根據現有產品（包括競爭對手的產品）做出決定。 在開發新產品時，工程設計師會幫助他們做出決定。 此階段的結果是一個產品計劃文檔。 \n \xa0 \n 第二階段（ (Concept Design-I): ）：收到產品計劃部門的產品計劃文件後，工業設計師將決定產品的外觀和相關內部。 他們收集符合產品尺寸和規格的待開發產品所需的功能項目，並從對用戶或設計趨勢的研究中得出形式概念。 然後，他們安排內部零件以決定外觀形式，同時避免內部零件與預期的外部形式之間發生任何衝突。 因此，它們在外形設計和內部零件的佈置之間來回移動。 在此階段，工業設計師和工程設計師之間幾乎沒有互動。 對於最後的事件，設計評估將使用無功能的設計模型進行，因此，此階段的結果是有關產品外觀和初始內部佈局的 3D CAD 數據以及設計模型。 \n \xa0 \n 第三階段（ Concept Design-E/Shape Modification ）：從工業設計師那裡收到 3D CAD 數據後，工程設計師會密切檢查內部零件與外部形狀有關的可行性和可操作性，並製定最終佈局。 工程設計師檢查它們時，經常要求工業設計師修改佈局或外部形式。 因此，工業設計活動要進行相應的過程。 “形狀修改”。但是，形狀更改不如 Type1 重大，因為他們在上一階段決定了與內部部件有關的外部形狀。 此階段的結果是有關最終外觀形式和內部零件確定佈局的 3D CAD 數據。 \n \xa0 \n 第四階段（ Detail design\xa0 testing & production/Follow-up ）：該階段與類型 1 並無顯著差異。 \n 類型 2 的顯著特徵是工業設計師積極參與佈置內部功能組件，同時在第二階段確定外觀形狀。偏重工程設計端。 \n \xa0 \n 2.3 類型 3 ：工程設計師主導的內部優先流程 \n \n Type 3 與 Type 1 和 Type 2 有兩點不同：它們僅用於重新設計現有產品，而工程設計師的活動要先於工業設計師進行。 它要求工程設計師扮演更重要的角色，同時減少工業設計師的角色。 我們解釋它們的特徵如下： \n \xa0 \n 第一階段（ Product Planning ）：如下圖所示，產品計劃團隊首先根據年度產品開發路線圖啟動產品開發項目。 至此，他們在路線圖中確實具有產品的功能概念。 產品規劃專家根據市場上現有的產品確定目標市場，目標價格，產品尺寸和材料成本。 工程設計師經常通過分析競爭對手產品的技術部分並估算材料成本來幫助他們制定產品規格。 此階段的結果是產品計劃文件，其中包括產品規格。 \n 第二階段（ Concept Design-E ）：工程設計師根據產品規格快速制定初步佈局。 他們通常使用以前開發的產品的數據。 完成後，他們將初步佈局作為 3D CAD 數據發送給工業設計師。 這是工業設計過程的起點。 工業設計人員將其用作開發外觀的輸入，而工程設計人員則尋求系統性能的解決方案並繼續完善佈局。 隨著內部佈局和外部形式的同步發展，兩個團隊密切互動並討論分歧或衝突的任何方面，並反復交換反饋以進行修改。 最終，當設計草圖發展為確定的外觀形式時，初步佈局成為確定的佈局。 此階段的結果是確定的佈局，反映了所設計產品的最終尺寸。 \n \xa0 2.5 階段（ Concept Design-I ）：此過程遠非一個獨立的後續階段，而是第二和第三階段之間的中間階段。 因此，我們將其稱為第 2.5 階段。 它從收到工程設計人員的初步佈局開始，並與 Concept Design-E 同時進行。 工業設計師檢查內部佈局並以匹配的外部形式進行覆蓋。 他們進行構思草圖， 3D CAD 建模，渲染，設計評估會議以及模擬選擇活動，以決定外觀模板的設計。 工程設計人員不斷對外觀進行建議和評估。 這樣，通過相互關聯的 Concept Design-I 和 Concept Design-E ，外觀形式和佈局便逐漸發展。 \n \n \n 2.4 第 4 類：工業設計師跟工程設計師協同過程第 4 類不是官方提議，而是各個設計師在早期階段所做的努力。 在許多情況下，參與開發陣容模型的工程設計師往往會拒絕工業設計提出的新穎設計概念。 \n 為了實現這些概念，工業設計師與自由職業者進行合作。因此，此過程可以繼續處理被拒絕的新穎設計概念。 此外，工業設計師和工程設計人員也進行了協同努力。 與傳統的分離方法不同，它們以集成方式處理設計概念，同時考慮了許多設計變量。 此過程的詳細階段如下）： \n \n 第一階段（概念產出）：如上圖所示，工業設計師獨立地構思新設計。 他們大都是根據儘管有創新性但仍未進行項目的設計思想來構建它。 \n 第二階段（概念設計）：此階段始於工業設計師尋找可以與他們合作的工程設計師。 當工程設計師同意加入工業設計師以實施設計概念時，他們將在整個階段中緊密合作。 工程設計師為工業設計師提供了最先進的技術，以增強設計理念。內部佈局的第一級是根據要開發的外部形狀開發的。 該階段的結果是有關外觀和內部佈局的 3D CAD 數據。 \n 第三階段（規劃產品）：產品計劃團隊通過設計評估會議來決定設計的商業化。 然後，產品計劃團隊定義設計的目標市場。 從這個階段開始，負責開發陣容模型的工程設計人員就參與其中。 \n 第四階段（細節設計，測試跟生產 / 追蹤）：該階段的過程與類型 1 、 2 和 3 的過程沒有太大不同。 \n 現有的產品開發環境使工程設計人員趨於保守。消費電子領域的大多數開發項目都是緊迫的。公司通常會在計劃中設定產品發布日。因此，設計人員將按照時間軸執行所有任務和事件。根據訪談數據，參與此類項目的工程設計師傾向於拒絕工業設計師提出的新穎設計概念，因為他們認為他們無法確保其概念的工作能夠在選定的時間內通過性能和可靠性測試 。測試失敗將直接影響公司的產品開發路線圖以及工程設計師評估時的年度績效。 \n 這似乎使他們保守地選擇和評估設計概念。因此，對於直接參與按時間順序進入市場的項目的設計師來說，此過程幾乎不可用。相反，例如，從時間表到市場相對寬鬆的工程師設計人員，那些參與為未來產品開發先進技術的人員，將對新穎的設計理念更加開放。此外，更重要的是，似乎更願意與其他專家合作進行設計的設計師傾向於執行此過程。 \n 對於 D 公司，採用這種工藝的新產品在 Type 4 方面取得了巨大的市場成功。 但是，在我們的採訪中沒有報告更多將這一過程積極應用於後續項目的案例。 儘管如此，有趣的是 D 公司還是從先進技術開發團隊派遣了幾名工程設計師到工業設計團隊的相鄰辦公室。 這啟用了協同處理案例。 高層管理人員故意讓他們動手，以使他們立即為工業設計師提供必要的技術支持，以防止工業設計師提出不切實際的設計概念。 這似乎激發了雙方更加親密，從而營造了合作的氣氛。 這將增加新興的集成設計流程的可能性。 \n", 'tags': '', 'url': 'Assignment2.html'}, {'title': 'Assignment3', 'text': '範例一 : 使馬達每轉的脈衝數透過正交增加。 \n 負載是一小磁盤，要對它的位置進行速度控制，磁盤的直徑等於0.06 m，質量等於0.050 Kg。 \n \n L293D:  雙  H  橋直流馬達驅動  IC \n dsPIC30F4011:某種晶片 \n voltage regulator: 穩壓器 \n \n 於第一實驗求得增益 k ，然後使用該增益來計算可用於計算恆定時間τ的穩態值。 \n 要設計一個控制器，我們要指定其功能。 \n 對於瞬態，我們希望負載的穩定時間小於 5% 或等於 3 τ / 5 ，而過衝則小於或等於 5 ％。 \n 也可以直接在離散時間內進行所有設計。 在本示例的其餘部分中，我們將選擇此方法。 \n \n 根據系統傳遞函數的表達式以及所需的性能，我們至少需要一個比例積分器（ PI ）控制器。該控制器的傳遞函數由下式給出： \n \n 其中 KP 和 KI 是要確定的數值，以迫使負載具有我們施加的性能。 \n 使用零階保持 (Zero-order hold)和Z -transform表，我們得到： \n \n 對於控制器，使用梯形離散化，我們得到： \n \n 將分子和分母除以 z 並回到時間，我們得到： \n \n 結合執行器及其負載和控制器之一的傳遞函數，我們得到以下閉環傳遞函數： \n 現在使用期望的性能，很容易得出結論，主導極點是 \n \n 其中ζ和ω n 分別代表我們系統控制閉環的阻尼比和固有頻率。 根據控制理論，眾所周知，過衝 d ％和 5 ％的建立時間 ts 由下式給出： \n \n 使用我們的表演和這些表達，我們得出以下結論： \n \n 它具有以下主要優勢： \n s1,2 = −78.2216 ± 78.2452 j \n 使用 Z 等於 e 的 ts 次方並使用 t= τ /10=0.0064 ，我們在 Z 域中獲得以下主導極點： \n z1,2 = 0.5317 ± 0.2910 j \n 對於這些極點，我們具有以下特徵方程式： \n \n 現在使用極點代入，我們得到： \n 1 + C(z)G(z) = Δd \n 這意味著： \n \n 使用 K ， T 和τ的值，我們得到增益 KP 和 KI 的以下表達式： \n KP = 0.1480 \n KI = 10.1951 \n 備註 11.2.1 在這種情況下，必須謹慎，因為我們不在乎傳遞函數零的位置，因此在實現此控制器時可能會有些意外。 顯然，我們將獲得的性能（穩定時間和超調）將取決於零的位置。有關此問題的更多詳細信息，請向讀者介紹 Boukas \n 為了實現此 PI 控制算法並確保所需的性能，我們將使用 Microship1 的微控制器。 這種選擇是由於我們在此類微控制器方面的經驗所致。 讀者可以記住，其他製造商的其他任何微控制器都可以做些小改動。 在本示例中，我們將使用 Microhip 的單片機 dsPIC30F4011 。 \n 我們實現的代碼使用 C 語言編寫。 採用這種語言是因為其簡單性。 該實現具有以下結構： \n //\n// Put here the include\n//\n#include "p30F4011.h" // proc specific header\n// Define a struct\n//\ntypedef struct {\n// PI Gains\nfloat K_P; // Propotional gain\nfloat K_I; // Integral gain\n//\n// PI Constants\n//\nfloat Const1_pid; // KP + T KI/2\nfloat Const2_pid; // -KP + T KI/2\nfloat Reference; // speed reference\n//\n// System variables\n//\nfloat y_k; // y_m[k] -> measured output at time k\nfloat u_k; // u[k] -> output at time k\nfloat e_k; // e[k] -> error at time k\n//\n// System past variables\n//\nfloat u_prec; // u[k-1] -> output at time k-1\nfloat e_prec; // e[k-1] -> error at time k-1\n}PIStruct;\nPIStruct thePI;\nthePI.Const1= thePI.K_P+T*thePI.K_I/2;\nthePI.Const2=-thePI.K_P+T*thePI.K_I/2;\nthePI.Reference=600;\n//\n// Functions\n//\nfloat ReadSpeed(void);\nfloat ComputeControl(void);\nfloat SendControl(void);\n//\n// Interrupt program here using Timer 1 (overflow of counter Timer 1)\n//\nvoid __ISR _T1Interrupt(void) // interrupt routine code\n{\n// Interrupt Service Routine code goes here\nfloat Position_error;\n//\n// Read speed\n//\nthePI.y_m=ReadSpeed();\nthePI.e_k= thePI.Reference-thePI.y_m;\n//\n// Compute the control\n//\nComputeContrl();\n//\n// Send control\n//\nSendControl();\nIFS0bits.T1IF=0; // Disable the interrupt\n}\nint main ( void ) // start of main application code\n{\n// Application code goes here\nint i;\n// Initialize the variables Reference and ThePID.y_m (it can be read\nfrom inputs) Reference = 0x8000; // Hexadecimal number\n(0b... Binary number) ThePID = 0x8000;\n// Initialize the registers\nTRISC=0x9fff; // RC13 and RC14 (pins 15 and 16) are configured as outputs\nIEC0bits.T1IE=1; // Enable the interrupt on Timer 1\n// Indefinite loop\nwhile (1)\n{\n}\nreturn 0\n}\n% ReadSpeed function\nint ReadSpeed (void)\n{\n}\n% ComputeControl function\nint ComputeControl (void)\n{\nthePI.u_k=thePI.u_prec+thePI.Const1*thePI.e_k+thePI.Const2*thePI.e_prec;\n}\n% SendControl function\nint Send Control (void)\n{\nsendControl()\n//\n// Update past data\n//\nthePI.u_prec=thePI.u_k;\nThePI.e_prec=thePI.e_k;\n}\n \n 從該結構可以看出，首先我們注意到系統將進入循環，並在每次中斷時調用函數： \n \n  ReadSpeed; \n  ComputeControl; \n  SendControl; \n \n 並採取適當的措施。 \n ReadSpeed 函數在每個採樣時間返回加載速度，該速度將由 ComputeControl 函數使用。  SendControl 功能通過 L293D 芯片將適當的電壓發送到執行器。 \n 使用編譯器 HighTec C 獲取十六進制代碼，並使用 PicKit-2 將文件上傳到微控制器的內存中。 有關如何獲取十六進制代碼的更多詳細信息，我們邀請讀者閱讀編譯器 HighTec C 或 Microchip 的編譯器 C30 的手冊。 \n 但是這種情況是不實用的 \n Position Control of the dc Motor Kit \n 我們專注於負載位置控制。 遵循與上一節中開發的負載速度控制類似的步驟，我們首先需要選擇我們希望系統具有的理想性能。 進行以下表演： \n 系統穩定在閉環狀態； \n 建立時間 ts 為 2 ％等於我們可以擁有的最佳時間 \n Overshoot( 過衝 ) 等於 5 ％ \n 穩態  (Steady state) 等於 0 在功能輸入時 \n 使用性能和傳遞函數，很容易得出結論，比例控制器 KP 足以滿足這些性能。 \n 在此示例中，我們將使用連續時間方法進行控制器的設計。 在上一章的基礎上，我們的系統模型如下： \n \n 其中 K 和τ取與速度控制相同的值。 讓傳輸控制器由以下方式給出： \n C(s) = KP \n 使用這些表達式，閉環傳遞函數由下式給出： \n \n 由於系統類型為 1 ，因此使用比例控制器輸入的階躍函數的誤差等於零。 \n 根據規範，得出以下複雜的極點： \n \n 將完成這項工作，相應的特徵方程式如下： \n \n 與閉環系統之一等效，我們得到： \n \n 為了確定最佳穩定時間 ts 為 2 ％，請注意，我們有： \n Ts = 4/ ζ wn \n 現在是 \n ζ Wn = 1/2τ \n 我們獲得： \n 因此，使用此控制器可以在％ 2 處獲得的最佳建立時間是系統恆定時間的 8 倍。 小於可獲得的任何值。 實際上，如果我們在改變 KP 時關注閉環系統的根源，這是微不足道的。 這由下圖給出。 為了固定控制器的增益，所需極點 s1,2 = -7.5 ± j ，我們使用該圖並選擇一個ζ = 0.707 。 得出 KP = 0.1471 。 \n \xa0 \n 使用該控制器，幅度等於 30 度的階躍函數的時間響應由下表示，從中我們可以得出結論，所設計的控制器以％ 2 的穩定時間等於 0.5115 s 滿足了所有期望的性能。 但是，如果我們實現此控制器，則實際情況將與仿真有所不同，因為變速箱的齒隙並未包含在所使用的模型中，因此實時結果將有所不同，誤差永遠不會為零。 為了克服這個問題，我們可以使用比例和微分控制器，它可以在％ 2 處提供更好的建立時間。 讓該控制器的傳遞函數由下式給出： \n C(s) = KP + KD s \n 備註11.3.1必須注意，比例和微分控制器的使用將在閉環傳遞中引入零，如果放置得當，則可以縮短建立時間。 根據其位置，過沖和建立時間將受到影響。 有關此問題的更多詳細信息 \n \n 使用該控制器，閉環傳遞函數由下式給出： \n \n 在這種情況下，我們有兩個未知變量 KP 和 KD 以及兩個唯一確定增益的代數方程。 它們的表達式如下： \n \n 現在，使用期望的性能，我們得出與之前類似的結論，即等於等於 30 度的幅度階躍函數的輸入的穩態誤差等於零，並且與過衝等於％ 5 的阻尼比ζ等於  0.707 。 我們可以將其固定為系統時間常數的一部分的穩定時間 ts 在％ 2 處給出： \n \n 現在，如果將穩定時間固定為 3 τ，我們將得到： \n Wn = 29.4985 \n 使用這些值，我們可以得到以下控制器增益值： \n Kp = 1.1374 \n Kd = 0.0545. \n 它給出了以下複雜的極點： \n s1,2 = −28.6763 ± 6.9163 j. \n 零為： \n z = −20.8618. \n 使用該控制器，幅度等於 30 度的輸入的時間響應如圖 11.5 所示。 從該圖可以看出，過沖和建立時間少於使用比例控制器獲得的過沖和建立時間。 \n 要實現比例控制器或比例控制器和微分控制器，我們需要獲得控制律的遞推方程。 為此，我們需要使用前面介紹的不同方法離散化控制器的傳遞函數。 \n 讓我們使用梯形方法替換 s 成 2/t*z-1/z+1 ，這給出了 : \n C （ z ） = Kp 對於比例控制器 \n C(z) = KP + KD 2/t*z-1/z+1 用於比例和微分控制器 \n 如果我們通過控制分別表示 u （ k ）和 e （ k ）以及在瞬時 kT 處參考和輸出之間的誤差，我們將得到以下表達式： \n 1. 比例 \n \n \n 2.用於比例和微分控制器 \n \n %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\n% Main program %\n%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%\nmain\n% Data\n% Variables\n% While loop\nwhile (1)\ndo\nReadSpeed;\nComputeControl;\nSendControl;\nend;\n% ReadSpeed function\n% ComputeControl function\n% SendControl function\n \n 現在讓我們使用此示例的狀態空間表示，並設計一個狀態反饋控制器，以保證所需的性能。 對於這種情況，我們將首先假設完全訪問狀態，其次通過假設我們只能訪問該職位來放寬此假設。 像我們之前所做的那樣，我們可以連續進行，也可以不連續進行。 \n 先前我們建立了該系統的狀態空間描述，其描述為： \n \n 其中 x （ t ）∈ R2 （ x1 （ t ） =θ （ t ）和 x2 （ t ） =θ̇ （ t ））， u （ t ）∈ R （施加電壓）。 \n 從穩定時間為％ 2 等於 3 τ的期望性能中，我們得到與以前相同的主導極點，因此具有相同的特性方程式， \n \n 使用控制器表達式，閉環特性方程由下式給出： \n det (sI − A + BK) = 0 \n 通過均衡這兩個方程式，我們可以得到以下收益： \n K1 = 1.1146 \n K2 = 0.0326 \n 使用該控制器，幅度等於 30 度的輸入的時間響應如下圖 11-6 所示。 從該圖可以看出，超調和建立時間就是我們想要的。 重要的是要注意穩態狀態下錯誤的存在。 如果在循環中添加一個積分動作，則可以消除此錯誤。 \n 對於第二種情況，由於我們無法獲得負載速度，因此我們可以從位置計算負載速度，也可以使用觀察者來估算系統狀態。 如前所述，我們用於觀察者設計的極點應該比控制器設計中使用的極點更快。 \n 選擇以下極點（s1,2，為控制器設計中所用實數的四倍）： \n \n \n 根據觀察 : \n L1 = 151.2 \n L2 = 5029.4 \n 控制器的增益與對狀態向量的完全情況相同。 \n 在下面的 Matlab 中，我們同時提供控制器和觀察者的設計，並進行仿真，以顯示系統和觀察者的狀態相對於時間的行為。 \n clear all \n %data \n tau=0.064 \n k=48.9 \n A = [0 1;0 -1/tau]; \n B = [0 ; k/tau]; \n C = [1 0]; \n D = 0; \n % controller design \n K = acker(A,B,[-3+3*j -3-3*j]); \n L = acker(A’,C’,[-12+3*j -12-3*j])’; \n % Simualation data \n Ts = 0.01; \n x0 = [1 ; 1]; \n z0 = [1.1 ; 0.9]; \n Tf = 2; %final time \n %augmented system \n Ah = [A -B*K; \n L*C A-B*K-L*C]; \n Bh = zeros(size(Ah,1),1); \n Ch = [C D*K]; \n Dh = zeros(size(Ch,1),1); \n xh0 = [x0 ; z0]; \n t=0:Ts:Tf; \n u = zeros(size(t)); \n m = ss(Ah,Bh,Ch,Dh); \n %simulation \n [y,t,x] = lsim(m,u,t,xh0); \n %plotting \n figure; \n plot(t,y); \n title(’Output’); \n xlabel(’Time in sec’) \n ylabel(’Output’) \n grid \n figure; \n plot(t,x(:,1:size(A,1))); \n title(’States of the system’); \n xlabel(’Time in sec’) \n ylabel(’System states’) \n grid \n figure; \n plot(t,x(:,size(A,1)+1:end)); \n title(’states of the observer’); \n xlabel(’Time in sec’) \n ylabel(’Observer states’) \n grid \n \n 我們還可以使用線性二次調節器設計狀態反饋控制器。 實際上，如果我們為成本函數選擇以下矩陣： \n \n 使用這些矩陣和 Matlab 函數 lqr ，我們得到： \n K = [0.3162 0.6875] \n 我們還可以使用魯棒控制部分的結果設計狀態反饋控制器。 由於系統沒有不確定性，也沒有外部干擾，所以我們可以為名義動態設計一個狀態反饋控制器。 使用系統數據和 Maltlab ，我們得到： \n \n \n 給出了相應的控制器增益： \n K =[−0.0017 0.0193 ] \n 備註11.3.3由於我們有直流電動機套件的連續時間模型，因此我們用它來設計控制器增益。 在這種情況下，我們解決了以下LMI： \n \n 增益 K 由下式給出： \n', 'tags': '', 'url': 'Assignment3.html'}]};