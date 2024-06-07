import type { MetaFunction } from '@remix-run/node';
import clsx from 'clsx';
import { useState } from 'react';
import { flushSync } from 'react-dom';
import { Switch } from 'ui/switch';

export const meta: MetaFunction = () => {
  return [{ title: '孫子兵法' }, { name: 'description', content: '孫子兵法' }];
};

export default function Index() {
  const [isVertical, setIsVertical] = useState(true);

  const onCheckedChange = (value: boolean) => {
    document.startViewTransition(() => {
      flushSync(() => {
        setIsVertical(value);
      });
    });
  };

  return (
    <main className={clsx({ vertical: isVertical })}>
      <h1>孫子兵法</h1>

      <Switch onCheckedChange={onCheckedChange} checked={isVertical} />
      <a href="./test.xlsx" download>
        download test
      </a>

      <h2>始計第一</h2>
      <p>孫子曰：兵者，國之大事，死生之地，存亡之道，不可不察也。</p>
      <p>
        故經之以五事，校之以計，而索其情，一曰道，二曰天，三曰地，四曰將，五曰法。
      </p>
      <p>
        道者，令民與上同意也，可與之死，可與之生，而不畏危。天者，陰陽，寒暑，時制也。地者，遠近，險易，廣狹，死生也。將者，智，信，仁，勇，嚴也。法者，曲制，官道，主用也。凡此五者，將莫不聞，知之者勝，不知者不勝。
      </p>
      <p>
        故校之以計，而索其情。曰：主孰有道，將孰有能，天地孰得，法令孰行，兵眾孰強，士卒孰練，賞罰孰明，吾以此知勝負矣。將聽吾計，用之必勝，留之；將不聽吾計，用之必敗，去之。
      </p>
      <p>計利以聽，乃為之勢，以佐其外；勢者，因利而制權也。</p>
      <p>
        兵者，詭道也。故能而示之不能，用而示之不用，近而示之遠，遠而示之近。利而誘之，亂而取之，實而備之，強而避之，怒而撓之，卑而驕之，佚而勞之，親而離之。攻其無備，出其不意，此兵家之勝，不可先傳也。
      </p>
      <p>
        夫未戰而廟算勝者，得算多也；未戰而廟算不勝者，得算少也；多算勝，少算不勝，而況於無算乎？吾以此觀之，勝負見矣。
      </p>

      <h2>作戰第二</h2>
      <p>
        孫子曰：凡用兵之法，馳車千駟，革車千乘，帶甲十萬；千里饋糧，則內外之費賓客之用，膠漆之材，車甲之奉，日費千金，然後十萬之師舉矣。
      </p>
      <p>
        其用戰也，勝久則鈍兵挫銳，攻城則力屈，久暴師則國用不足。夫鈍兵，挫銳，屈力，殫貨，則諸侯乘其弊而起，雖有智者，不能善其後矣！故兵聞拙速，未睹巧之久也；夫兵久而國利者，未之有也。
      </p>
      <p>
        故不盡知用兵之害者，則不能盡知用兵之利也。善用兵者，役不再籍，糧不三載，取用于國，因糧于敵，故軍食可足也。國之貧于師者遠輸，遠輸則百姓貧，近于師者貴賣，貴賣則百姓財竭，財竭則急于丘役，力屈財殫，中原內虛于家，百姓之費，十去其七，公家之費，破車罷馬，甲冑矢弩，戟楯蔽櫓，丘牛大車，十去其六。
      </p>
      <p>
        故智將務食於敵，食敵一鍾，當吾二十鍾，秆一石，當我二十石。故殺敵者怒也，取敵之利者貨也。故車戰，得車十乘以上，賞其先得者，而更其旌旗，車雜而乘之，卒善而養之，是謂勝敵而益強。
      </p>
      <p>故兵貴勝，不貴久；故知兵之將，民之司命，國家安危之主也。</p>

      <h2>謀攻第三</h2>
      <p>
        孫子曰：凡用兵之法，全國為上，破國次之；全旅為上，破旅次之；全卒為上，破卒次之；全伍為上，破伍次之。是故百戰百勝，非善之善者也；不戰而屈人之兵，善之善者也。
      </p>
      <p>
        故上兵伐謀，其次伐交，其次伐兵，其下攻城。攻城之法，為不得已；修櫓轒轀，具器械，三月而後成；距闉，又三月而後已；將不勝其忿，而蟻附之，殺士卒三分之一，而城不拔者，此攻之災也。
      </p>
      <p>
        故善用兵者，屈人之兵，而非戰也；拔人之城，而非攻也；毀人之國，而非久也。必以全爭于天下，故兵不頓，利可全，此謀攻之法也。故用兵之法，十則圍之，五則攻之，倍則分之，敵則能戰之，少則能守之，不若則能避之。故小敵之堅，大敵之擒也。
      </p>
      <p>
        夫將者，國之輔也，輔周則國必強，輔隙則國必弱。故軍之所以患于君者三：不知三軍之不可以進，而謂之進；不知三軍之不可以退，而謂之退；是謂縻軍。不知三軍之事，而同三軍之政，則軍士惑矣。不知三軍之權，而同三軍之任，則軍士疑矣。三軍既惑且疑，則諸侯之難至矣，是謂亂軍引勝。
      </p>
      <p>
        故知勝者有五：知可以戰與不可以戰者勝，識眾寡之用者勝，上下同欲者勝，以虞待不虞者勝，將能而君不御者勝；此五者，知勝之道也。
      </p>
      <p>
        故曰：知彼知己，百戰不殆；不知彼而知己，一勝一負；不知彼，不知己，每戰必敗。
      </p>

      <h2>軍形第四</h2>
      <p>
        孫子曰：昔之善戰者，先為不可勝，以待敵之可勝，不可勝在己，可勝在敵。故善戰者，能為不可勝，不能使敵必可勝。故曰：勝可知，而不可為。
      </p>
      <p>
        不可勝者，守也；可勝者，攻也。守則不足，攻則有餘。善守者，藏于九地之下；善攻者，動于九天之上，故能自保而全勝也。
      </p>
      <p>
        見勝，不過眾人之所知，非善之善者也。戰勝，而天下曰善，非善之善者也。故舉秋毫，不為多力；見日月，不為明目；聞雷霆，不為聰耳。古之善戰者，勝于易勝者；故善戰者之勝也，無智名，無勇功。故其戰勝不忒，不忒者，其措必勝，勝已敗者也。故善戰者，立于不敗之地，而不失敵之敗也。是故勝兵先勝，而後求戰；敗兵先戰，而後求勝。
      </p>
      <p>
        善用兵者，修道而保法，故能為勝敗之政。兵法：「一曰度，二曰量，三曰數，四曰稱，五曰勝；地生度，度生量，量生數，數生稱，稱生勝。」故勝兵若以鎰稱銖，敗兵若以銖稱鎰。勝者之戰民也，若決積水于千仞之谿，形也。
      </p>

      <h2>兵勢第五</h2>
      <p>
        孫子曰：凡治眾如治寡，分數是也。鬥眾如鬥寡，形名是也。三軍之眾，可使必受敵而無敗者，奇正是也。兵之所加，如以碬投卵者，虛實是也。
      </p>
      <p>
        凡戰者，以正合，以奇勝。故善出奇者，無窮如天地，不竭如江河，終而復始，日月是也；死而復生，四時是也。聲不過五，五聲之變，不可勝聽也。色不過五，五色之變，不可勝觀也。味不過五，五味之變，不可勝嘗也。戰勢不過奇正，奇正之變，不可勝窮也。奇正相生，如循環之無端，孰能窮之哉！
      </p>
      <p>
        激水之疾，至于漂石者，勢也。鷙鳥之擊，至于毀折者，節也。是故善戰者，其勢險，其節短，勢如張弩，節如機發。
      </p>
      <p>
        紛紛紜紜，鬥亂，而不可亂也。渾渾沌沌，形圓，而不可敗也。亂生于治，怯生于勇，弱生于強。治亂，數也。勇怯，勢也。強弱，形也。故善動敵者，形之，敵必從之；予之，敵必取之；以利動之，以實待之。
      </p>
      <p>
        故善戰者，求之于勢，不責于人，故能擇人任勢；任勢者，其戰人也，如轉木石，木石之性，安則靜，危則動，方則止，圓則行。故善戰人之勢，如轉圓石于千仞之山者，勢也。
      </p>

      <h2>虛實第六</h2>
      <p>
        孫子曰：凡先處戰地而待敵者佚，後處戰地而趨戰者勞。故善戰者，致人而不致于人。能使敵人自至者，利之也；能使敵不得至者，害之也。故敵佚能勞之，飽能飢之，安能動之。
      </p>
      <p>
        出其所不趨，趨其所不意；行千里而不勞者，行于無人之地也；攻而必取者，攻其所不守也；守而必固者，守其所不攻也。故善攻者，敵不知其所守；善守者，敵不知其所攻。微乎微乎！至于無形；神乎神乎！至于無聲，故能為敵之司命。進而不可禦者，衝其虛也；退而不可追者，速而不可及也。故我欲戰，敵雖高壘深溝，不得不與我戰者，攻其所必救也；我不欲戰，雖劃地而守之，敵不得與我戰者，乖其所之也。
      </p>
      <p>
        故形人而我無形，則我專而敵分，我專為一，敵分為十，是以十攻其一也。則我眾而敵寡，能以眾擊寡，則我之所與戰者，約矣。
      </p>
      <p>
        吾所與戰之地不可知，不可知，則敵所備者多，敵所備者多，則我所與戰者寡矣。故備前則後寡，備後則前寡，備左則右寡，備右則左寡，無所不備，則無所不寡。寡者，備人者也；眾者，使人備己者也。
      </p>
      <p>
        故知戰之地，知戰之日，則可千里而會戰。不知戰地，不知戰日，則左不能救右，右不能救左，前不能救後，後不能救前，而況遠者數十里，近者數里乎？以吾度之，越人之兵雖多，亦奚益于勝哉？故曰：勝可為也，敵雖眾，可使無鬥。
      </p>
      <p>
        故策之而知得失之計，作之而知動靜之理，形之而知死生之地，角之而知有餘不足之處。故形兵之極，至于無形；無形，則深間不能窺，智者不能謀。因形而措勝于眾，眾不能知，人皆知我所以勝之形，而莫知吾所以制勝之形；故其戰勝不復，而應形於無窮。
      </p>
      <p>
        夫兵形象水，水之形，避高而趨下：兵之形，避實而擊虛；水因地而制流，兵因敵而制勝。故兵無常勢，水無常形；能因敵變化而取勝，謂之神。故五行無常勝，四時無常位，日有短長，月有死生。
      </p>

      <h2>軍爭第七</h2>
      <p>
        孫子曰：凡用兵之法，將受命於君，合軍聚眾，交和而舍，莫難於軍爭。軍爭之難者，以迂為直，以患為利。故迂其途，而誘之以利，後人發，先人至，此知迂直之計者也。故軍爭為利，軍爭為危。
      </p>
      <p>
        舉軍而爭利，則不及；委軍而爭利，則輜重捐。是故卷甲而趨，日夜不處，倍道兼行，百里而爭利，則擒三將軍，勁者先，疲者後，其法十一而至；五十里而爭利，則蹶上將軍，其法半至；卅里而爭利，則三分之二至。是故軍無輜重則亡，無糧食則亡，無委積則亡。故不知諸侯之謀者，不能豫交；不知山林、險阻、沮澤之形者，不能行軍，不能鄉導者，不能得地利。
      </p>
      <p>
        故兵以詐立，以利動，以分合為變者也，故其疾如風，其徐如林，侵掠如火，不動如山，難知如陰，動如雷霆。掠鄉分眾，廓地分利，懸權而動，先知迂直之計者勝，此軍爭之法也。
      </p>
      <p>
        軍政曰：「言不相聞，故為金鼓；視不相見，故為旌旗。」夫金鼓旌旗者，所以一人之耳目也；人既專一，則勇者不得獨進，怯者不得獨退，此用眾之法也。故夜戰多火鼓，晝戰多旌旗，所以變人之耳目也。
      </p>
      <p>
        故三軍可奪氣，將軍可奪心。是故朝氣銳，晝氣惰，暮氣歸；故善用兵者，避其銳氣，擊其惰歸，此治氣者也。以治待亂，以靜待譁，此治心者也。以近待遠，以佚待勞，以飽待飢，此治力者也。
      </p>
      <p>
        無邀正正之旗，勿擊堂堂之陣，此治變者也；故用兵之法，高陵勿向，背邱勿逆，佯北勿從，銳卒勿攻，餌兵勿食，歸師勿遏，圍師必闕，窮寇勿迫，此用兵之法也。
      </p>

      <h2>九變第八</h2>
      <p>
        孫子曰：凡用兵之法，將受命於君，合軍聚眾；圮地無舍，衢地合交，絕地無留，圍地則謀，死地則戰，途有所不由，軍有所不擊，城有所不攻，地有所不爭，君命有所不受。故將通于九變之利者，知用兵矣。將不通于九變之利者，雖知地形，不能得地之利矣。治兵不知九變之術，雖知地利，不能得人之用矣。
      </p>
      <p>
        是故智者之慮，必雜于利害，雜于利而務可信也，雜于害而患可解也。是故屈諸侯者以害，役諸侯者以業，趨諸侯者以利。
      </p>
      <p>
        故用兵之法，無恃其不來，恃吾有以待之；無恃其不攻，恃吾有所不可攻也。
      </p>
      <p>
        故將有五危：必死可殺，必生可虜，忿速可侮，廉潔可辱，愛民可煩；凡此五危，將之過也，用兵之災也。覆軍殺將，必以五危，不可不察也。
      </p>

      <h2>行軍第九</h2>
      <p>
        孫子曰：凡處軍相敵：絕山依谷，視生處高，戰隆無登，此處山之軍也。絕水必遠水，客絕水而來，勿迎于水內，令半濟而擊之利。欲戰者，無附于水而迎客，視生處高，無迎水流，此處水上之軍也。絕斥澤，惟亟去勿留，若交軍于斥澤之中，必依水草，而背眾樹，此處斥澤之軍也。平陸處易，右背高，前死後生，此處平陸之軍也。凡此四軍之利，黃帝之所以勝四帝也。
      </p>
      <p>
        凡軍好高而惡下，貴陽而賤陰，養生處實，軍無百疾，是謂必勝。邱陵隄防，必處其陽，而右背之，此兵之利，地之助也。上雨水沫至，欲涉者，待其定也。凡地有絕澗、天井、天牢、天羅、天陷、天隙，必亟去之，勿近也；吾遠之，敵近之；吾迎之，敵背之。軍旁有險阻、潢井、蒹葭、林木、翳薈者，必謹覆索之，此伏姦之所也。
      </p>
      <p>
        敵近而靜者，恃其險也。遠而挑戰者，欲人之進也。其所居易者，利也。眾樹動者，來也。眾草多障者，疑也。鳥起者，伏也。獸駭者，覆也。塵：高而銳者，車來也；卑而廣者，徒來也；散而條違者，樵採也；少而往來者，營軍也。辭卑而益備者，進也。辭強而進驅者，退也。輕車先出其側者，陣也。無約而請和者，謀也。奔走而陳兵者，期也。半進半退者，誘也。仗而立者，飢也。汲而先飲者，渴也。見利而不進者，勞也。鳥集者，虛也。夜呼者，恐也。軍擾者，將不重也。旌旗動者，亂也。吏怒者，倦也。殺馬肉食者，軍無糧也。懸缶不返其舍者，窮寇也。諄諄翕翕，徐與人言者，失眾也。數賞者，窘也。數罰者，困也。先暴而後畏其眾者，不精之至也。來委謝者，欲休息也。兵怒而相迎，久而不合，又不相去，必謹察之。
      </p>
      <p>
        兵非貴益多，惟無武進，足以併力料敵取人而已。夫惟無慮而易敵者，必擒于人。
      </p>
      <p>
        卒未親附而罰之，則不服，不服則難用。卒已親附而罰不行，則不可用。故令之以文，齊之以武，是謂必取。令素行以教其民，則民服；令不素行以教其民，則民不服；令素行，與眾相得也。
      </p>

      <h2>地形第十</h2>
      <p>
        孫子曰：地形有通者，有挂者，有支者，有隘者，有險者，有遠者。我可以往，彼可以來，曰通；通形者，先居高陽，利糧道以戰，則利。可以往，難以返，曰挂；挂形者，敵無備，出而勝之，敵若有備，出而不勝，難以返，不利。我出而不利，彼出而不利，曰支；支形者，敵雖利我，我無出也；引而去之，令敵半出而擊之，利。隘形者，我先居之，必盈以待敵；若敵先居之，盈而勿從，不盈而從之。險形者，我先居之，必居高陽以待敵；若敵先居之，引而去之，勿從也。遠形者，勢均，難以挑戰，戰而不利。凡此六者，地之道也，將之至任，不可不察也。
      </p>
      <p>
        故兵有走者，有弛者，有陷者，有崩者，有亂者，有北者；凡此六者，非天地之災，將之過也。夫勢均，以一擊十，曰走。卒強吏弱，曰弛。吏強卒弱，曰陷。大吏怒而不服，遇敵懟而自戰，將不知其能，曰崩。將弱不嚴，教道不明，吏卒無常，陳兵縱橫，曰亂。將不能料敵，以少合眾，以弱擊強，兵無選鋒，曰北。凡此六者，敗之道也。將之至任，不可不察也。
      </p>
      <p>
        夫地形者，兵之助也。料敵制勝，計險阨遠近，上將之道也。知此而用戰者，必勝；不知此而用戰者必敗。故戰道必勝；主曰：無戰；必戰可也。戰道不勝，主曰必戰，無戰可也。故進不求名，退不避罪，唯民是保，而利于主，國之寶也。
      </p>
      <p>
        視卒如嬰兒，故可與之赴深谿；視卒如愛子，故可與之俱死。厚而不能使，愛而不能令，亂而不能治，譬若驕子，不可用也。
      </p>
      <p>
        知吾卒之可以擊，而不知敵之不可擊，勝之半也；知敵之可擊，而不知吾卒之不可擊，勝之半也。知敵之可擊，知吾卒之可以擊，而不知地形之不可以戰，勝之半也。故知兵者，動而不迷，舉而不窮。故曰：知彼知己，勝乃不殆；知天知地，勝乃可全。
      </p>

      <h2>九地第十一</h2>
      <p>
        孫子曰：用兵之法，有散地，有輕地，有爭地，有交地，有衢地，有重地，有圮地，有圍地，有死地。諸侯自戰其地者，為散地。入人之地而不深者，為輕地。我得則利，彼得亦利者，為爭地。我可以往，彼可以來者，為交地。諸侯之地三屬，先至而得天下之眾者，為衢地。入人之地深，背城邑多者，為重地。山林、險阻、沮澤，凡難行之道者，為圮地。所由入者隘，所從歸者迂，彼寡可以擊吾之眾者，為圍地。疾戰則存，不疾戰則亡者，為死地。是故散地則無戰，輕地則無止，爭地則無攻，交地則無絕，衢地則合交，重地則掠，圮地則行，圍地則謀，死地則戰。
      </p>
      <p>
        古之所謂善用兵者，能使敵人前後不相及，眾寡不相恃，貴賤不相救，上下不相收，卒離而不集，兵合而不齊。合于利而動，不合于利而止。敢問：「敵眾整而將來，待之若何？」曰：「先奪其所愛，則聽矣；兵之情主速，乘人之不及，由不虞之道，攻其所不戒也。」
      </p>
      <p>
        凡為客之道，深入則專，主人不克，掠于饒野，三軍足食，謹養而無勞，併氣積力，運兵計謀，為不可測，投之無所往，死且不北，死焉不得，士人盡力。兵士甚陷則不懼，無所往則固，深入則拘，不得已則鬥。是故，其兵不修而戒，不求而得，不約而親，不令而信，禁祥去疑，至死無所之。吾士無餘財，非惡貨也；無餘命，非惡壽也。令發之日，士卒坐者涕沾襟，偃臥者涕交頤，投之無所往，則諸劌之勇也。
      </p>
      <p>
        故善用兵者，譬如率然；率然者，常山之蛇也，擊其首，則尾至，擊其尾，則首至，擊其中，則首尾俱至。敢問：「兵可使如率然乎？」曰：「可。」夫吳人與越人相惡也，當其同舟濟而遇風，其相救也如左右手。是故，方馬埋輪，未足恃也，齊勇若一，政之道也；剛柔皆得，地之理也。故善用兵者，攜手若使一人，不得已也。
      </p>
      <p>
        將軍之事，靜以幽，正以治，能愚士卒之耳目，使之無知。易其事，革其謀，使人無識，易其居，迂其途，使人不得慮。帥與之期，如登高而去其梯，帥與之深，入諸侯之地而發其機。若驅群羊，驅而往，驅而來，莫知所之。聚三軍之眾，投之于險，此將軍之事也。九地之變，屈伸之利，人情之理，不可不察也。
      </p>
      <p>
        凡為客之道，深則專，淺則散；去國越境而師者，絕地也；四達者，衢地也；入深者，重地也；入淺者，輕地也；背固前隘者，圍地也；無所往者，死地也。是故散地吾將一其志，輕地吾將使之屬，爭地吾將趨其後，交地吾將謹其守，衢地吾將固其結，重地吾將繼其食，圮地吾將進其途，圍地吾將塞其闕，死地吾將示之以不活。故兵之情，圍則禦，不得已則鬥，逼則從。
      </p>
      <p>
        是故不知諸侯之謀者，不能預交，不知山林險阻沮澤之形者，不能行軍，不用鄉導者，不能得地利，此三者不知一，非霸王之兵也。夫霸王之兵，伐大國則其眾不得聚，威加于敵，則其交不得合。是故不爭天下之交，不養天下之權，信己之私，威加于敵，故其城可拔，其國可墮。施無法之賞，懸無政之令，犯三軍之眾，若使一人。犯之以事，勿告以言；犯之以利，勿告以害；投之亡地然後存，陷之死地然後生。夫眾陷于害，然後能為勝敗，故為兵之事，在于順詳敵之意，併力一向，千里殺將，是謂巧能成事。
      </p>
      <p>
        是故政舉之日，夷關折符，無通其使，厲于廊廟之上，以誅其事，敵人開闔，必亟入之。先其所愛，微與之期，賤墨隨敵，以決戰爭。是故始如處女，敵人開戶，後如脫兔，敵不及拒。
      </p>

      <h2>火攻第十二</h2>
      <p>
        孫子曰：凡火攻有五：一曰火人，二曰火積，三曰火輜，四曰火庫，五曰火隊。行火必有因，煙火必素具。發火有時，起火有日。時者，天之燥也。日者，月在箕壁翼軫也。凡此四宿者，風起之日也。
      </p>
      <p>
        凡火攻，必因五火之變而應之，火發于內，則早應之于外。火發而其兵靜者，待而勿攻。極其火力，可從而從之，不可從而止。火可發于外，無待于內，以時發之。火發上風，無攻下風，晝風久，夜風止。凡軍必知五火之變，以數守之。故以火佐攻者明，以水佐攻者強，水可以絕，不可以奪。
      </p>
      <p>
        夫戰勝攻取，而不修其攻者凶，命曰費留。故曰：明主慮之，良將修之，非利不動，非得不用，非危不戰。主不可以怒而興師，將不可以慍而致戰；合于利而動，不合于利而止。怒可以復喜，慍可以復悅，亡國不可以復存，死者不可以復生。故明君慎之，良將警之，此安國全軍之道也。
      </p>

      <h2>用間第十三</h2>
      <p>
        孫子曰：凡興師十萬，出征千里，百姓之費，公家之奉，日費千金，內外騷動，怠于道路，不得操事者，七十萬家，相守數年，以爭一日之勝，而愛爵祿百金，不知敵之情者，不仁之至也，非人之將也，非主之佐也，非勝之主也。故明君賢將，所以動而勝人，成功出于眾者，先知也；先知者，不可取于鬼神，不可象于事，不可驗于度；必取于人，知敵之情者也。
      </p>
      <p>
        故用間有五：有鄉間、有內間、有反間、有死間、有生間。五間俱起，莫知其道，是謂神紀，人君之寶也。鄉間者，因其鄉人而用之。內間者，因其官人而用之。反間者，因其敵間而用之。死間者，為誑事于外，令吾間知之，而傳于敵。生間者，反報也。
      </p>
      <p>
        故三軍之事，親莫親于間，賞莫厚于間，事莫密于間，非聖智不能用間，非仁義不能使間，非微妙不能得間之實。微哉，微哉，無所不用間也。間事未發而先聞者，間與所告者皆死。
      </p>
      <p>
        凡軍之所欲擊，城之所欲攻，人之所欲殺；必先知其守將，左右，謁者，門者，舍人之姓名，令吾間必索知之。必索敵間之來間我者，因而利之，導而舍之，故反間可得而使也。因是而知之，故鄉間內間可得而使也；因是而知之，故死間為誑事，可使告敵；因是而知之，故生間可使如期。五間之事，主必知之，知之必在于反間，故反間不可不厚也。
      </p>
      <p>
        昔殷之興也，伊摯在夏。周之興也，呂牙在殷。故明君賢將，能以上智為間者，必成大功，此兵之要，三軍之所恃而動也。
      </p>
    </main>
  );
}
