$(document).ready(function(){var e,t,a,r,o,n,s,i,l,c,u,p,d,v,m,h,f,y,b,w,M,g,k,S,G,R,A,D,x,z,C,B,N,T,j,Z,q,O,E,H;return H=$(window),Z=$("html, body"),q=$("title"),w=$('meta[name="description"]'),y=$(location).attr("href"),g=$("#page-wrap"),v=$("#signup-form"),G=$(".popup-block"),x=$(".logo, .main-navigation li a, .down-arrow"),R="http://",h=$(location).attr("hostname"),N=$("#signup-form"),T=$("#success-overlay"),p=$('input[name="fullname"]'),S=$('input[name="phone"]'),u=$('input[name="email"]'),n=$('input[name="bedrooms"]'),M=$('input[name="movedate"]'),D=$('textarea[name="question"]'),j=$("#success-overlay"),s=$(".close-btn"),t=/[a-zA-Z]/,a=/[a-zA-Z0-9]/,k=/\d{3}-\d{3}-\d{4}/,c=/[a-z0-9._%+-]+(@)+[a-zA-Z0-9.-]+\.+[a-z]{2,4}/,i=/\d{1,2}-\d{1,2}-\d{2}/,A=3,o=v.attr("action"),m="Come experience your life's next exciting chapter at Bainbridge Shady Grove Metro. New Rockville apartments steps away from Shady Grove Metro.",r="Explore the endless amenities at Bainbridge Shady Grove Metro. New Rockville, Maryland apartments near the Metro complete with fitness center, pool, parking and clubroom",d="One, two, and three bedroom apartments in Rockville, MD. Layouts with full-size washer and dryer, dual master bedrooms, and granite counters steps from the Shady Grove Metro.",C="View pictures of our brand new Shady Grove Metro apartments in Rockville, MD",B="Great stories start here. Sign up today for a tour of our brand new Shady Grove Metro apartments in Rockville, MD.",E=["/","/amenities/","/features/","/gallery/","/contact/"],O=["Brand New Shady Grove Metro Apartments in Rockville","Rockville Maryland Apartments Near Shady Grove Metro","Shady Grove Metro Apartments - Apartments in Rockville, MD","New Shady Grove Apartments Rockville, MD","Shady Grove Metro Apartments in Rockville, MD"],l=[m,r,d,C,B],Backbone.history.start({pushState:!0}),e=Backbone.Router.extend({}),z=new e,f=function(e){var t,a;return t=e.split("/"),a=t[3].split("#"),""!==t[3]?b("",t[3]):void 0},b=function(e,t){var a,r,o;return r=""!==e?"#"+e.attr("data-section-id"):t,"#top"===r?o=0:(a=$(r).offset(),o=a.top-84),$(Z).animate({scrollTop:o},"slow")},x.click(function(e){var t;return e.preventDefault(),t=$(this),b(t,"")}),H.scroll(function(){var e,t,a,r,o;return o=$(this).scrollTop(),o>=0&&464>=o?(a=E[0],t=O[0],e=l[0]):o>=465&&1014>=o?(a=E[1],t=O[1],e=l[1]):o>=1015&&1564>=o?(a=E[2],t=O[2],e=l[2]):o>=1565&&2114>=o?(a=E[3],t=O[3],e=l[3]):o>=2115&&2664>=o?(a=E[4],t=O[4],e=l[4]):(t=O[0],e=l[0]),r=a,q.html(t),w.attr("content",e),z.navigate(r,!0)}),N.submit(function(e){var r,s,l,d,v,m,h,f,y,b,w,g,G,R,x,z,C,B;if(e.preventDefault(),y=p.val(),R=S.val(),v=u.val(),s=n.val(),w=M.val(),z=D.val(),b=$(this),l=b.serialize(),h=[],f="",G="",d="",r="",g="",x="",(""===y||t.test(y)===!1)&&h.push("fullname"),""!==R&&k.test(R)===!1&&h.push("phone"),(""===v||c.test(v)===!1)&&h.push("email"),""!==s&&s>A&&h.push("bedrooms"),""!==w&&i.test(w)===!1&&h.push("movedate"),""!==z&&a.test(z)===!1&&h.push("question"),0===h.length)$.ajax({url:o,type:"POST",contentType:"application/json; charset=utf-8",data:l,dataType:"jsonp",error:function(){},success:function(){return $("label").removeClass("active-error"),$("body").addClass("success-active"),winHght()}});else for($("label").removeClass("active-error"),C=0,B=h.length;B>C;C++)m=h[C],$('label[for="'+m+'"]').addClass("active-error");return h.length=0}),s.click(function(){return $("label").removeClass("active-error"),$("body").removeClass("success-active")}),f(y)});