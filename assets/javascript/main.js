import handleLogin from './handleLogin.js'
import handleUser from './handleUser.js'
import renderContent from './renderContent.js'
import renderHeader from './renderHeader.js'
import renderHome from './renderHome.js'
import search from './search.js'
;(() => {
	const data = [
		{
			id: 0,
			name: 'Bóng đá',
			banner: './assets/images/home/banner1.png',
			post: [
				{
					title: `Ten Hag muốn "trò cưng" về MU đá cặp Ronaldo: Máy ghi bàn "ăn đứt" Harry Kane`,
					subTitle: `HLV Erik Ten Hag đang lên kế hoạch đưa tiền đạo Sebastien Haller tới Man United cùng mình khi mùa giải năm nay khép lại.`,
					image: './assets/images/soccers/img1.jpg',
					content: `Bổ sung thêm các tân binh chất lượng chính là mục tiêu hàng đầu của MU ở kỳ chuyển nhượng mùa hè năm nay. Với việc "Quỷ đỏ" bị cho là vừa thiếu vừa yếu ở nhiều tuyến, tân HLV Ten Hag sẽ phải nhanh chóng mang về những ngôi sao mà ông đã có cơ hội được theo dõi từ trước và Haller chính là cái tên được nhà cầm quân này đặt niềm tin.
                    <br><br>Trên hàng công của MU lúc này, Edinson Cavani mới chỉ đá chính 6 trận tại Premier League và gần như sẽ ra đi khi hợp đồng đáo hạn trong mùa hè tới. Anthony Martial và Mason Greenwood có thể sẽ không còn cơ hội khoác áo MU thêm lần nào nữa, trong khi Marcus Rashford đang sa sút thảm hại với chỉ 4 bàn trong 24 lần ra sân. 
                    <br><br>Việc hàng công MU có quá nhiều vấn đề sẽ khiến HLV Ten Hag phải đau đầu trong việc sử dụng siêu sao Cristiano Ronaldo. Vốn là một cầu thủ đã ở bên kia sườn dốc sự nghiệp nhưng bản năng săn bàn cùng đẳng cấp không thể chối cãi của CR7 sẽ vẫn là "vũ khí" lợi hại mà Ten Hag có thể tin tưởng.
                    <br><br>Bởi vậy, cuộc tái hợp với Haller của HLV Ten Hag hứa hẹn tạo nên hàng công đầy sức mạnh cho MU với cặp Ronaldo - Haller. Nên nhớ, không chiến chính là điểm mạnh của Haller khi anh cao tới 1m9. Đó sẽ là cơ hội để MU tạo ra sự khác biệt trong những tình huống tạt bóng vào phía trong cho bộ đôi tiền đạo của mình.
                    <br><br>Trong quá khứ, Haller từng khoác áo West Ham nhưng chơi không mấy nổi bật khi phải dự bị cho Michail Antonio. Ajax đã cứu rỗi sự nghiệp của ngôi sao người Bờ Biển Ngà khi mang anh về hồi tháng 1/2021 với mức giá chỉ 18,8 triệu bảng. 

                    <br><br>Bản hợp đồng tưởng như chỉ để "chữa cháy" của Ajax bỗng phát huy hiệu quả khủng khiếp khi Haller nhanh chóng cho thấy khả năng ghi bàn ấn tượng với 31 lần lập công sau 46 trận giải VĐQG Hà Lan. Sự sung mãn của Haller là điều cần thiết với MU vào lúc này khi đội chủ sân Old Trafford đang quá rệu rã với những thất bại ở mùa giải năm nay.

                    <br><br>Nếu MU chiêu mộ thành công Haller, họ sẽ từ bỏ thương vụ mua Harry Kane của Tottenham. Nên nhớ, MU chỉ cần bỏ ra khoản phí khoảng 35 triệu bảng để thuyết phục Ajax nhả Haller nhưng với Kane, "Quỷ đỏ" sẽ phải chồng đủ 100 triệu bảng.

                    <br><br>Haller không phải ngôi sao Ajax duy nhất được HLV Ten Hag tính tới để mang về đội bóng mới MU. Trước đó, tiền đạo chạy cánh phải Antony và hậu vệ trẻ đa năng Jurrien Timber cũng nằm trong danh sách mong muốn của Ten Hag cho triều đại mới tại Old Trafford.`
				},
				{
					title: `Benzema: 'Real sẽ thắng Man City ở lượt về'`,
					subTitle: `ANHTiền đạo chủ lực của Real Karim Benzema tự tin sẽ đánh bại Man City ở bán kết lượt về để vào chung kết Champions League.`,
					image: './assets/images/soccers/img2.jpg',
					content: `"Một trận thua không bao giờ là kết quả tốt, bởi chúng tôi đặt tham vọng vô địch Champions League. Điều quan trọng nhất là Real không bao giờ bỏ cuộc, luôn chiến đấu đến những giây cuối cùng", Benzema nói sau thất bại 3-4 tại sân Etihad ngày 26/4. "Bây giờ chúng tôi sẽ trở lại Bernabeu và cần người hâm mộ hơn bao giờ hết. Real sẽ làm được điều kỳ diệu, đó là chiến thắng".
                    <br><br>Benzema tiếp tục tỏa sáng trong lần thứ 600 khoác áo Real. Phút 33 anh xoay người dứt điểm một chạm rút ngắn cách biệt còn 1-2. Đến phút 82, lại là anh đá penalty để thu hẹp khoảng cách xuống còn một bàn cho Real. Bàn còn lại của đội khách được ghi bởi Vinicius.
                    <br><br>Với cú hat-trick vào lưới Chelsea và cú đúp khi làm khách trên sân Man City hôm qua, Benzema trở thành cầu thủ đầu tiên ghi năm bàn trên sân khách ở vòng đấu loại trực tiếp trong một mùa Champions League, khi gặp các CLB đến từ cùng một quốc gia. Benzema cũng cán mốc 41 bàn qua 41 trận trên mọi đấu trường mùa này. Trong đó, anh dẫn đầu danh sách Vua phá lưới ở cả La Liga lẫn Champions League, với lần lượt 25 và 14 bàn. Tiền đạo người Pháp cũng trở thành cầu thủ Real thứ năm ghi ít nhất 40 bàn trong một mùa, sau Cristiano Ronaldo, Ferenc Puskas, Alfredo Di Stefano và Hugo Sanchez. Cầu thủ Real gần nhất cán mốc này là Ronaldo, với 44 bàn ở mùa 2017-2018.
                    <br><br> Dù vậy, Benzema cũng có những điều chưa hài lòng về lối chơi của Real, nhất là cách nhập cuộc. Trong 11 phút, họ để Man City chọc thủng lưới hai bàn. Anh khẳng định: "Nếu nhập cuộc thiếu tự tin, bạn sẽ nhận kết quả như vậy hay thậm chí tệ hơn trước đối thủ mạnh như Man City. Real thiếu mọi thứ, từ việc gây áp lực, tự tin đến tâm lý thi đấu. Chúng tôi mất 20 phút để bắt nhịp, trong khi có thể đá tốt cả 90 phút".
                    <br><br> Trước chuyến sang Anh, Benzema đá hỏng liền hai quả phạt đền khi Real thắng Osasuna 3-1 tại La Liga. Cả hai lần đó, tiền đạo 34 tuổi đều sút chìm về góc trái và bị thủ thành của Osasuna cản phá. Vì thế, anh trở thành cầu thủ Real sút hỏng nhiều quả phạt đền nhất trong một mùa La Liga kể từ 2005-2006 (bốn lần). Nhưng hôm qua, Benzema vẫn lĩnh trọng trách khi Real hưởng phạt đền, sau khi hậu vệ Man City Aymeric Laporte để bóng chạm tay trong vòng cấm cuối hiệp hai.
                    <br><br> Lần này, anh thành công khi sút kiểu Panenka vào giữa khung thành, trong khi thủ thành Ederson đổ về bên phải. Benzema cho hay: "Tôi luôn nhủ rằng nếu không nhận trách nhiệm đá phạt đền, bạn không thể đá hỏng được. Quan trọng nhất là sự tự tin về mặt tinh thần, và tôi rất tự tin vào bản thân. Vì vậy, tôi đá kiểu Panenka và thành công".`
				},
				{
					title: `Klopp mượn Juventus, Bayern cảnh báo Liverpool`,
					subTitle: `ANHHLV Jurgen Klopp nhắc lại việc Villarreal loại Juventus, Bayern để cảnh báo Liverpool trước trận bán kết lượt đi Champions League hôm nay 27/4.`,
					image: './assets/images/soccers/img3.jpg',
					content: `Villarreal là bất ngờ lớn nhất tại Champions League năm nay. Ở tứ kết, họ thắng Bayern 1-0 trên sân nhà, rồi hòa 1-1 ở trận lượt về trên sân Allianz để đi tiếp với tổng tỷ số 2-1. Trước đó, đại diện La Liga còn gây ấn tượng mạnh hơn khi hạ Juventus 4-1 ở vòng 1/8. Khi đó, Villarreal hòa 1-1 tại El Madrigal, nhưng bất ngờ thắng tưng bừng 3-0 khi tái đấu trên đất Italy.
                    <br><br>Lần thứ hai Villarreal vào bán kết Champions League, sau lần đầu mùa 2005-2006. Khi ấy, họ thua Arsenal 0-1 và lỡ cơ hội vào chung kết. HLV Unai Emery mới lần đầu tiến sâu đến vậy tại Champions League, dù từng bốn lần lên ngôi tại Europa League. Mùa trước, HLV Tây Ban Nha giúp "Tàu ngầm vàng" dự Champions League qua đường vô địch Europa League, khi họ chỉ đứng thứ bảy La Liga.                    
                    <br><br>Klopp ca ngợi đối thủ: "Villarreal đang đứng thứ bảy La Liga. Xen giữa hai trận gặp Bayern ở tứ kết, họ hòa Bilbao. La Liga rõ ràng là giải đấu cạnh tranh và rất khó để thành công, nhưng Emery cho thấy ông ấy lên kế hoạch tỉ mỉ cho từng trận. Chúng tôi phân tích lối chơi của Villarreal, và thấy họ pressing theo nhiều cách, và phản ứng tùy vào kết quả. Emery là HLV đẳng cấp thế giới và đang làm một công việc đáng kinh ngạc".                    
                    <br><br>Liverpool đant khát vô địch Champions League sau vinh quang mùa 2018-2019. Trong hành trình vô địch ba năm trước, đoàn quân của Klopp ngược dòng khó tin trước Barca ở bán kết. Thua 0-3 ở lượt đi, nhưng khi đá lượt về tại Anfield, họ đè bẹp Barca 4-0 để vào chung kết Champions League năm thứ hai liên tiếp.
                    <br><br>Klopp muốn người hâm mộ tại Anfield hôm nay tạo bầu không khí tương tự với đêm đáng nhớ năm 2019. "Chúng tôi cần bầu không khí tương tự trên khán đài và màn trình diễn đỉnh cao trên sân", HLV Đức nhấn mạnh. "Tôi và các học trò cần đạt phong độ cao nhất. Nếu bạn trải qua trận bán kết Champions League dễ dàng, thì chắc chắn có điều gì đó không ổn. Tôi nóng lòng bước vào trận tới".

                    <br><br>Liverpool cần vượt qua Villarreal để nuôi tham vọng ăn bốn mùa này. Đoàn quân của Klopp đã đoạt Cup Liên đoàn Anh, đang đua vô địch Ngoại hạng Anh với Man City, và sẽ đá chung kết Cup FA với Chelsea ngày 14/5 tại Wembley.`
				},
				{
					title: `Liverpool hạ Villarreal, báo chí bình luận đội nào vào chung kết Cup C1?`,
					subTitle: `Báo chí Anh ca ngợi Liverpool sau chiến thắng trước Villarreal ở lượt đi bán kết Champions League.`,
					image: './assets/images/soccers/img4.jpg',
					content: `
                    Rạng sáng 28/4 (theo giờ Việt Nam) đã diễn ra trận lượt đi bán kết Champions League còn lại giữa Liverpool và Villarreal. Sau 45 phút đầu tiên bế tắc, Liverpool đã ghi liền 2 bàn trong hiệp 2 để tạo ra lợi thế không nhỏ trước trận lượt về trên đất Tây Ban Nha.
                    Sau trận đấu, tờ Daily Mail (Anh) chạy dòng tít dài: “Liverpool giành lợi thế lớn ở bán kết Champions League sau màn trình diễn vượt trội trước Villarreal của Unai Emery…”.

                    <br><br>Tờ báo này nhận xét: “Villarreal đã phòng ngự xuất sắc trong hiệp 1. Phải mất một khoảng thời gian khá nhiều cộng thêm may mắn cho Liverpool mới có thể ghi bàn và như thường lệ, với những pha lật kèo sau đó họ đã tận dụng được lợi thế hơn nữa.

                    <br><br>Nếu có nhược điểm trong chiến thắng này của Liverpool thì đó là 2 bàn thắng trong 35 phút còn lại, họ đã không ghi thêm được bàn nào. Nếu Liverpool ghi 4 bàn, thì họ đã có thể cho các cầu thủ nghỉ ngơi trong trận lượt về”.

                    <br><br>Một tờ báo khác của Anh là The Sun có bài viết với tiêu đề: “Liverpool đặt một chân vào chung kết Champions League khi nhanh chóng giải quyết sự phản kháng khó chịu của đội khách”. Tác giả thậm chí tự tin nhận định: “Liverpool chắc chắn sẽ có mặt tại Paris vào ngày 28 tháng 5 để đối mặt với Man City hoặc Real Madrid.

                    <br><br>Đội bóng của Jurgen Klopp đang tiến gần tới cú ăn 4. Man City chắc chắn là đội duy nhất có thể ngăn chặn điều đó - ở Premier League hoặc ở châu Âu - vì đội Liverpool xuất sắc không ngừng này chắc chắn sẽ áp đảo đội bóng vĩ đại Real Madrid nếu họ giành vé tới Stade de France vào tháng tới”.

                    <br><br>Trong khi đó, tờ Marca của Tây Ban Nha thừa nhận: “Liverpool quá mạnh”. Còn tờ Mundo Deportivo bày tỏ sự lạc quan: “Villarreal bị đánh bại ở Anfield nhưng vẫn còn hy vọng”. Tác giả vẫn tin rằng thầy trò HLV Unai Emery có thể lội ngược dòng khi được chơi trên sân nhà La Ceramica trong trận bán kết lượt về.

`
				},
				{
					title: `Tuchel: "Đối thủ hưởng lợi nhờ tai họa của Chelsea"`,
					subTitle: `Theo HLV Thomas Tuchel, Chelsea đối mặt mùa hè 2022 bất trắc khi nhiều ngôi sao được các đối thủ tiếp cận và có thể rời CLB.`,
					image: './assets/images/soccers/img5.jpg',
					content: `
                    "Sự ổn định của Chelsea đang bị thách thức", HLV Tuchel nói trong cuộc họp báo trước trận gặp Man Utd ở vòng 37 Ngoại hạng Anh tối nay. "Đây là lần đầu Chelsea đối mặt khó khăn lớn như vậy. Chúng tôi đều cam kết cống hiến, thể hiện đam mê trên sân. Nhưng rõ ràng chúng tôi không thể cạnh tranh trong cả mùa giải, mà chỉ vài giai đoạn. Chúng tôi nhận thức được tình hình có thể phức tạp vào mùa hè. Chúng tôi có thể mất hai trong ba hậu vệ đá chính. Các đối thủ đang hưởng lợi từ sự cố của Chelsea".
                    <br><br>Hậu vệ Antonio Rudiger được cho là đã đạt thỏa thuận gia nhập Real dưới dạng tự do sau mùa này. Andreas Christiansen thì đang đàm phán với Barca. Hợp đồng của hậu vệ Đan Mạch kết thúc vào tháng 6 và Chelsea không thể gia hạn do các hạn chế về tài chính. Đội trưởng Cesar Azpilicueta cùng hai tiền vệ Charly Musonda, Saul Niguez cũng sẽ ra đi sau khi các thỏa thuận hết hạn.

                    <br><br>Do lệnh cấm của Chính phủ Anh, Chelsea không được mua, bán và gia hạn với các cầu thủ. Theo ESPN, có ba người đang muốn mua lại Chelsea. Họ sẽ cùng trình bày kế hoạch để Ban lãnh đạo Chelsea lựa chọn một người. Chelsea sau đó thông qua Ngoại hạng Anh để trình kế hoạch lên Bộ Văn hóa, Truyền thông và Thể thao Anh phê duyệt. Quá trình này có thể kéo dài nhiều tuần, khiến Chelsea chưa thể tiếp xúc các mục tiêu chuyển nhượng, hoặc đàm phán giữ chân cầu thủ.

                    <br><br>"Chúng tôi không thể làm cách nào để ngăn cầu thủ ra đi", HLV Tuchel thừa nhận. "Tôi không biết việc Chelsea bị rao bán sẽ có tác động tích cực đến việc đàm phán với các cầu thủ hay không. Tôi không muốn dự đoán gì, vì như thế đội bóng sẽ mất tập trung thi đấu. Tôi cũng không chắc việc có ông chủ mới sẽ giúp mọi thứ tốt hơn trong kỳ chuyển nhượng hè. Tôi chỉ tin vào tinh thần chiến đấu của Chelsea, thứ có sẵn trong văn hóa của đội hàng thập kỷ qua".

                    <br><br>Man Utd, đối thủ của Chelsea hôm nay, được cho là sẽ cải tổ mạnh mẽ đội hình khi thị trưởng chuyển nhượng hè mở cửa. HLV Ralf Rangnick đầu tuần này ví cuộc cải tổ như "ca phẫu thuật tim" của Man Utd. Khi được hỏi về điều này, HLV Tuchel nói: "Có lẽ với chúng tôi đó là ca phẫu thuật thẩm mỹ. Tôi sẽ đỡ lo hơn nếu Chelsea cũng có ông chủ và cấu trúc như Man Utd. Tôi không biết phẫu thuật có phải từ ngữ thích hợp không. Nhưng tôi muốn suy nghĩ tích cực khi đề cập tới ảnh hưởng của nó đến Chelsea".

                    <br><br>Đối mặt khó khăn nhưng thầy trò HLV Tuchel vẫn duy trì vị trí trong top 4 Ngoại hạng Anh và có cơ hội đoạt FA Cup ở chung kết với Liverpool vào 14/5.
`
				}
			]
		},
		{
			id: 1,
			name: 'Đua xe',
			banner: './assets/images/home/banner2.jpg',
			post: [
				{
					title: `Ferrari thắng lớn ở Bahrain GP`,
					subTitle: `Ferrari thành công trên đường đua Sakhir khi Charles Leclerc và Carlos Sainz lần lượt chia sẻ hai vị trí đầu tiên, còn Max Verstappen phải bỏ cuộc hôm 20/3.`,
					image: './assets/images/racings/img1.jpg',
					content: `Red Bull còn gặp thảm hoạ ở những vòng cuối, khi hệ thống động cơ xe RB18 gặp vấn đề khiến Verstappen và Sergio Perez lần lượt phải bỏ cuộc. Điều này giúp hai chiếc F1-75 của Ferrari thong dong về đích đầu tiên. Đây là lần đầu hai chiếc Ferrari về đích đầu tiên, kể từ chặng Singapore năm 2019.

                    <br><br>"Tuyệt vời quá", Leclerc hét lên qua bộ đàm ngay sau khi về đích. "Đây mới là cách chúng ta nên khởi đầu mùa giải chứ. P1 và P2 đấy các anh ơi. Cố lên".

                    <br><br>Do hai tay đua Red Bull phải bỏ cuộc, Lewis Hamilton kịp leo lên podium. Đồng đội của anh ở Mercedes là George Russell về thứ tư. Kevin Magnussen ghi những điểm đầu tiên cho Haas kể từ năm 2020, khi về thứ năm. Các vị trí còn lại trong nhóm có điểm lần lượt thuộc về Valtteri Bottas, Esteban Ocon, Yuki Tsunoda, Fernando Alonso và tân binh Trung Quốc Zhou Guanyu (Chu Quan Vũ).

                    <br><br>Người hâm mộ đã lo ngại phong cách "máu chiến" của Leclerc và Verstappen sẽ khiến màn xuất phát có va chạm, nhưng điều đó không xảy ra. Leclerc chọn làn trong khi vào Turn 1 tốc độ thấp, và bảo vệ vị trí dẫn đầu.

                    <br><br>Kịch tính lại đến từ nhóm sau, khi Lewis Hamilton và Kevin Magnussen vượt qua Sergio Perez. Russell cũng tiến hai bậc để lên P7, còn Valtteri Bottas lại xuất phát không tốt và tụt vài bậc. Mick Schumacher va chạm với Esteban Ocon khiến chiếc VF-22 bị xoay một vòng, nhưng con trai của huyền thoại Michael Schumacher vẫn bám chắc trên đường đua. Ở nhóm cuối hai tay đua McLaren Lando Norris và Daniel Ricciardo tụt lại phía sau.

                    <br><br>Cuộc chiến ở nhóm đầu không có nhiều biến động, nhưng sau 11 vòng đua, Leclerc đã tạo khoảng cách 3,1 giây với Verstappen. "Lốp xe tôi không có độ ma sát", tay đua Hà Lan nói qua bộ đàm.

                    <br><br>Sau 12 vòng đua, Hamilton quyết định mạo hiểm vào pit thay lốp cứng, với ý đồ đua đến hết chặng. Nhưng anh không làm nóng bộ lốp đủ để tạo ma sát, nên suýt gặp nạn ở Turn 1. "Lốp này không có chút độ bám nào", anh nói khi bị hai xe khác vượt qua. Sau vài vòng, Hamilton mới lấy lại P5.

                    <br><br>Đến vòng 15, Verstappen và Sainz cùng vào thay lốp mềm, rồi trở lại lần lượt ở P2 và P3. Một vòng sau, Leclerc và Perez lần lượt vào thay lốp mềm và lốp thường. Kể từ đó, Verstappen bắt đầu tấn công.

                    <br><br>Trong hai vòng đua liên tiếp, Verstappen đều vượt qua được Leclerc ở Turn 1, nhưng tay đua Monaco đòi được vị trí ở Turn 4. Đến vòng 19, Verstappen lại chọn làn trong để vượt lên, nhưng lần này anh phanh quá đà, khiến lốp xe bị kẹt và xuất hiện một vết mòn phẳng.
                    <br><br>Không thể vượt mặt Leclerc, Verstappen quyết định dùng chiến thuật "undercut" ở vòng 31. Anh vào pit trước và thay lốp thường, rồi dốc hết tốc lực ở vòng tiếp theo. Nhưng Leclerc cũng không gặp vấn đề gì khi thay lốp ở vòng kế tiếp, nên rời pit ngay phía trước Verstappen.

                    <br><br>Tay đua Hà Lan tỏ ra giận dữ vì lần thứ hai "undercut" bất thành, nhưng đội pit của Ferrari thậm chí còn thay lốp nhanh hơn cả Red Bull. "Tôi đã nghe radio của Verstappen nhiều năm qua, và chưa bao giờ thấy cậu ấy giận dữ như lúc này", phóng viên Adam Cooper cho biết.
                    
                    <br><br>Đến vòng 34, Verstappen nhận được chỉ thị từ Red Bull rằng: "Thoải mái đua đi". Nhưng anh lẫn Perez lần lượt đều không vượt qua được hai chiếc Ferrari. Đến vòng 45, Red Bull đưa cả hai tay đua vào pit lần thứ ba để thay lốp mềm. Họ không còn gì để mất, vì khoảng cách với vị trí P5 của Hamilton quá xa.
                    
                    <br><br>Ferrari đáp lại bằng cách đưa Sainz vào thay lốp mềm, và trở lại đường đua ngay trên Perez. Còn Leclerc vẫn tiếp tục dùng lốp thường, với khoảng cách hơn 30 giây so với Verstappen.
                    
                    <br><br>Leclerc gặp may khi chiếc AT03 của Pierre Gasly bất ngờ bốc cháy trên đường đua, buộc xe an toàn phải xuất hiện. Khi đó tay đua Monaco mới vào pit, và vẫn giữ được P1. Khi cuộc đua trở lại, chặng đua chỉ còn 7 vòng. Hai tay đua Red Bull lần lượt bỏ cuộc và dâng chiến thắng cho Ferrari. Niềm vui còn nhân lên với đội đua Italy khi Leclerc giành vòng đua nhanh nhất (fastest-lap).`
				},
				{
					title: `Con trai Schumacher nhập viện`,
					subTitle: `Mick Schumacher lỡ hẹn với Grand Prix Saudi Arabia sau khi húc vào tường ở chặng phân hạng hôm 26/3.`,
					image: './assets/images/racings/img2.jpg',
					content: `Mick mất kiểm soát chiếc VF-22 ở tốc độ 274 km/h khi đang đua Q2. Xe của anh đâm vào rào chắn ở Turn 12. Con trai của huyền thoại Michael Schumacher không bị văng khỏi xe. Khi bác sĩ tiếp cận, Mick vẫn tỉnh táo và trả lời các câu hỏi kiểm tra trí não một cách bình thường.
                    <br><br>Tay đua 23 tuổi sau đó được đưa lên xe cứu thương để nhập viện. Sau vài tiếng kiểm tra, anh được phép xuất viện và trở về khách sạn. Trên Twitter, Mick thông báo: "Chào mọi người, tôi chỉ muốn nói là mọi chuyện đều ổn. Cảm ơn về những tin nhắn hỏi thăm. Chiếc xe cho cảm giác tốt đấy, Haas. Chúng ta sẽ trở lại mạnh mẽ hơn".

                    <br><br>Với việc Mick vắng mặt, đội Haas sẽ chỉ có một chiếc xe do tay đua Kevin Magnussen điều khiển ở chặng đua chính ngày 27/3, xuất phát ở vị trí thứ 10. Tuy nhiên, lãnh đội Guenther Steiner cho biết đây không phải vấn đề lớn.

                    <br><br>"Chúng tôi quyết định không đăng ký xe của Mick cho chặng đua chính. Kevin không lái quá nhiều ở chặng đua thử hôm qua nhưng đã làm tốt để lọt tới Q3 phân hạng. Lần đua cuối của cậu ấy không như kỳ vọng nhưng tôi nghĩ đó là kết quả của thời gian tập luyện hạn hẹp trên đường đua. Chúng tôi vẫn hài lòng với vị trí xuất phát thứ 10", Steiner nói với Sky Sports.

                    <br><br>GP Saudi Arabia là chặng thứ hai của mùa giải F1 2022. Tay đua Red Bull Sergio Perez giành pole ở chặng phân hạng trong khi đồng đội - ĐKVĐ Max Verstappen chỉ về thứ tư. Xuất phát ngay sau Perez sẽ là bộ đôi Ferrari Charles Leclerc và Carlos Sainz.

                    <br><br>Chặng mở màn mùa giải GP Bahrain hôm 20/3 chứng kiến Ferrari thắng lớn khi Leclerc và Sainz lần lượt chiếm hai vị trí dẫn đầu.`
				},
				{
					title: `Leclerc giành pole ở Bahrain GP`,
					subTitle: `Tay đua Ferrari Charles Leclerc về nhất vòng phân hạng trên đường đua Sakhir với 0,123 giây nhanh hơn đương kim vô địch Max Verstappen hôm 19/3.`,
					image: './assets/images/racings/img3.jpg',
					content: `Đúng như lời Hamilton nói trước vòng phân hạng, Mercedes không hề đánh lừa đối thủ. Cuộc đua giành pole chỉ diễn ra giữa Red Bull và Ferrari, cụ thể là Verstappen và Leclerc. Leclerc nhanh hơn ở Q1, nhưng Verstappen lại nhỉnh hơn ở Q3. Điều này dẫn đến Q3 khó đoán, nhưng tay đua Ferrari đã giành pole thứ 10 trong sự nghiệp với thành tích 1 phút 30,558 giây. Verstappen thậm chí suýt mất P2, khi Carlos Sainz (Ferrari) chỉ chậm hơn 0,006 giây.

                    <br><br>"Chúng tôi đã nghĩ Red Bull sẽ nhanh hơn một chút ở vòng phân hạng", Leclerc nói hôm 19/3. "Nhưng bất ngờ điều đó không xảy ra. Những năm qua cực kỳ khó khăn với Ferrari. Và đây là cơ hội để chúng tôi trở lại hàng đầu. Tôi cảm thấy rất tuyệt vời".
                    
                    <br><br>Hai hàng xuất phát đầu tiên ở Sakhir sẽ là cuộc đấu giữa Ferrari và Red Bull, khi mỗi chiếc F1-75 lại có lợi thế xuất phát trước chiếc RB18 tương ứng. Bốn vị trí xuất phát đầu lần lượt là Leclerc, Verstappen, Sainz và Sergio Perez.

                    <br><br>Bất ngờ lớn nhất của vòng phân hạng có lẽ là sự tiến bộ của Haas. Từ việc thường xuyên bị loại ngay từ Q1 hai mùa gần nhất, Haas lần đầu đưa cả hai chiếc xe qua Q1 kể từ Brazil 2019. Magnussen mới chỉ lái thử chiếc VF-22 từ tuần trước, khi anh thay thế tay đua Nga Nikita Mazepin bị cấm thi đấu. Nhưng "K-Mag" làm tốt ngoài kỳ vọng với vị trí thứ 7. Cựu vương Fernando Alonso đứng thứ tám, còn tân binh Mercedes Russell chỉ đứng thứ chín.

                    <br><br>Không chỉ Mercedes, Aston Martin cũng gây thất vọng khi thành tích đua chậm hơn chính họ ở Sakhir năm ngoái tới 2,176 giây. Chặng này Sebastian Vettel không thi đấu do nhiễm Covid-19, nhưng thành tích của Aston Martin cho thấy Vettel sẽ lại có một mùa giải khó khăn.

                    <br><br>McLaren cũng chậm hơn so với năm ngoái 2,081 giây, khiến cả Lando Norris và Daniel Ricciardo đều không thể vào Q3. Norris đứng thứ 13, còn Ricciardo thậm chí đứng thứ 18. Cả Aston Martin và McLaren đều dùng động cơ Mercedes.
                    <br><br>Cuộc đua vô địch năm nay dự kiến sẽ khó lường hơn, ở cả hạng mục cá nhân lẫn đội. Ferrari có cơ hội cạnh tranh với Red Bull và Mercedes. Trong khi về cá nhân, Leclerc nổi lên như ứng viên thách thức Verstappen và Hamilton, nhưng cũng không thể bỏ qua nhân tố tiềm năng như Sainz hay Russell.

                    <br><br>Dù chỉ nhanh thứ năm, Hamilton vẫn hài lòng. Anh nói: "Tôi không thể nói mình cảm thấy nhẹ nhõm, nhưng tôi thực sự hạnh phúc với kết quả này. Chúng tôi đã gặp nhiều khó khăn trong vài tuần qua. Chiếc xe này rất khó lái. Nhưng hy vọng mọi người trong đội sẽ duy trì được thái độ tích cực".`
				},
				{
					title: `Verstappen thắng áp đảo trên sân nhà Ferrari`,
					subTitle: `Tay đua Red Bull Max Verstappen thể hiện kỹ năng vượt trội khi trời đổ mưa và về nhất tại Grand Prix Emilia Romagna ngày 24/4.`,
					image: './assets/images/racings/img4.jpg',
					content: `Leclerc mắc lỗi khi cố gắng vượt Sergio Perez tại vòng 53 hòng chiếm vị trí thứ hai nhờ chiến thuật vào pit muộn. Chiếc F1-75 mất lái rồi xoay vòng khi chạy cắt qua gờ giảm tốc ven đường ở Turn 15. Chiếc xe sau đó lao thẳng vào hàng rào ven đường rồi mới quay lại đường đua. Tuy nhiên, Leclerc phải về pit để thay bộ cánh trước mới. Anh tụt xuống thứ chín và chỉ có thể vươn lên thứ sáu khi về đích.

                    <br><br>Sai lầm của tay đua Ferrari giúp Verstappen thu hẹp khoảng cách với Leclerc từ 45 điểm xuống còn 27 điểm. Tay đua người Hà Lan nhờ đó nhảy từ vị trí thứ năm lên thứ hai trên bảng tổng sắp cá nhân qua bốn chặng đầu F1 2022. Trước khi mắc lỗi, Leclerc đang ổn định ở vị trí thứ ba. Nhưng trong tích tắc, tay đua người Monaco đã vứt bỏ một phần đáng kể lợi thế có được nhờ tận dụng cơ hội ở các chặng đua trước khi chiếc xe của Red Bull chưa ổn định.
                    
                    <br><br>Cuộc đua tại Imola hôm qua còn là ác mộng với Ferrari, khi họ không thu được điểm từ Carlos Sainz. Ngay vòng đầu tiên tay, đua người Tây Ban Nha đã va chạm với Daniel Ricciardo của McLaren, và phải sớm bỏ cuộc khi chiếc F1-75 nằm kẹt trên bãi sỏi ven đường.
                    
                    <br><br>Verstappen kiểm soát hoàn toàn cuộc đua, giữ vững vị trí xuất phát đầu. Mưa trước khi chặng đua bắt đầu buộc các tay đua phải sử dụng lốp dành cho trời mưa, và một pha xuất phát kém đã khiến Leclerc từ thứ hai tụt xuống sau Perez và Lando Norris (McLaren) khi đoàn đua tới Turn 1.
                    
                    <br><br>Tới vòng 8 - ba vòng từ khi cuộc đua khởi động lại sau thời gian xe an toàn xuất hiện sau va chạm giữa Ricciardo và Sainz, Leclerc lại vượt qua Norris. Khi đường đua dần khô ráo, tay đua Ferrari bắt đầu áp sát Perez. Sau đó, Perez về pit trước và chuyển sang lốp khô ở vòng 18. Leclerc thì tiếp tục đua và tăng tốc hòng vững vị trí thứ nhì khi về thay lốp sau Perez một vòng.
                    <br><br>Khi trở lại đường đua ở vòng 19, Leclerc vẫn đứng thứ nhì. Nhưng Perez nhanh chóng áp sát áp sát rồi vượt Leclerc tại Turn 3, rồi giữ vị trí thứ nhì tới cuối cuộc đua. Perez đã thể hiện tốc độ mạnh mẽ, nhưng một vài lỗi nhỏ đã khiến anh chậm hơn 10 giây so với Verstappen, người giành chiến thắng một cách thoải mái.

                    <br><br>"Bạn không thể biết điều gì xảy ra dưới thời tiết như thế này. Mức độ rủi ro sẽ rất cao, nhưng chúng tôi đã làm rất tốt và kết quả hôm nay là hoàn toàn xứng đáng", Verstappen nói sau chặng.

                    <br><br>Leclerc cũng thừa nhận Red Bull đang thể hiện sức mạnh vượt trội. Anh nói: "Họ đơn giản là quá mạnh và hoàn toàn lấn lướt chúng tôi suốt tuần. Ferrari phải cải thiện sau chặng đua này".

                    <br><br>Lando Norris của McLaren về đích thứ ba ngay trước George Russell của Mercedes, người đã cầm chân chiếc Alfa Romeo của Valtteri Bottas ở giai đoạn cuối cuộc đua. Đồng đội của Russell, Lewis Hamilton thì có buổi chiều đáng quên, bị mắc kẹt sau những chiếc xe chậm hơn trong suốt chặng đua và cán đích thứ 13. Hamilton thậm chí còn bị chiếc xe của Verstappen bắt vòng.

                    <br><br>Cuối cuộc đua, ông chủ của Mercedes, Toto Wolff đã phải động viên Hamilton qua sóng radio: "Rất tiếc vì những gì cậu phải trải qua hôm nay. Tôi biết cảm giác lái thật tồi tệ. Đây là một cuộc đua khủng khiếp".`
				},
				{
					title: `Lewis Hamilton: 'Mercedes không đánh lừa đối thủ'`,
					subTitle: `Tay đua Mercedes Lewis Hamilton thừa nhận đội nhà thực sự yếu hơn Red Bull và Ferrari, trước vòng phân hạng đầu tiên của mùa giải F1 2022.`,
					image: './assets/images/racings/img5.jpg',
					content: `
                    "Tuần trước tôi đã nói rằng Mercedes không thắng chặng ở đây", Hamilton nói hôm 18/3. "Red Bull đang bỏ rất xa chúng tôi, khi họ nhanh hơn tới 0,8 hay 0,9 giây mỗi vòng đua. Còn Ferrari cũng nhanh hơn chúng tôi 0,5 hay 0,6 giây. Chúng tôi không hề đánh lừa đối thủ, mà khả năng của chiếc W13 chỉ đến vậy. Mercedes sẽ phải chiến đấu với những đối thủ phía sau Red Bull và Ferrari".
                    <br><br>Trong ngày đua thử 18/3, vị trí cao nhất của một chiếc W13 ở FP1 và FP2 là thứ tư, do tân binh George Russell - người thay Valtteri Bottas từ mùa này - điều khiển. Tay đua 7 lần vô địch thế giới Hamilton chỉ lần lượt về thứ bảy và chín. Thành tích tốt nhất trong ngày thuộc về đương kim vô địch Max Verstappen, còn hai tay đua Ferrari Charles Leclerc và Carlos Sainz lần lượt đứng sau.

                    <br><br>"Chúng tôi gặp rất nhiều vấn đề mùa này", Hamilton nói thêm. "Chúng tôi đã cố gắng làm tất cả để cải tiến chiếc W13, nhưng chưa thay đổi được gì. Vấn đề có lẽ nằm ở dài hạn, và chúng tôi phải cố gắng tận lực để tìm ra lời giải".
                    
                    <br><br>Russell cũng đồng tình với đàn anh: "Rõ ràng thời gian đua một vòng của chúng tôi chưa được như mong muốn. Chiếc W13 chưa đạt được tốc độ ưng ý, và toàn đội sẽ làm việc cả đêm với các dữ liệu để cải thiện. Mercedes chậm hơn rất nhiều so với Red Bull và Ferrari, nên chúng tôi sẽ phải đua với AlphaTauri hay Alfa Romeo".
                    
                    <br><br>Mercedes đã vô địch cả 8 mùa giải gần nhất, ở kỷ nguyên động cơ hybrid. Họ thường không đạt kết quả tốt khi đua thử, nhưng lại tỏ ra mạnh mẽ ở vòng phân hạng và vòng đua chính. Thực lực của chiếc W13 sẽ được thể hiện ở vòng phân hạng tối nay.
                    
                    <br><br>Mùa giải F1 2022 gồm 20 tay đua đến từ 10 đội. Mùa giải gồm 22 chặng đua kéo dài 9 tháng, bắt đầu từ Bahrain ngày 20/3, kết thúc ở Abu Dhabi ngày 20/11. Đây là mùa giải đầu tiên F1 áp dụng những quy định mới đáng kể, đặc biệt về kỹ thuật. Quy định này ban đầu được áp dụng cho mùa 2021, nhưng hoãn lại một năm vì Covid-19.`
				}
			]
		},
		{
			id: 2,
			name: 'Golf',
			banner:
				'https://europeangrass.com/wp-content/uploads/2019/03/golf-banner-1-1.jpg',
			post: [
				{
					title: `Scottie Scheffler shoots 64 in PGA practice round at Southern Hills`,
					subTitle: `HLV Erik Ten Hag đang lên kế hoạch đưa tiền đạo Sebastien Haller tới Man United cùng mình khi mùa giải năm nay khép lại.`,
					image:
						'https://pga-tour-res.cloudinary.com/image/upload/c_fill,dpr_1.5,f_auto,g_center,h_478,q_auto,w_850/v1/pgatour/editorial/2022/05/09/ScottieSchefflerSwing-1694-ChrisGraythen.jpg',
					content: `Scottie Scheffler’s pursuit of a second major championship is off to a strong start. The Masters champion recently shot 64 in a practice round at Tulsa’s Southern Hills Country Club, which will host next week’s PGA Championship. It’s a course where Scheffler has been victorious before, having won the 2015 Big 12 Conference Championship at the historic Perry Maxwell design that has undergone a dramatic renovation by Gil Hanse.

                    <br><br>Scheffler, who holds a sizable lead in the FedExCup after winning four of his last six individual starts, made the trip to Tulsa, Oklahoma, with his Zurich Classic of New Orleans partner, Ryan Palmer, to get a sneak peek at the new-look layout. Scheffler shot an “easy” 64 in last Thursday’s practice round, according to Southern Hills assistant pro Cameron Chhim, who caddied for Scheffler. 
                    
                    <br><br>“He played one ball the entire time, no practice putts, and made it look easy,” Chhim told Golf Oklahoma. “He’s No. 1 in the world and it was pretty easy to see why. It would be hard to say that he’s not going to win (the PGA) or at least be in contention. He hits it far enough and he has just incredible distance control with his irons. Ryan (Palmer) shot 2 or 3 under and looked like he was standing still based on how Scottie was playing.”
                    
                    <br><br>Chhim said Scheffler’s round included six back-nine birdies. Scheffler, who is trying to become the first player since fellow Dallas resident Jordan Spieth (2015) to win the year’s first two majors, has said Southern Hills is one of his favorite courses, and it’s easy to see why. 
                    
                    <br><br>“His proximity on most was 6 to 8 feet,” Chhim added about the somewhat waterlogged round. “The greens weren’t slow, but they were wet. His speed control was good and just took the break out of a lot of them. He looked like he was converting them easily.”
                    
                    <br><br>Chhim said Scheffler shot 1 under on the front nine before a rain delay. Then he ran off birdies on Nos. 10-13, 15 and 17. 
                    
                    <br><br>Scheffler is playing the AT&T Byron Nelson this week in his hometown of Dallas. The tournament was the site of Scheffler’s PGA TOUR debut eight years ago, as he made a hole-in-one and finished T22 while still in high school.`
				},
				{
					title: `Scottie Scheffler shoots 64 in PGA practice round at Southern Hills`,
					subTitle: `HLV Erik Ten Hag đang lên kế hoạch đưa tiền đạo Sebastien Haller tới Man United cùng mình khi mùa giải năm nay khép lại.`,
					image:
						'https://pga-tour-res.cloudinary.com/image/upload/c_fill,dpr_1.5,f_auto,g_center,h_478,q_auto,w_850/v1/pgatour/editorial/2022/05/09/ScottieSchefflerSwing-1694-ChrisGraythen.jpg',
					content: `Scottie Scheffler’s pursuit of a second major championship is off to a strong start. The Masters champion recently shot 64 in a practice round at Tulsa’s Southern Hills Country Club, which will host next week’s PGA Championship. It’s a course where Scheffler has been victorious before, having won the 2015 Big 12 Conference Championship at the historic Perry Maxwell design that has undergone a dramatic renovation by Gil Hanse.

                    <br><br>Scheffler, who holds a sizable lead in the FedExCup after winning four of his last six individual starts, made the trip to Tulsa, Oklahoma, with his Zurich Classic of New Orleans partner, Ryan Palmer, to get a sneak peek at the new-look layout. Scheffler shot an “easy” 64 in last Thursday’s practice round, according to Southern Hills assistant pro Cameron Chhim, who caddied for Scheffler. 
                    
                    <br><br>“He played one ball the entire time, no practice putts, and made it look easy,” Chhim told Golf Oklahoma. “He’s No. 1 in the world and it was pretty easy to see why. It would be hard to say that he’s not going to win (the PGA) or at least be in contention. He hits it far enough and he has just incredible distance control with his irons. Ryan (Palmer) shot 2 or 3 under and looked like he was standing still based on how Scottie was playing.”
                    
                    <br><br>Chhim said Scheffler’s round included six back-nine birdies. Scheffler, who is trying to become the first player since fellow Dallas resident Jordan Spieth (2015) to win the year’s first two majors, has said Southern Hills is one of his favorite courses, and it’s easy to see why. 
                    
                    <br><br>“His proximity on most was 6 to 8 feet,” Chhim added about the somewhat waterlogged round. “The greens weren’t slow, but they were wet. His speed control was good and just took the break out of a lot of them. He looked like he was converting them easily.”
                    
                    <br><br>Chhim said Scheffler shot 1 under on the front nine before a rain delay. Then he ran off birdies on Nos. 10-13, 15 and 17. 
                    
                    <br><br>Scheffler is playing the AT&T Byron Nelson this week in his hometown of Dallas. The tournament was the site of Scheffler’s PGA TOUR debut eight years ago, as he made a hole-in-one and finished T22 while still in high school.`
				},
				{
					title: `Scottie Scheffler shoots 64 in PGA practice round at Southern Hills`,
					subTitle: `HLV Erik Ten Hag đang lên kế hoạch đưa tiền đạo Sebastien Haller tới Man United cùng mình khi mùa giải năm nay khép lại.`,
					image:
						'https://pga-tour-res.cloudinary.com/image/upload/c_fill,dpr_1.5,f_auto,g_center,h_478,q_auto,w_850/v1/pgatour/editorial/2022/05/09/ScottieSchefflerSwing-1694-ChrisGraythen.jpg',
					content: `Scottie Scheffler’s pursuit of a second major championship is off to a strong start. The Masters champion recently shot 64 in a practice round at Tulsa’s Southern Hills Country Club, which will host next week’s PGA Championship. It’s a course where Scheffler has been victorious before, having won the 2015 Big 12 Conference Championship at the historic Perry Maxwell design that has undergone a dramatic renovation by Gil Hanse.

                    <br><br>Scheffler, who holds a sizable lead in the FedExCup after winning four of his last six individual starts, made the trip to Tulsa, Oklahoma, with his Zurich Classic of New Orleans partner, Ryan Palmer, to get a sneak peek at the new-look layout. Scheffler shot an “easy” 64 in last Thursday’s practice round, according to Southern Hills assistant pro Cameron Chhim, who caddied for Scheffler. 
                    
                    <br><br>“He played one ball the entire time, no practice putts, and made it look easy,” Chhim told Golf Oklahoma. “He’s No. 1 in the world and it was pretty easy to see why. It would be hard to say that he’s not going to win (the PGA) or at least be in contention. He hits it far enough and he has just incredible distance control with his irons. Ryan (Palmer) shot 2 or 3 under and looked like he was standing still based on how Scottie was playing.”
                    
                    <br><br>Chhim said Scheffler’s round included six back-nine birdies. Scheffler, who is trying to become the first player since fellow Dallas resident Jordan Spieth (2015) to win the year’s first two majors, has said Southern Hills is one of his favorite courses, and it’s easy to see why. 
                    
                    <br><br>“His proximity on most was 6 to 8 feet,” Chhim added about the somewhat waterlogged round. “The greens weren’t slow, but they were wet. His speed control was good and just took the break out of a lot of them. He looked like he was converting them easily.”
                    
                    <br><br>Chhim said Scheffler shot 1 under on the front nine before a rain delay. Then he ran off birdies on Nos. 10-13, 15 and 17. 
                    
                    <br><br>Scheffler is playing the AT&T Byron Nelson this week in his hometown of Dallas. The tournament was the site of Scheffler’s PGA TOUR debut eight years ago, as he made a hole-in-one and finished T22 while still in high school.`
				},
				{
					title: `Scottie Scheffler shoots 64 in PGA practice round at Southern Hills`,
					subTitle: `HLV Erik Ten Hag đang lên kế hoạch đưa tiền đạo Sebastien Haller tới Man United cùng mình khi mùa giải năm nay khép lại.`,
					image:
						'https://pga-tour-res.cloudinary.com/image/upload/c_fill,dpr_1.5,f_auto,g_center,h_478,q_auto,w_850/v1/pgatour/editorial/2022/05/09/ScottieSchefflerSwing-1694-ChrisGraythen.jpg',
					content: `Scottie Scheffler’s pursuit of a second major championship is off to a strong start. The Masters champion recently shot 64 in a practice round at Tulsa’s Southern Hills Country Club, which will host next week’s PGA Championship. It’s a course where Scheffler has been victorious before, having won the 2015 Big 12 Conference Championship at the historic Perry Maxwell design that has undergone a dramatic renovation by Gil Hanse.

                    <br><br>Scheffler, who holds a sizable lead in the FedExCup after winning four of his last six individual starts, made the trip to Tulsa, Oklahoma, with his Zurich Classic of New Orleans partner, Ryan Palmer, to get a sneak peek at the new-look layout. Scheffler shot an “easy” 64 in last Thursday’s practice round, according to Southern Hills assistant pro Cameron Chhim, who caddied for Scheffler. 
                    
                    <br><br>“He played one ball the entire time, no practice putts, and made it look easy,” Chhim told Golf Oklahoma. “He’s No. 1 in the world and it was pretty easy to see why. It would be hard to say that he’s not going to win (the PGA) or at least be in contention. He hits it far enough and he has just incredible distance control with his irons. Ryan (Palmer) shot 2 or 3 under and looked like he was standing still based on how Scottie was playing.”
                    
                    <br><br>Chhim said Scheffler’s round included six back-nine birdies. Scheffler, who is trying to become the first player since fellow Dallas resident Jordan Spieth (2015) to win the year’s first two majors, has said Southern Hills is one of his favorite courses, and it’s easy to see why. 
                    
                    <br><br>“His proximity on most was 6 to 8 feet,” Chhim added about the somewhat waterlogged round. “The greens weren’t slow, but they were wet. His speed control was good and just took the break out of a lot of them. He looked like he was converting them easily.”
                    
                    <br><br>Chhim said Scheffler shot 1 under on the front nine before a rain delay. Then he ran off birdies on Nos. 10-13, 15 and 17. 
                    
                    <br><br>Scheffler is playing the AT&T Byron Nelson this week in his hometown of Dallas. The tournament was the site of Scheffler’s PGA TOUR debut eight years ago, as he made a hole-in-one and finished T22 while still in high school.`
				},
				{
					title: `Scottie Scheffler shoots 64 in PGA practice round at Southern Hills`,
					subTitle: `HLV Erik Ten Hag đang lên kế hoạch đưa tiền đạo Sebastien Haller tới Man United cùng mình khi mùa giải năm nay khép lại.`,
					image:
						'https://pga-tour-res.cloudinary.com/image/upload/c_fill,dpr_1.5,f_auto,g_center,h_478,q_auto,w_850/v1/pgatour/editorial/2022/05/09/ScottieSchefflerSwing-1694-ChrisGraythen.jpg',
					content: `Scottie Scheffler’s pursuit of a second major championship is off to a strong start. The Masters champion recently shot 64 in a practice round at Tulsa’s Southern Hills Country Club, which will host next week’s PGA Championship. It’s a course where Scheffler has been victorious before, having won the 2015 Big 12 Conference Championship at the historic Perry Maxwell design that has undergone a dramatic renovation by Gil Hanse.

                    <br><br>Scheffler, who holds a sizable lead in the FedExCup after winning four of his last six individual starts, made the trip to Tulsa, Oklahoma, with his Zurich Classic of New Orleans partner, Ryan Palmer, to get a sneak peek at the new-look layout. Scheffler shot an “easy” 64 in last Thursday’s practice round, according to Southern Hills assistant pro Cameron Chhim, who caddied for Scheffler. 
                    
                    <br><br>“He played one ball the entire time, no practice putts, and made it look easy,” Chhim told Golf Oklahoma. “He’s No. 1 in the world and it was pretty easy to see why. It would be hard to say that he’s not going to win (the PGA) or at least be in contention. He hits it far enough and he has just incredible distance control with his irons. Ryan (Palmer) shot 2 or 3 under and looked like he was standing still based on how Scottie was playing.”
                    
                    <br><br>Chhim said Scheffler’s round included six back-nine birdies. Scheffler, who is trying to become the first player since fellow Dallas resident Jordan Spieth (2015) to win the year’s first two majors, has said Southern Hills is one of his favorite courses, and it’s easy to see why. 
                    
                    <br><br>“His proximity on most was 6 to 8 feet,” Chhim added about the somewhat waterlogged round. “The greens weren’t slow, but they were wet. His speed control was good and just took the break out of a lot of them. He looked like he was converting them easily.”
                    
                    <br><br>Chhim said Scheffler shot 1 under on the front nine before a rain delay. Then he ran off birdies on Nos. 10-13, 15 and 17. 
                    
                    <br><br>Scheffler is playing the AT&T Byron Nelson this week in his hometown of Dallas. The tournament was the site of Scheffler’s PGA TOUR debut eight years ago, as he made a hole-in-one and finished T22 while still in high school.`
				},
				{
					title: `Scottie Scheffler shoots 64 in PGA practice round at Southern Hills`,
					subTitle: `HLV Erik Ten Hag đang lên kế hoạch đưa tiền đạo Sebastien Haller tới Man United cùng mình khi mùa giải năm nay khép lại.`,
					image:
						'https://pga-tour-res.cloudinary.com/image/upload/c_fill,dpr_1.5,f_auto,g_center,h_478,q_auto,w_850/v1/pgatour/editorial/2022/05/09/ScottieSchefflerSwing-1694-ChrisGraythen.jpg',
					content: `Scottie Scheffler’s pursuit of a second major championship is off to a strong start. The Masters champion recently shot 64 in a practice round at Tulsa’s Southern Hills Country Club, which will host next week’s PGA Championship. It’s a course where Scheffler has been victorious before, having won the 2015 Big 12 Conference Championship at the historic Perry Maxwell design that has undergone a dramatic renovation by Gil Hanse.

                    <br><br>Scheffler, who holds a sizable lead in the FedExCup after winning four of his last six individual starts, made the trip to Tulsa, Oklahoma, with his Zurich Classic of New Orleans partner, Ryan Palmer, to get a sneak peek at the new-look layout. Scheffler shot an “easy” 64 in last Thursday’s practice round, according to Southern Hills assistant pro Cameron Chhim, who caddied for Scheffler. 
                    
                    <br><br>“He played one ball the entire time, no practice putts, and made it look easy,” Chhim told Golf Oklahoma. “He’s No. 1 in the world and it was pretty easy to see why. It would be hard to say that he’s not going to win (the PGA) or at least be in contention. He hits it far enough and he has just incredible distance control with his irons. Ryan (Palmer) shot 2 or 3 under and looked like he was standing still based on how Scottie was playing.”
                    
                    <br><br>Chhim said Scheffler’s round included six back-nine birdies. Scheffler, who is trying to become the first player since fellow Dallas resident Jordan Spieth (2015) to win the year’s first two majors, has said Southern Hills is one of his favorite courses, and it’s easy to see why. 
                    
                    <br><br>“His proximity on most was 6 to 8 feet,” Chhim added about the somewhat waterlogged round. “The greens weren’t slow, but they were wet. His speed control was good and just took the break out of a lot of them. He looked like he was converting them easily.”
                    
                    <br><br>Chhim said Scheffler shot 1 under on the front nine before a rain delay. Then he ran off birdies on Nos. 10-13, 15 and 17. 
                    
                    <br><br>Scheffler is playing the AT&T Byron Nelson this week in his hometown of Dallas. The tournament was the site of Scheffler’s PGA TOUR debut eight years ago, as he made a hole-in-one and finished T22 while still in high school.`
				},
				{
					title: `Scottie Scheffler shoots 64 in PGA practice round at Southern Hills`,
					subTitle: `HLV Erik Ten Hag đang lên kế hoạch đưa tiền đạo Sebastien Haller tới Man United cùng mình khi mùa giải năm nay khép lại.`,
					image:
						'https://pga-tour-res.cloudinary.com/image/upload/c_fill,dpr_1.5,f_auto,g_center,h_478,q_auto,w_850/v1/pgatour/editorial/2022/05/09/ScottieSchefflerSwing-1694-ChrisGraythen.jpg',
					content: `Scottie Scheffler’s pursuit of a second major championship is off to a strong start. The Masters champion recently shot 64 in a practice round at Tulsa’s Southern Hills Country Club, which will host next week’s PGA Championship. It’s a course where Scheffler has been victorious before, having won the 2015 Big 12 Conference Championship at the historic Perry Maxwell design that has undergone a dramatic renovation by Gil Hanse.

                    <br><br>Scheffler, who holds a sizable lead in the FedExCup after winning four of his last six individual starts, made the trip to Tulsa, Oklahoma, with his Zurich Classic of New Orleans partner, Ryan Palmer, to get a sneak peek at the new-look layout. Scheffler shot an “easy” 64 in last Thursday’s practice round, according to Southern Hills assistant pro Cameron Chhim, who caddied for Scheffler. 
                    
                    <br><br>“He played one ball the entire time, no practice putts, and made it look easy,” Chhim told Golf Oklahoma. “He’s No. 1 in the world and it was pretty easy to see why. It would be hard to say that he’s not going to win (the PGA) or at least be in contention. He hits it far enough and he has just incredible distance control with his irons. Ryan (Palmer) shot 2 or 3 under and looked like he was standing still based on how Scottie was playing.”
                    
                    <br><br>Chhim said Scheffler’s round included six back-nine birdies. Scheffler, who is trying to become the first player since fellow Dallas resident Jordan Spieth (2015) to win the year’s first two majors, has said Southern Hills is one of his favorite courses, and it’s easy to see why. 
                    
                    <br><br>“His proximity on most was 6 to 8 feet,” Chhim added about the somewhat waterlogged round. “The greens weren’t slow, but they were wet. His speed control was good and just took the break out of a lot of them. He looked like he was converting them easily.”
                    
                    <br><br>Chhim said Scheffler shot 1 under on the front nine before a rain delay. Then he ran off birdies on Nos. 10-13, 15 and 17. 
                    
                    <br><br>Scheffler is playing the AT&T Byron Nelson this week in his hometown of Dallas. The tournament was the site of Scheffler’s PGA TOUR debut eight years ago, as he made a hole-in-one and finished T22 while still in high school.`
				}
			]
		},
		{
			id: 3,
			name: 'Cầu lông',
			banner: './assets/images/home/banner4.jpg',
			post: [
				{
					title: `CANADIANS IMPRESS IN GUTSY DEFEAT`,
					subTitle: `Group D favourites Korea were made to sweat by a spirited Canada before completing a 4-1 victory to qualify for the Uber Cup quarterfinals.`,
					image:
						'https://bwfthomasubercups.bwfbadminton.com/wp-content/uploads/2022/05/20220510_1039_ThomasUberCupFinals2022_BPES2377-1536x1024.jpg',
					content: `Despite the comfortable margin, the Koreans dropped at least a game in three of their following four matches after An Se Young’s 21-19 21-13 takedown of Michelle Li.

                    <br><br>Canada’s first women’s pair of Rachel Honderich and Kristen Tsai looked headed for a win to level the tie after taking the first game 21-17 and leading the second 20-18 before Kim So Yeong/Kong Hee Yong notched four straight points to force a rubber, which they won 21-14.
                    
                    
                    <br><br>Honderich and Tsai were two points from winning.
                    Wen Yu Zhang, the 19-year-old world No.77 then stunned world No.19 Kim Ga Eun 21-17 14-21 22-20 in the second women’s singles to put Canada’s maiden point on the board.
                    
                    <br><br>The meaning of her result was not lost on the teenager.
                    
                    <br><br>“We don’t train together and are players from different provinces coming together to form a group so being able to win a match at this stage is big. We don’t expect a lot, just giving our best every match,” she said.
                    
                    <br><br>Although Catherine Choi and Crystal Lai went down in 34 minutes to Jeong Na Eun/Kim Hye Jeong to hand the tie and a place in the last eight to Korea, it did not stop third singles Talia Ng from taking her higher-ranked opponent Sim Yu Jin to three games before conceding defeat.
                    
                    
                    <br><br>Ng pushed Sim to three games.
                    <br><br>World No.81 Ng, a year older than Wen, believes her showing against the 46th-ranked Sim puts her in good stead.
                    
                    <br><br>“When I was leading I thought ‘wow I got this, I can actually do this’,” she said.
                    
                    <br><br>“Asian players are a lot steadier and it’s hard to break their defence so this gives me more confidence and motivation to train harder to reach their level eventually.”
                    
                    <br><br>Highlights:
                    
                    <br><br>♦ Advancing with Korea to the next round are India, whose second pair Simran Singhi/Ritika Thaker gave away a point to Lauren Lam/Kodi Tang Lee in their 4-1 win.
                    
                    <br><br>♦ Group A heavyweights Japan and Indonesia also progressed unscathed with 5-0 results over France and Germany. They meet tomorrow to decide the group winners.`
				},
				{
					title: `CANADIANS IMPRESS IN GUTSY DEFEAT`,
					subTitle: `Group D favourites Korea were made to sweat by a spirited Canada before completing a 4-1 victory to qualify for the Uber Cup quarterfinals.`,
					image:
						'https://bwfthomasubercups.bwfbadminton.com/wp-content/uploads/2022/05/20220510_1039_ThomasUberCupFinals2022_BPES2377-1536x1024.jpg',
					content: `Despite the comfortable margin, the Koreans dropped at least a game in three of their following four matches after An Se Young’s 21-19 21-13 takedown of Michelle Li.

                    <br><br>Canada’s first women’s pair of Rachel Honderich and Kristen Tsai looked headed for a win to level the tie after taking the first game 21-17 and leading the second 20-18 before Kim So Yeong/Kong Hee Yong notched four straight points to force a rubber, which they won 21-14.
                    
                    
                    <br><br>Honderich and Tsai were two points from winning.
                    Wen Yu Zhang, the 19-year-old world No.77 then stunned world No.19 Kim Ga Eun 21-17 14-21 22-20 in the second women’s singles to put Canada’s maiden point on the board.
                    
                    <br><br>The meaning of her result was not lost on the teenager.
                    
                    <br><br>“We don’t train together and are players from different provinces coming together to form a group so being able to win a match at this stage is big. We don’t expect a lot, just giving our best every match,” she said.
                    
                    <br><br>Although Catherine Choi and Crystal Lai went down in 34 minutes to Jeong Na Eun/Kim Hye Jeong to hand the tie and a place in the last eight to Korea, it did not stop third singles Talia Ng from taking her higher-ranked opponent Sim Yu Jin to three games before conceding defeat.
                    
                    
                    <br><br>Ng pushed Sim to three games.
                    <br><br>World No.81 Ng, a year older than Wen, believes her showing against the 46th-ranked Sim puts her in good stead.
                    
                    <br><br>“When I was leading I thought ‘wow I got this, I can actually do this’,” she said.
                    
                    <br><br>“Asian players are a lot steadier and it’s hard to break their defence so this gives me more confidence and motivation to train harder to reach their level eventually.”
                    
                    <br><br>Highlights:
                    
                    <br><br>♦ Advancing with Korea to the next round are India, whose second pair Simran Singhi/Ritika Thaker gave away a point to Lauren Lam/Kodi Tang Lee in their 4-1 win.
                    
                    <br><br>♦ Group A heavyweights Japan and Indonesia also progressed unscathed with 5-0 results over France and Germany. They meet tomorrow to decide the group winners.`
				},
				{
					title: `CANADIANS IMPRESS IN GUTSY DEFEAT`,
					subTitle: `Group D favourites Korea were made to sweat by a spirited Canada before completing a 4-1 victory to qualify for the Uber Cup quarterfinals.`,
					image:
						'https://bwfthomasubercups.bwfbadminton.com/wp-content/uploads/2022/05/20220510_1039_ThomasUberCupFinals2022_BPES2377-1536x1024.jpg',
					content: `Despite the comfortable margin, the Koreans dropped at least a game in three of their following four matches after An Se Young’s 21-19 21-13 takedown of Michelle Li.

                    <br><br>Canada’s first women’s pair of Rachel Honderich and Kristen Tsai looked headed for a win to level the tie after taking the first game 21-17 and leading the second 20-18 before Kim So Yeong/Kong Hee Yong notched four straight points to force a rubber, which they won 21-14.
                    
                    
                    <br><br>Honderich and Tsai were two points from winning.
                    Wen Yu Zhang, the 19-year-old world No.77 then stunned world No.19 Kim Ga Eun 21-17 14-21 22-20 in the second women’s singles to put Canada’s maiden point on the board.
                    
                    <br><br>The meaning of her result was not lost on the teenager.
                    
                    <br><br>“We don’t train together and are players from different provinces coming together to form a group so being able to win a match at this stage is big. We don’t expect a lot, just giving our best every match,” she said.
                    
                    <br><br>Although Catherine Choi and Crystal Lai went down in 34 minutes to Jeong Na Eun/Kim Hye Jeong to hand the tie and a place in the last eight to Korea, it did not stop third singles Talia Ng from taking her higher-ranked opponent Sim Yu Jin to three games before conceding defeat.
                    
                    
                    <br><br>Ng pushed Sim to three games.
                    <br><br>World No.81 Ng, a year older than Wen, believes her showing against the 46th-ranked Sim puts her in good stead.
                    
                    <br><br>“When I was leading I thought ‘wow I got this, I can actually do this’,” she said.
                    
                    <br><br>“Asian players are a lot steadier and it’s hard to break their defence so this gives me more confidence and motivation to train harder to reach their level eventually.”
                    
                    <br><br>Highlights:
                    
                    <br><br>♦ Advancing with Korea to the next round are India, whose second pair Simran Singhi/Ritika Thaker gave away a point to Lauren Lam/Kodi Tang Lee in their 4-1 win.
                    
                    <br><br>♦ Group A heavyweights Japan and Indonesia also progressed unscathed with 5-0 results over France and Germany. They meet tomorrow to decide the group winners.`
				},
				{
					title: `CANADIANS IMPRESS IN GUTSY DEFEAT`,
					subTitle: `Group D favourites Korea were made to sweat by a spirited Canada before completing a 4-1 victory to qualify for the Uber Cup quarterfinals.`,
					image:
						'https://bwfthomasubercups.bwfbadminton.com/wp-content/uploads/2022/05/20220510_1039_ThomasUberCupFinals2022_BPES2377-1536x1024.jpg',
					content: `Despite the comfortable margin, the Koreans dropped at least a game in three of their following four matches after An Se Young’s 21-19 21-13 takedown of Michelle Li.

                    <br><br>Canada’s first women’s pair of Rachel Honderich and Kristen Tsai looked headed for a win to level the tie after taking the first game 21-17 and leading the second 20-18 before Kim So Yeong/Kong Hee Yong notched four straight points to force a rubber, which they won 21-14.
                    
                    
                    <br><br>Honderich and Tsai were two points from winning.
                    Wen Yu Zhang, the 19-year-old world No.77 then stunned world No.19 Kim Ga Eun 21-17 14-21 22-20 in the second women’s singles to put Canada’s maiden point on the board.
                    
                    <br><br>The meaning of her result was not lost on the teenager.
                    
                    <br><br>“We don’t train together and are players from different provinces coming together to form a group so being able to win a match at this stage is big. We don’t expect a lot, just giving our best every match,” she said.
                    
                    <br><br>Although Catherine Choi and Crystal Lai went down in 34 minutes to Jeong Na Eun/Kim Hye Jeong to hand the tie and a place in the last eight to Korea, it did not stop third singles Talia Ng from taking her higher-ranked opponent Sim Yu Jin to three games before conceding defeat.
                    
                    
                    <br><br>Ng pushed Sim to three games.
                    <br><br>World No.81 Ng, a year older than Wen, believes her showing against the 46th-ranked Sim puts her in good stead.
                    
                    <br><br>“When I was leading I thought ‘wow I got this, I can actually do this’,” she said.
                    
                    <br><br>“Asian players are a lot steadier and it’s hard to break their defence so this gives me more confidence and motivation to train harder to reach their level eventually.”
                    
                    <br><br>Highlights:
                    
                    <br><br>♦ Advancing with Korea to the next round are India, whose second pair Simran Singhi/Ritika Thaker gave away a point to Lauren Lam/Kodi Tang Lee in their 4-1 win.
                    
                    <br><br>♦ Group A heavyweights Japan and Indonesia also progressed unscathed with 5-0 results over France and Germany. They meet tomorrow to decide the group winners.`
				},
				{
					title: `CANADIANS IMPRESS IN GUTSY DEFEAT`,
					subTitle: `Group D favourites Korea were made to sweat by a spirited Canada before completing a 4-1 victory to qualify for the Uber Cup quarterfinals.`,
					image:
						'https://bwfthomasubercups.bwfbadminton.com/wp-content/uploads/2022/05/20220510_1039_ThomasUberCupFinals2022_BPES2377-1536x1024.jpg',
					content: `Despite the comfortable margin, the Koreans dropped at least a game in three of their following four matches after An Se Young’s 21-19 21-13 takedown of Michelle Li.

                    <br><br>Canada’s first women’s pair of Rachel Honderich and Kristen Tsai looked headed for a win to level the tie after taking the first game 21-17 and leading the second 20-18 before Kim So Yeong/Kong Hee Yong notched four straight points to force a rubber, which they won 21-14.
                    
                    
                    <br><br>Honderich and Tsai were two points from winning.
                    Wen Yu Zhang, the 19-year-old world No.77 then stunned world No.19 Kim Ga Eun 21-17 14-21 22-20 in the second women’s singles to put Canada’s maiden point on the board.
                    
                    <br><br>The meaning of her result was not lost on the teenager.
                    
                    <br><br>“We don’t train together and are players from different provinces coming together to form a group so being able to win a match at this stage is big. We don’t expect a lot, just giving our best every match,” she said.
                    
                    <br><br>Although Catherine Choi and Crystal Lai went down in 34 minutes to Jeong Na Eun/Kim Hye Jeong to hand the tie and a place in the last eight to Korea, it did not stop third singles Talia Ng from taking her higher-ranked opponent Sim Yu Jin to three games before conceding defeat.
                    
                    
                    <br><br>Ng pushed Sim to three games.
                    <br><br>World No.81 Ng, a year older than Wen, believes her showing against the 46th-ranked Sim puts her in good stead.
                    
                    <br><br>“When I was leading I thought ‘wow I got this, I can actually do this’,” she said.
                    
                    <br><br>“Asian players are a lot steadier and it’s hard to break their defence so this gives me more confidence and motivation to train harder to reach their level eventually.”
                    
                    <br><br>Highlights:
                    
                    <br><br>♦ Advancing with Korea to the next round are India, whose second pair Simran Singhi/Ritika Thaker gave away a point to Lauren Lam/Kodi Tang Lee in their 4-1 win.
                    
                    <br><br>♦ Group A heavyweights Japan and Indonesia also progressed unscathed with 5-0 results over France and Germany. They meet tomorrow to decide the group winners.`
				},
				{
					title: `CANADIANS IMPRESS IN GUTSY DEFEAT`,
					subTitle: `Group D favourites Korea were made to sweat by a spirited Canada before completing a 4-1 victory to qualify for the Uber Cup quarterfinals.`,
					image:
						'https://bwfthomasubercups.bwfbadminton.com/wp-content/uploads/2022/05/20220510_1039_ThomasUberCupFinals2022_BPES2377-1536x1024.jpg',
					content: `Despite the comfortable margin, the Koreans dropped at least a game in three of their following four matches after An Se Young’s 21-19 21-13 takedown of Michelle Li.

                    <br><br>Canada’s first women’s pair of Rachel Honderich and Kristen Tsai looked headed for a win to level the tie after taking the first game 21-17 and leading the second 20-18 before Kim So Yeong/Kong Hee Yong notched four straight points to force a rubber, which they won 21-14.
                    
                    
                    <br><br>Honderich and Tsai were two points from winning.
                    Wen Yu Zhang, the 19-year-old world No.77 then stunned world No.19 Kim Ga Eun 21-17 14-21 22-20 in the second women’s singles to put Canada’s maiden point on the board.
                    
                    <br><br>The meaning of her result was not lost on the teenager.
                    
                    <br><br>“We don’t train together and are players from different provinces coming together to form a group so being able to win a match at this stage is big. We don’t expect a lot, just giving our best every match,” she said.
                    
                    <br><br>Although Catherine Choi and Crystal Lai went down in 34 minutes to Jeong Na Eun/Kim Hye Jeong to hand the tie and a place in the last eight to Korea, it did not stop third singles Talia Ng from taking her higher-ranked opponent Sim Yu Jin to three games before conceding defeat.
                    
                    
                    <br><br>Ng pushed Sim to three games.
                    <br><br>World No.81 Ng, a year older than Wen, believes her showing against the 46th-ranked Sim puts her in good stead.
                    
                    <br><br>“When I was leading I thought ‘wow I got this, I can actually do this’,” she said.
                    
                    <br><br>“Asian players are a lot steadier and it’s hard to break their defence so this gives me more confidence and motivation to train harder to reach their level eventually.”
                    
                    <br><br>Highlights:
                    
                    <br><br>♦ Advancing with Korea to the next round are India, whose second pair Simran Singhi/Ritika Thaker gave away a point to Lauren Lam/Kodi Tang Lee in their 4-1 win.
                    
                    <br><br>♦ Group A heavyweights Japan and Indonesia also progressed unscathed with 5-0 results over France and Germany. They meet tomorrow to decide the group winners.`
				},
				{
					title: `CANADIANS IMPRESS IN GUTSY DEFEAT`,
					subTitle: `Group D favourites Korea were made to sweat by a spirited Canada before completing a 4-1 victory to qualify for the Uber Cup quarterfinals.`,
					image:
						'https://bwfthomasubercups.bwfbadminton.com/wp-content/uploads/2022/05/20220510_1039_ThomasUberCupFinals2022_BPES2377-1536x1024.jpg',
					content: `Despite the comfortable margin, the Koreans dropped at least a game in three of their following four matches after An Se Young’s 21-19 21-13 takedown of Michelle Li.

                    <br><br>Canada’s first women’s pair of Rachel Honderich and Kristen Tsai looked headed for a win to level the tie after taking the first game 21-17 and leading the second 20-18 before Kim So Yeong/Kong Hee Yong notched four straight points to force a rubber, which they won 21-14.
                    
                    
                    <br><br>Honderich and Tsai were two points from winning.
                    Wen Yu Zhang, the 19-year-old world No.77 then stunned world No.19 Kim Ga Eun 21-17 14-21 22-20 in the second women’s singles to put Canada’s maiden point on the board.
                    
                    <br><br>The meaning of her result was not lost on the teenager.
                    
                    <br><br>“We don’t train together and are players from different provinces coming together to form a group so being able to win a match at this stage is big. We don’t expect a lot, just giving our best every match,” she said.
                    
                    <br><br>Although Catherine Choi and Crystal Lai went down in 34 minutes to Jeong Na Eun/Kim Hye Jeong to hand the tie and a place in the last eight to Korea, it did not stop third singles Talia Ng from taking her higher-ranked opponent Sim Yu Jin to three games before conceding defeat.
                    
                    
                    <br><br>Ng pushed Sim to three games.
                    <br><br>World No.81 Ng, a year older than Wen, believes her showing against the 46th-ranked Sim puts her in good stead.
                    
                    <br><br>“When I was leading I thought ‘wow I got this, I can actually do this’,” she said.
                    
                    <br><br>“Asian players are a lot steadier and it’s hard to break their defence so this gives me more confidence and motivation to train harder to reach their level eventually.”
                    
                    <br><br>Highlights:
                    
                    <br><br>♦ Advancing with Korea to the next round are India, whose second pair Simran Singhi/Ritika Thaker gave away a point to Lauren Lam/Kodi Tang Lee in their 4-1 win.
                    
                    <br><br>♦ Group A heavyweights Japan and Indonesia also progressed unscathed with 5-0 results over France and Germany. They meet tomorrow to decide the group winners.`
				}
			]
		},
		{
			id: 4,
			name: 'Các môn thể thao khác',
			banner: './assets/images/home/banner3.jpg',
			post: [
				{
					title: `Kết quả giải cầu lông vô địch châu Á 2022 hôm nay`,
					subTitle: `Kết quả giải cầu lông vô địch châu Á năm 2022 hôm nay mới nhất được Webthethao.vn cập nhật chính xác dưới đây.`,
					image: './assets/images/others/img1.jpg',
					content: `Một trong những tay vợt được chú ý nhất ở Giải vô địch cầu lông châu Á 2022 chắc chắn là số 2 thế giới Kento Momota của Nhật. Hãy chờ xem anh có giành được ngôi vô địch thứ 3 liên tiếp hay không, sau 2 năm đầy khó khăn vừa qua, không chỉ do ảnh hưởng từ đại dịch COVID-19. Momota là hạt giống số 1 của đơn nam, nhưng phong độ đang đầy bất ổn dẫn tới việc anh thường bị loại sớm ở các giải gần đây, cụ thể như thua đồng hương Kenta Nishimoto ngay vòng 1 Đức mở rộng 2022 vào tháng 3 vừa qua.
                   
                    <br><br>Nếu muốn vô địch châu Á lần nữa, ngôi sao 27 tuổi này cần lấy lại phong độ đỉnh cao. Bởi lẽ, không thiếu rào cản đáng sợ đang chờ anh, như HCĐ đơn nam Olympic Tokyo 2022 Anthony Sinisuka Ginting của Indonesia là hạt giống số 2, hoặc ĐKVĐ SEA Games Lee Zii Jia của Malaysia vừa quyết định đấu chuyên nghiệp. 

                    <br><br>Tài năng trẻ đang thăng tiến của Ấn Độ là Lakshya Sen cùng ĐKVĐTG Loh Kean Yew của Singapore cũng sẵn sàng thể hiện hết tiềm năng. Riêng với người hâm mộ Việt Nam, mọi ánh mắt ắt hẳn đều dồn sức cổ vũ cho tượng đài Nguyễn Tiến Minh.
                    <br><br>Ở đơn nữ, hãy chờ xem ĐKVĐTG Akane Yamaguchi tiếp tục cùng kình địch Hàn Quốc An Seyoung so kè như thế nào. Mục tiêu hàng đầu của Akane Yamaguchi là bảo vệ ngôi vô địch châu Á giành được ở Vũ Hán năm 2019.

                    <br><br>Họ là hạt giống số 1 và 2 của giải lần này. Riêng năm qua, họ so vợt 7 lần. Cô gái Nhật đang chiếm ưu thế với 7 thắng - 4 thua qua các lần đối đầu, bao gồm chiến thắng nhẹ nhàng ở chung kết Toàn Anh vào tháng trước. 
`
				},
				{
					title: `SEA Games 31: Khó khăn chờ đón các kình ngư Việt Nam`,
					subTitle: `TTO - Tại SEA Games 30, bơi lội Việt Nam đoạt 11 HCV, trong đó kình ngư Ánh Viên mang về 6 HCV. Tại SEA Games 31, vắng Ánh Viên, mục tiêu giành từ 6 - 8 HCV của bơi lội Việt Nam càng khó khăn hơn bao giờ hết.`,
					image: './assets/images/others/img2.jpg',
					content: `Những năm qua, bơi lội Việt Nam giành nhiều thành tích trên đấu trường SEA Games nhờ công lớn của kình ngư Nguyễn Thị Ánh Viên. Tại SEA Games 30 năm 2019, bơi lội Việt Nam đoạt 11 HCV, 5 HCB, 8 HCĐ. Với thành tích này, bơi lội Việt Nam xếp thứ 2 Đông Nam Á sau Singapore (23 HCV).

                    <br><br>Tại SEA Games 30, Ánh Viên mang về 6 HCV. Kình ngư 16 tuổi Trần Hưng Nguyên mang về 2 HCV ở nội dung 200m và 400m hỗn hợp. Nguyễn Huy Hoàng mang về 2 HCV ở nội dung 400m và 1.500m tự do. Trần Tấn Triệu mang về 1 HCV cự ly bơi 10km trên biển.
                    
                    <br><br>Tại SEA Games 31 trên sân nhà, đội tuyển bơi Việt Nam với 31 VĐV được giao chỉ tiêu giành từ 6 - 8 HCV. Điều đáng nói tại đại hội này, ngoài Ánh Viên đã từ giã đội tuyển, do nội dung bơi 10km trên biển không được chủ nhà Việt Nam tổ chức nên bơi lội Việt Nam mất luôn cơ hội bảo vệ chiếc HCV mà Trần Tấn Triệu đang nắm giữ.
                    
                    <br><br>Không có Ánh Viên và Tấn Triệu, niềm hy vọng được đặt lên vai các kình ngư nam: Nguyễn Huy Hoàng, Trần Hưng Nguyên, Phạm Thanh Bảo, Nguyễn Hữu Kim Sơn, Hoàng Quý Phước, Lê Nguyễn Paul... Tại SEA Games 31, Nguyễn Quang Thuấn - em trai kình ngư Nguyễn Thị Ánh Viên - cũng lần đầu tiên góp mặt tại đại hội.
                    
                    
                    <br><br>Theo thông tin của Tuổi Trẻ, kình ngư Nguyễn Huy Hoàng sẽ tham dự 4 nội dung, trong đó có 3 nội dung cá nhân là 400m, 800m, 1.500m tự do. Là niềm hy vọng lớn nhất của bơi lội Việt Nam tại SEA Games 31, áp lực đặt lên vai Huy Hoàng lúc này là không nhỏ.
                    
                    <br><br>Singapore vẫn là số 1
                    
                    <br><br>Tại SEA Games 31, môn bơi sẽ thi đấu 40 nội dung, trong đó có 34 nội dung cá nhân và 6 nội dung tiếp sức. Để chuẩn bị cho SEA Games, đội tuyển bơi lội Việt Nam với 11 thành viên trong đó có 2 HLV và 9 VĐV trọng điểm đã sang Hungary tập huấn. Dự kiến ngày 23-4, đội tuyển bơi Việt Nam sẽ về đến Hà Nội và tập luyện tại bể bơi Cung thể thao dưới nước Mỹ Đình để chờ ngày tranh tài tại đại hội.
                    
                    <br><br>Cách đây 2 ngày, Hiệp hội Bơi lội Singapore đã công bố danh sách 23 VĐV đội tuyển bơi quốc gia tranh tài tại SEA Games 31. Trong số các VĐV này, các kình ngư hàng đầu của bơi lội Singapore là Joseph Schooling, Quah Zheng Wen vẫn có mặt. Trong số 23 HCV của bơi Singapore tại SEA Games 30, Schooling và Zheng Wen đóng góp đến 16 HCV cá nhân và tiếp sức.
                    
                    <br><br>Bà Lê Thanh Huyền - phụ trách bộ môn bơi (Tổng cục TDTT) kiêm lãnh đội tuyển bơi Việt Nam tại SEA Games 31 - cho biết Singapore vẫn là số 1 của Đông Nam Á và không có đối thủ. Do Singapore rất mạnh ở các nội dung thi đấu của nữ nên tại SEA Games này, khi Việt Nam vắng mặt Ánh Viên, đây sẽ là cơ hội cho các kình ngư nữ trẻ của Singapore thâu tóm huy chương. Dù vậy, đội tuyển bơi Việt Nam sẽ cố gắng hết sức để có thể đạt được mục tiêu huy chương đã đề ra.
                    
                    <br><br>Theo thông tin của Tuổi Trẻ, một trong những khó khăn của bơi lội Việt Nam cũng như công tác tổ chức SEA Games 31 là hiện trang thiết bị thi đấu của môn này vẫn chưa được lắp đặt tại Cung thể thao dưới nước. Vì vậy, kế hoạch tổ chức giải bơi tiền SEA Games để kiểm tra trang thiết bị, vận hành hệ thống kỹ thuật đã bị lùi lại nhiều lần mà chưa biết có thể diễn ra vào ngày nào.
                    
                    `
				},
				{
					title: `Federer ấn định ngày trở lại`,
					subTitle: `Federer góp mặt ở giải ATP 500 trên sân nhà từ 24 đến 30/10. Anh từng 10 lần vô địch Basel Open, thắng 75 và thua chín trận. Danh hiệu gần nhất của Federer cũng là tại giải này, tháng 10/2019. Hai năm gần đây Basel Open không được tổ chức vì Covid-19.`,
					image: './assets/images/others/img3.jpg',
					content: ` 
                    <br><br>Federer góp mặt ở giải ATP 500 trên sân nhà từ 24 đến 30/10. Anh từng 10 lần vô địch Basel Open, thắng 75 và thua chín trận. Danh hiệu gần nhất của Federer cũng là tại giải này, tháng 10/2019. Hai năm gần đây Basel Open không được tổ chức vì Covid-19.
                    
                    <br><br>Bên cạnh 20 Grand Slam, Federer có 28 Masters 1000 trong 103 danh hiệu sự nghiệp - nhiều thứ hai lịch sử. Ảnh: ATP
                    <br><br>Bên cạnh 20 Grand Slam, Federer có 28 Masters 1000 trong 103 danh hiệu sự nghiệp - nhiều thứ hai lịch sử. Ảnh: ATP
                    
                    <br><br>Basel Open nhiều khả năng không phải sự kiện đầu tiên Federer chơi ở mùa này. Tay vợt Thụy Sĩ có thể thi đấu sau Wimbledon, và đã xác nhận góp mặt ở giải đồng đội Laver Cup vào tháng 9 tại London. Rafael Nadal cũng có tên trong thành phần tuyển châu Âu ở giải này.
                    
                    <br><br>Federer nghỉ thi đấu từ tháng 7/2021, sau khi bị loại ở tứ kết Wimbledon. Anh trải qua ba ca phẫu thuật đầu gối trong 18 tháng và gần đây trở lại sân tập sau thời gian dài hồi phục tại phòng vật lý trị liệu. Federer sẽ tròn 41 tuổi vào 8/8 và từng thừa nhận lên bàn mổ để phục vụ chất lượng cuộc sống, hơn là để thi đấu đỉnh cao.
                    
                    <br><br>Truyền thông Thụy Sĩ đánh giá Federer khó dự Grand Slam năm nay. Khi trở lại, anh còn cơ hội góp mặt ở Mỹ Mở rộng nhưng có thể sẽ bỏ qua sự kiện này để tập trung cho Laver Cup – giải đấu Federer là đồng sáng lập cùng huyền thoại Rod Laver.
                    
                    <br><br>Federer sở hữu 20 Grand Slam, nhưng chức vô địch gần nhất là từ bốn năm trước ở Australia Mở rộng. Trong thời gian anh sa sút, hai đàn em Novak Djokovic và Nadal giành nhiều danh hiệu để san bằng và vượt kỷ lục 20 Grand Slam.
                    
                    <br><br>David Ferrer, tay vợt cùng thời với Federer, cho rằng ngôi sao Thụy Sĩ sẽ sớm công bố quyết định giải nghệ. "Tôi không nói Federer hết cơ hội đến gần một Grand Slam. Nhưng việc nghỉ hai năm dường như đã là dấu chấm hết của anh ấy", Ferrer nói trong cuộc phỏng vấn với La Vanguardia hôm 26/4. "Thể lực chắc chắn là vấn đề lớn nhất của Federer. Anh ấy không thể đấu những tay vợt trẻ hàng đầu lúc này. Federer không cần chứng minh gì nữa và có thể vào cuối năm anh ấy sẽ dừng lại".
                    
                    <br><br>Federer đứng thứ 41 ATP tuần này, vị trí thấp nhất của anh trong hai thập kỷ qua.`
				},
				{
					title: `Robben lần đầu chạy marathon`,
					subTitle: `Cựu tiền đạo Bayern và Real, Arjen Robben hoàn thành cuộc thi marathon đầu tiên với thành tích gần 3 giờ 14 phút tại Rotterdam ngày 10/4`,
					image: './assets/images/others/img4.jpg',
					content: `Theo báo Anh Sportmail, với tốc độ (pace) 4 phút 14 giây mỗi km, Robben thuộc nửa đầu trong tổng số 11.720 chân chạy trong nửa đầu cuộc đua dài 42,195 km. Tốc độ của cựu tuyển thủ Hà Lan giảm đáng kể trong gần 10 km cuối cùng, nhưng anh vẫn cán đích sau 3 giờ 13 phút 56 giây, tức pace trung bình 4 phút 36 giây.

                    <br><br>"Cựu cầu thủ chạy cánh Hà Lan cho thấy anh vẫn còn niềm đam mê tốc độ khi vượt qua rào cản đau đớn để hoàn thành giải chạy Rotterdam Marathon", Sportmail bình luận về cuộc thi marathon đầu tiên của Robben.
                    <br><br>Tuy nhiên, cựu cầu thủ 38 tuổi không mấy hào hứng. Robben nói: "Thực sự không vui chút nào. Đây đúng là cuộc chiến thực sự. Người hâm mộ hai bên đường giúp tôi rất nhiều. Cảm ơn mọi người. Ban đầu, tôi còn quan tâm tới thời gian, nhưng sau đó chỉ cố gắng sống sót qua cuộc chạy marathon đầu tiên. Nhưng tôi cảm nhận điều gì đó ảnh hưởng đến cơ thể của mình, và tôi vẫn có thể cán đích".

                    <br><br>Robben từng là một trong những cầu thủ chạy cánh hay nhất thế giới, và trở thành cầu thủ chạy nhanh nhất thế giới với tốc độ 37km/h khi đua với trung vệ Sergio Ramos trong trận thắng 5-1 của Hà Lan trước Tây Ban Nha ở World Cup 2014. Trước đó một năm, FIFA xác nhận cầu thủ của Arsenal lúc đó Theo Walcott chạy nhanh nhất thế giới với tốc độ 35,7 km/giờ.
                    <br><br>Robben không phải cầu thủ bóng đá đầu tiên thử sức trên đường đua marathon. Năm 2013, Kevin Kilbane - cựu cầu thủ CH Ireland từng đá cho Everton và Wigan - hoàn tất London Marathon với thời gian gần như tương tự với Robben tại Rotterdam Marathon.

                    <br><br>Cựu tiền đạo Liverpool và Man Utd, Michael Owen từng mất 3 giờ 45 phút tại cuộc đua ở London năm 2014. Anh sau đó thừa nhận việc tập luyện cho marathon rất khác so với sự nghiệp bóng đá dựa trên sức mạnh và tốc độ.

                    <br><br>Một năm sau khi giải nghệ năm 2019, Robben trở lại khoác áo CLB thời niên thiếu Groningen. Nhưng ngay trận đầu tiên tại giải vô địch Hà Lan mùa 2020-2021, Robben chấn thương bắp chân và chỉ thi đấu 28 phút. Ngôi sao Hà Lan cần bảy tháng để hồi phục, trở lại vào tháng 4/2021, và chỉ vào sân thêm sáu lần ở giải vô địch Hà Lan. Hè 2021, anh giải nghệ lần hai.

                    <br><br>Vào thời đỉnh cao, Robben từng giành 20 danh hiệu với Bayern, trong đó có tám Bundesliga và một Champions League. Robben cũng đoạt hai Ngoại hạng Anh trong màu áo Chelsea và một La Liga cùng Real. Ở tuyển Hà Lan, anh ghi 37 bàn qua 96 trận, và là nguồn cảm hứng đưa Hà Lan vào chung kết World Cup 2010. Nếu anh tận dụng thành công cơ hội đối mặt với thủ thành Iker Cassillas trận này, Hà Lan có thể đã chiến thắng và lần đầu tiên giành World Cup.
`
				},
				{
					title: `The Open 2022 hy vọng phá kỷ lục khán giả`,
					subTitle: `Major lâu đời nhất do Royal & Ancient (R&A) chủ trì năm nay dự kiến lập mốc mới về lượng người xem thực địa ở kỳ đấu thứ 150 ở Scotland`,
					image: './assets/images/others/img5.jpg',
					content: `
                    The Open ra mắt từ 1860. Sự kiện năm nay diễn ra từ 14/7 đến 17/7, quy tụ 156 đấu thủ, tính cả Tiger Woods. Còn sân đấu Old Course thuộc CLB golf St. Andrews, vốn được xem là "cái nôi của golf thế giới".

                    <br><br>Hôm 26/4, R&A công bố 1,3 triệu lượt đăng ký vào sân xem giải. Ban tổ chức dự kiến dành hơn 20.000 vé miễn phí cho người dưới 16 tuổi trong kế hoạch phát hành tổng cộng 290.000 vé đại chúng.
                    <br><br>Với số lượng này, các vòng tập sẽ gộp khoảng 80.000 người, trong khi mỗi vòng chính thu hút khoảng 52.000 fan. Tổ chức chủ quản giải thống kê được 40% người muốn đi xem giải ở tuổi dưới 25.

                    <br><br>Kỷ lục khán giả thực địa The Open đang ở mức 239.000, ghi nhận hồi năm 2000. Năm ấy, Woods lần đầu đoạt chiếc cup Claret Jug, sau khi thắng hai sự kiện đồng đẳng – PGA Championship và US Open. Đến tháng 4/2001, anh ẵm thêm Masters để sở hữu trọn bộ grand slam của golf đỉnh cao.

                    <br><br>The Open 2019 ở Royal Portrush suýt phá kỷ lục khán giả tại chỗ của kỳ đấu năm 2000, khi ghi nhận tổng cộng 237.500 người vào sân theo dõi với kết quả Shane Lowry mang chức vô địch đầu tiên về cho Bắc Ireland. Do Covid-19, major do R&A tổ chức bị huỷ năm 2020 còn năm trước hạn chế fan vào cổng khi Collin Morikawa đăng quang.

                    <br><br>Theo ước tính của Trung tâm nghiên cứu chuyên ngành thể thao (Anh), kỳ đấu sắp tới sẽ mang lại các lợi ích kinh tế tương đương 340 triệu USD cho Scotland.

                    <br><br>Bên cạnh việc nắm The Open, R&A còn cùng Hiệp hội golf Mỹ (USGA) ra luật chơi đồng thời phát triển golf thế giới trong đó USGA phụ trách bản xứ và Mexico, còn lại thuộc thẩm quyền của R&A.
                            `
				}
			]
		}
	]
	renderHeader(data)
	handleUser()
	search(data)
	const handleLine = (hash) => {
		const item = document.querySelector(
			`.header__nav__link[data-page="${hash.replace(/#|\?\w*/g, '')}"]`
		)
		const line = document.querySelector('.header__nav__line')
		const left = item.offsetLeft
		const width = item.offsetWidth
		line.style.left = left + 'px'
		line.style.width = width + 'px'
	}
	const handlePath = () => {
		const hash = window.location.hash === '' ? '#home' : window.location.hash
		const search = hash.match(/\?\w*/)?.[0] || ''
		switch (hash + search) {
			case '#home':
				renderHome(data)
				break
			default:
				renderContent(data, hash, search)
				break
		}
		handleLine(hash)
	}
	window.addEventListener('popstate', handlePath)
	window.addEventListener('load', handlePath)
	window.addEventListener('resize', () => {
		handleLine(window.location.hash === '' ? '#home' : window.location.hash)
	})
	handleLogin()
})()
