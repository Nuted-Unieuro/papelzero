(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b3f0b9e"],{"70fa":function(t,e,n){"use strict";var a=n("d4ec"),o=n("bee2"),i=(n("ac1f"),n("5319"),n("99af"),n("498a"),function(){function t(){Object(a["a"])(this,t)}return Object(o["a"])(t,[{key:"geradorAssinatura",value:function(t){var e=new Date(t.dataAssinatura).toLocaleString();e=e.replace(" ",", às ");var n='<p class="MsoNormal" style="margin: 0px; break-after: avoid; font-size: 0px; font-family: &quot;Times New Roman&quot;, serif; text-indent: 0px; text-align: center;">\n                <span style="color: black; font-family: &quot;Century Gothic&quot;, sans-serif; font-size: 0px; letter-spacing: 0em;">\n                    <br>\n                </span>\n            </p>\n            <hr>\n            <table style="width: 100%;">\n                <tbody>\n                <tr>\n                        <td style="width: 8%; border-color: rgba(255, 255, 255, 0);">\n                            <img src="'.concat(t.fingerprint,'" alt="" width="64" height="93">\n                        </td>\n                        <td style="width: 2%; border-color: rgba(255, 255, 255, 0);">\n                            <br>\n                        </td>\n                        <td style="width: 90%; color: rgb(0, 0, 0); border-color: rgba(255, 255, 255, 0);">\n                            Documento assinado eletronicamente por \n                            <strong>').concat(t.nomeUsuario.trim(),"</strong>, \n                            <strong>").concat(t.cargoUsuario," - ").concat(t.departamentoUsuario,"</strong>, em ").concat(e,", conforme horário oficial de Brasília, com fundamento na Instrução da Reitoria 0001/2022 do Centro Universitário Unieuro.\n                        </td>\n                </tr>\n                </tbody>\n            </table>");return n}},{key:"geradorQrCode",value:function(t){var e='<p class="MsoNormal" style="margin: 0px; break-after: avoid; font-size: 0px; font-family: &quot;Times New Roman&quot;, serif; text-indent: 0px; text-align: center;"><span style="color: black; font-family: &quot;Century Gothic&quot;, sans-serif; font-size: 0px; letter-spacing: 0em;"><br></span></p>\n        <hr>\n        <table style="width: 100%;">\n            <tbody>\n                <tr>\n                    <td style="width: 18%; border-color: rgba(255, 255, 255, 0);"><img src="https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl='.concat(t.uuid,'" alt="" width="150" height="150"></td>\n                    <td style="width: 2%; border-color: rgba(255, 255, 255, 0);"><br></td>\n                    <td style="width: 80%; color: rgb(0, 0, 0); border-color: rgba(255, 255, 255, 0);">\n                    A autenticidade deste documento poder ser conferida no site do Centro Universitário Euro-Americano - UNIEURO https://zero-papel.herokuapp.com/validar, informando o número da referência:<br> <strong> ').concat(t.uuid," </strong>.</td>\n                </tr>\n            </tbody>\n        </table>");return e}},{key:"geradorReferencia",value:function(t){var e='<p class="MsoNormal" style="margin: 0px; break-after: avoid; font-size: 0px; font-family: &quot;Times New Roman&quot;, serif; text-indent: 0px; text-align: center;">\n            <span style="color: black; font-family: &quot;Century Gothic&quot;, sans-serif; font-size: 0px; letter-spacing: 0em;">\n                <br>\n            </span>\n        </p>\n        <hr>\n        <table style="width: 100%;">\n            <tbody>\n                <tr>\n                    <td style="width: 99.8834%; border-color: rgba(255, 255, 255, 0); text-align: right; color: rgb(0, 0, 0);" colspan="3">\n                        <pre><span style="font-size: 12px; color: black;"><strong>Referência n°:</strong> '.concat(t.uuid," </span></pre>\n                    </td>       \n                </tr>\n            </tbody>\n        </table>\n        <br>\n        ");return e}},{key:"geradorCabecalho",value:function(t){var e='<table style="width: 100%;">\n            <tbody>\n                <tr>\n                    <td style="width: 99.8834%; border-color: rgba(255, 255, 255, 0); text-align: right; color: rgb(0, 0, 0);" colspan="3">\n                        <pre><span style="font-size: 12px; color: black;"><strong>Referência n°:</strong> '.concat(t.uuid,' </span></pre>\n                    </td>       \n                </tr>\n                <tr>\n                    <td style="width: 13.986%; border-color: rgba(255, 255, 255, 0);"><img src="').concat(n("86c4"),'" alt="" width="102" height="101"></td>\n                    <td style="width: 1.3986%; border-color: rgba(255, 255, 255, 0);"><br></td>\n                    <td style="width: 84.6154%; text-align: center; border-color: rgba(255, 255, 255, 0);">\n                        <h2><span style="font-family: Arial, Helvetica, sans-serif; color: black;">Centro Universitário Euro-Americano - UNIEURO</span></h2>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n        ');return e}},{key:"geradorConfidencial",value:function(t){var e="<div style=\"background-image: url('".concat(t.confidencial,'\'); background-repeat: repeat;">\n            <table style="width: 100%;">\n                <tbody>\n                    <tr>\n                        <td style="width: 100%; background-color: rgb(0, 0, 0);">\n\n                            <p style="text-align: center;"><span style="color: rgb(255, 255, 255);"><strong style="font-size: 24px;">Documento Interno</strong></span></p>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        ');return e}},{key:"geradorTemplate",value:function(t){var e='<h3 style="break-after: avoid; font-size: 19px; font-family: &quot;Times New Roman&quot;, serif; color: black; margin: 8px 0px 15px; text-indent: 0px;"><span style="font-size: 17px; font-family: Tahoma, sans-serif; color: black;">MEMO nº 001/2022\n      </span><span style="mso-tab-count:1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style="font-size: 17px; font-family: Tahoma, sans-serif; color: black;">Curso de\n          Bacharelado em Sistemas de Informação</span></h3>\n  \n  <p class="MsoNormal" style="break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; margin: 4px 0px;"><span style="font-size: 8px; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">&nbsp;</span></p>\n  \n  <p class="MsoNormal" style="break-after: avoid; font-family: &quot;Times New Roman&quot;, serif; margin: 4px 0px; text-align: justify; font-size: 16px;"><span style="font-size: 16px; font-family: &quot;Century Gothic&quot;, sans-serif; color: rgb(0, 0, 0);">A Profa. Dra. Juliana Patrícia Ferraz de Souza - Pró-Reitora de Graduação</span></p>\n  \n  <p class="MsoNormal" align="right" style="break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; margin: 8px 0px 8px 225px; text-align: right; text-indent: -48px;"><span style="font-size: 8px; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">&nbsp;</span></p>\n  \n  <p class="MsoNormal" align="right" style="break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; margin: 8px 0px 8px 225px; text-align: right; text-indent: -48px;"><span style="font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">Assunto:\n          Turmas Especiais 2022-1</span></p>\n  \n  <p class="MsoNormal" style="break-after: avoid; font-family: &quot;Times New Roman&quot;, serif; margin: 8px 0px; line-height: 150%; font-size: 16px;"><span style="line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: rgb(0, 0, 0); font-size: 15px;">Prezada Sra,</span></p>\n  \n  <p class="MsoNormal" style="break-after: avoid; font-family: &quot;Times New Roman&quot;, serif; margin: 8px 0px; text-align: justify; text-indent: 48px; line-height: 150%; font-size: 16px;"><span style="line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; font-size: 15px;"><span style="color: black;"> Algumas disciplinas do Curso de Bacharelado em Sistemas de Informação não serão regularmente ofertadas neste respectivo semestre, e alunos veteranos, que se encontram em regime especial aguardando autorização das disciplinas especiais. Ressalto que as solicitações se referem a pedidos de adaptação.</span></span></p>\n  \n  <p class="MsoNormal" style="break-after: avoid; font-family: &quot;Times New Roman&quot;, serif; margin: 8px 0px; text-align: justify; text-indent: 48px; line-height: 150%; font-size: 16px;"><span style="line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; font-size: 15px;"><span style="color: black;"> Por esta razão solicito autorização para a criação da turma especial, informando que as disciplinas serão ministradas no formato tutorial sendo 1h/aula para cada disciplina conforme tabela abaixo .</span></span></p>\n  \n  <p class="MsoNormal" style="break-after: avoid; font-family: &quot;Times New Roman&quot;, serif; margin: 8px 0px; text-align: justify; text-indent: 48px; line-height: 150%; font-size: 16px;"><span style="line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: rgb(0, 0, 0); font-size: 15px;">Ressalto que as disciplinas serão ministradas por esta\n          coordenação.</span></p>\n  \n  <div align="center">\n  \n      <table class="MsoNormalTable" border="1" cellspacing="0" cellpadding="0" width="593" style="">\n          <tbody>\n              <tr style="height: 31px;">\n                  <td width="173" valign="top" style="width: 172px; background: rgb(238, 236, 225); padding: 0px 7px 0px 4px; height: 31px;">\n                      <p class="MsoNormal" align="center" style="margin: 8px 0px 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center; text-indent: 48px; line-height: 150%;"><strong><span style="font-size: 15px; line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">Disciplina</span></strong></p>\n                  </td>\n                  <td width="79" valign="top" style="width: 79px; background: rgb(238, 236, 225); padding: 0px 7px 0px 4px; height: 31px;">\n                      <p class="MsoNormal" align="center" style="margin: 8px 0px 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center; line-height: 150%;"><strong><span style="font-size: 15px; line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">Matriz </span></strong></p>\n                  </td>\n                  <td width="78" valign="top" style="width: 78px; background: rgb(238, 236, 225); padding: 0px 7px 0px 4px; height: 31px;">\n                      <p class="MsoNormal" align="center" style="margin: 8px 0px 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center; line-height: 150%;"><strong><span style="font-size: 15px; line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">Semestre</span></strong></p>\n                  </td>\n                  <td width="199" valign="top" style="width: 198px; background: rgb(238, 236, 225); padding: 0px 7px 0px 4px; height: 31px;">\n                      <p class="MsoNormal" align="center" style="margin: 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center; line-height: 150%;"><strong><span style="font-size: 15px; line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">Professor</span></strong></p>\n                  </td>\n                  <td width="63" valign="top" style="width: 63px; background: rgb(238, 236, 225); padding: 0px 7px 0px 4px; height: 31px;">\n                      <p class="MsoNormal" align="center" style="margin: 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center; line-height: 150%;"><strong><span style="font-size: 15px; line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">Hora/a</span></strong></p>\n                  </td>\n              </tr>\n              <tr style="height: 44px;">\n                  <td width="173" valign="top" style="width: 172px; background: white; padding: 0px 7px 0px 4px; height: 44px;">\n                      <p class="MsoNormal" align="center" style="margin: 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center; line-height: 150%;"><span style="font-size: 13px; line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">Engenharia de Software</span></p>\n                  </td>\n                  <td width="79" valign="top" style="width: 79px; background: white; padding: 0px 7px 0px 4px; height: 44px;">\n                      <p class="MsoNormal" align="center" style="margin: 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center; line-height: 150%;"><span style="font-size: 13px; line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">2012-0</span></p>\n                  </td>\n                  <td width="78" valign="top" style="width: 78px; background: white; padding: 0px 7px 0px 4px; height: 44px;">\n                      <p class="MsoNormal" align="center" style="margin: 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center; line-height: 150%;"><span style="font-size: 13px; line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">3°</span></p>\n                  </td>\n                  <td width="199" valign="top" style="width: 198px; background: white; padding: 0px 7px 0px 4px; height: 44px;">\n                      <p class="MsoNormal" align="center" style="margin: 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center; line-height: 150%;"><span style="font-size: 13px; line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">Edward Lima Marialves - 3986</span></p>\n                  </td>\n                  <td width="63" valign="top" style="width: 63px; background: white; padding: 0px 7px 0px 4px; height: 44px;">\n                      <p class="MsoNormal" align="center" style="margin: 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center; line-height: 150%;"><span style="font-size: 13px; line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">1</span></p>\n                  </td>\n              </tr>\n              <tr style="height: 45px;">\n                  <td width="173" valign="top" style="width: 172px; background: white; padding: 0px 7px 0px 4px; height: 45px;">\n                      <p class="MsoNormal" align="center" style="margin: 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center; line-height: 150%;"><span style="font-size: 13px; line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">PI Implantação de GTI</span></p>\n                  </td>\n                  <td width="79" valign="top" style="width: 79px; background: white; padding: 0px 7px 0px 4px; height: 45px;">\n                      <p class="MsoNormal" align="center" style="margin: 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center; line-height: 150%;"><span style="font-size: 13px; line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">2012-0</span></p>\n                  </td>\n                  <td width="78" valign="top" style="width: 78px; background: white; padding: 0px 7px 0px 4px; height: 45px;">\n                      <p class="MsoNormal" align="center" style="margin: 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center; line-height: 150%;"><span style="font-size: 13px; line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">5°</span></p>\n                  </td>\n                  <td width="199" valign="top" style="width: 198px; background: white; padding: 0px 7px 0px 4px; height: 45px;">\n                      <p class="MsoNormal" align="center" style="margin: 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center; line-height: 150%;"><span style="font-size: 13px; line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">Edward Lima Marialves - 3986</span></p>\n                  </td>\n                  <td width="63" valign="top" style="width: 63px; background: white; padding: 0px 7px 0px 4px; height: 45px;">\n                      <p class="MsoNormal" align="center" style="margin: 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center; line-height: 150%;"><span style="font-size: 13px; line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">1</span></p>\n                  </td>\n              </tr>\n          </tbody>\n      </table>\n  \n  </div>\n  \n  <p class="MsoNormal" style="margin: 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif;">&nbsp;<br></p>\n  \n  <p class="MsoNormal" style="margin: 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-indent: 48px;"><span style="font-size: 15px; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">Atenciosamente,</span></p>\n  \n  <p class="MsoNormal" align="center" style="margin: 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center; text-indent: 48px;"><span style="mso-no-proof:yes">\n          <v:shapetype id="_x0000_t75" coordsize="21600,21600" o:spt="75" o:preferrelative="t" path="m@4@5l@4@11@9@11@9@5xe" filled="f" stroked="f">\n              <v:stroke joinstyle="miter">\n                  <v:formulas>\n                      <v:f eqn="if lineDrawn pixelLineWidth 0">\n                          <v:f eqn="sum @0 1 0">\n                              <v:f eqn="sum 0 0 @1">\n                                  <v:f eqn="prod @2 1 2">\n                                      <v:f eqn="prod @3 21600 pixelWidth">\n                                          <v:f eqn="prod @3 21600 pixelHeight">\n                                              <v:f eqn="sum @0 0 1">\n                                                  <v:f eqn="prod @6 1 2">\n                                                      <v:f eqn="prod @7 21600 pixelWidth">\n                                                          <v:f eqn="sum @8 21600 0">\n                                                              <v:f eqn="prod @7 21600 pixelHeight">\n                                                                  <v:f eqn="sum @10 21600 0">\n                                                                  </v:f>\n                                                              </v:f>\n                                                          </v:f>\n                                                      </v:f>\n                                                  </v:f>\n                                              </v:f>\n                                          </v:f>\n                                      </v:f>\n                                  </v:f>\n                              </v:f>\n                          </v:f>\n                      </v:f>\n                  </v:formulas>\n                  <v:path o:extrusionok="f" gradientshapeok="t" o:connecttype="rect">\n                      <o:lock v:ext="edit" aspectratio="t">\n                      </o:lock>\n                  </v:path>\n              </v:stroke>\n          </v:shapetype>\n  \n  \n      </span></p>\n  \n  \n  \n  <p class="MsoNormal" align="center" style="margin: 0px 0px 0px 48px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center;"><span style="font-size: 15px; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>3802 - Michel Junio Ferreira\n          Rosa<span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><br>\n      <span style="font-size: 15px; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">Coordenação de Sistemas de Informação</span>\n  </p>\n  <br>';return e}}]),t}());e["a"]=new i},"86c4":function(t,e,n){t.exports=n.p+"img/unieuro.46777419.png"},"8c3b":function(t,e,n){},"99d9":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return s})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return l}));var a=n("b0af"),o=n("80d2"),i=Object(o["i"])("v-card__actions"),s=Object(o["i"])("v-card__subtitle"),r=Object(o["i"])("v-card__text"),l=Object(o["i"])("v-card__title");a["a"]},a3be:function(t,e,n){t.exports=n.p+"img/fingerprint.b76b84a6.svg"},a523:function(t,e,n){"use strict";n("4de4"),n("b64b"),n("2ca0"),n("99af"),n("20f6"),n("4b85"),n("498a"),n("a15b");var a=n("2b0e");function o(t){return a["a"].extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(e,n){var a=n.props,o=n.data,i=n.children;o.staticClass="".concat(t," ").concat(o.staticClass||"").trim();var s=o.attrs;if(s){o.attrs={};var r=Object.keys(s).filter((function(t){if("slot"===t)return!1;var e=s[t];return t.startsWith("data-")?(o.attrs[t]=e,!1):e||"string"===typeof e}));r.length&&(o.staticClass+=" ".concat(r.join(" ")))}return a.id&&(o.domProps=o.domProps||{},o.domProps.id=a.id),e(a.tag,o,i)}})}var i=n("d9f7");e["a"]=o("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,e){var n,a=e.props,o=e.data,s=e.children,r=o.attrs;return r&&(o.attrs={},n=Object.keys(r).filter((function(t){if("slot"===t)return!1;var e=r[t];return t.startsWith("data-")?(o.attrs[t]=e,!1):e||"string"===typeof e}))),a.id&&(o.domProps=o.domProps||{},o.domProps.id=a.id),t(a.tag,Object(i["a"])(o,{staticClass:"container",class:Array({"container--fluid":a.fluid}).concat(n||[])}),s)}})},a530:function(t,e,n){"use strict";n("8c3b")},afdd:function(t,e,n){"use strict";var a=n("8336");e["a"]=a["a"]},d83a:function(t,e,n){"use strict";var a=n("d4ec"),o=n("bee2"),i=(n("99af"),n("bc3a")),s=n.n(i),r=n("2a47"),l=Object(r["a"])(),c="".concat(l,"api/assinaturasbyprocessos"),p=function(){function t(){Object(a["a"])(this,t)}return Object(o["a"])(t,[{key:"assinaturasbyprocessos",value:function(t,e){return s.a.get("".concat(c,"/").concat(e.id,"?page=").concat(t.page))}},{key:"assinadosbyprocessos",value:function(t){return s.a.get("".concat(l,"api/assinadosbyprocessos/").concat(t.id))}},{key:"findAllByConnectedUser",value:function(){return s.a.get("".concat(c,"/find-by-user"),{headers:authHeader()})}},{key:"findById",value:function(t){return s.a.get("".concat(c,"/").concat(t),{headers:authHeader()})}},{key:"findByActivityId",value:function(t){return s.a.get("".concat(c,"/find-by-activity/").concat(t,"?id=").concat(t),{headers:authHeader()})}},{key:"getFacePictureById",value:function(t){return s.a.get("".concat(c,"/face-picture/").concat(t),{headers:authHeader()})}},{key:"approveRecognitionById",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return s.a.put("".concat(c,"/approve/").concat(t),e,{headers:authHeader()})}},{key:"disapproveRecognitionById",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return s.a.put("".concat(c,"/disapprove/").concat(t),e,{headers:authHeader()})}},{key:"save",value:function(t,e){return e?this.update(t,e):this.create(t)}},{key:"create",value:function(t){return s.a.post(c,t,{headers:authHeader()})}},{key:"update",value:function(t,e){return s.a.put("".concat(c,"/").concat(e),t,{headers:authHeader()})}},{key:"deleteById",value:function(t){return s.a.delete("".concat(c,"/").concat(t),{headers:authHeader()})}}]),t}();e["a"]=new p},e67b:function(t,e,n){t.exports=n.p+"img/confidencial.f998e950.svg"},ec62:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"items-center ps-6 pe-5 pt-2 pb-5"},[a("router-link",{staticClass:"d-flex align-center text-decoration-none",attrs:{to:"/"}},[a("v-img",{staticClass:"app-logo me-3",attrs:{src:n("f980"),"max-height":"30px","max-width":"30px",alt:"logo",contain:"",eager:""}}),a("v-slide-x-transition",[a("h2",{staticClass:"app-title text--primary"},[t._v(" ZeroPapel ")])])],1)],1),a("v-row",[a("v-col",{attrs:{cols:"12",md:"12"}},[a("v-card",[a("v-card-title",[t._v("Validar Processo")]),a("v-card-text",[a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{align:"center"}},[a("v-col",{staticClass:"d-flex",attrs:{cols:"10",sm:"6"}},[a("v-text-field",{attrs:{label:"Referência do Processo"},model:{value:t.referenciaProcesso,callback:function(e){t.referenciaProcesso=e},expression:"referenciaProcesso"}})],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"2",sm:"6"}},[a("v-btn",{staticClass:"ma-2",attrs:{loading:t.loading,disabled:t.referenciaProcesso.length<30,color:"info"},on:{click:function(e){return t.getProcesso()}}},[t._v(" Buscar Processo ")])],1)],1),a("p",[t._v("*Busque o processo pelo número de referência fornecido ou indentifique no cabeçalho ou rodapé do arquivo.")]),a("v-col",{attrs:{cols:"6"}},[a("v-alert",{attrs:{prominent:"",transition:"scale-transition",value:t.notify.value,type:t.notify.type,color:t.notify.color}},[t._v(" "+t._s(t.notify.text)+" ")])],1),a("v-col",{staticClass:"d-flex",attrs:{cols:"12"}},[t.viewJodit?a("v-row",[a("v-list-item-content",[a("div",{attrs:{id:"NewProcesso"}},[a("jodit-editor",{attrs:{buttons:t.buttons,config:t.config,"readonly:":"",true:""},model:{value:t.joditContent,callback:function(e){t.joditContent="string"===typeof e?e.trim():e},expression:"joditContent"}})],1)])],1):t._e()],1)],1)],1)],1)],1)],1)],1)},o=[],i=n("ade3"),s=(n("d3b7"),n("d81d"),n("b0c0"),n("99af"),n("159b"),n("1fcb")),r=(n("f61f"),n("70fa")),l=n("d83a"),c=(n("425f"),n("69ae")),p={name:"validar",components:{JoditEditor:c["a"]},data:function(){var t;return t={referenciaProcesso:"",joditContent:"",config:this.getDefaultJoditConfigViewProcesso(),buttons:this.getDefaultJoditButtonsPush(),loading:!1,joditContentIsEmpty:!1},Object(i["a"])(t,"joditContent",""),Object(i["a"])(t,"viewJodit",!1),Object(i["a"])(t,"item",null),Object(i["a"])(t,"assinatura",{nomeUsuario:"",cargoUsuario:"",departamentoUsuario:"",dataAssinatura:"",fingerprint:n("a3be")}),Object(i["a"])(t,"template",{logoUnieuro:n("86c4")}),Object(i["a"])(t,"processo",{numeroProcesso:"87a3e041-c41a-54ad-e340-7ed9e859cb77"}),Object(i["a"])(t,"templateInit",{confidencial:n("e67b")}),Object(i["a"])(t,"notify",{value:!1,type:"warning",text:"Inserido com sucesso",color:"red"}),t},methods:{getProcesso:function(){var t=this;s["a"].processoByReferencia(this.referenciaProcesso).then((function(e){console.log(e),e.data&&(e.data.length>0?(t.item=e.data[0],t.assinatura=t.getAssinaturasUsuarios(e.data[0]),t.joditContent=e.data[0].desc_documento,t.viewJodit=!0):(t.viewJodit=!1,t.notify.type="warning",t.notify.color="red",t.notify.text="Processo não encontrado, não finalizado ou indeferido!",t.notify.value=!0,t.alertTimeout()))})).catch((function(e){console.log(e.message),t.HTTP_UNAUTHORIZED===e.response.status||t.HTTP_FORBIDDEN===e.response.status?t.logout(e.response.status):(t.notify.type="warning",t.notify.color="red",t.notify.text="Processo não encontrado, ou não finalizado!",t.notify.value=!0,t.alertTimeout())})).finally((function(){t.isLoading=!1}))},getAssinaturasUsuarios:function(t){var e=this,a=[];l["a"].assinadosbyprocessos(t).then((function(t){console.log(t),t.data&&(console.log(t.data,"dados"),a=t.data.map((function(t){var e={nomeUsuario:t.name,cargoUsuario:t.cargo,departamentoUsuario:t.nome_departamento,dataAssinatura:t.dt_assinatura,fingerprint:n("a3be")};return e})),console.log(a,"assinaturas"),e.assinatura=a,e.gerarAssinatura())})).catch((function(t){console.log(t.message),e.HTTP_UNAUTHORIZED===t.response.status||e.HTTP_FORBIDDEN===t.response.status?e.logout(t.response.status):e.showError()})).finally((function(){e.isLoading=!1}))},gerarAssinatura:function(){var t=this;this.joditContent="",this.item.sigilo&&(this.joditContent=this.joditContent.concat(r["a"].geradorConfidencial(this.templateInit))),this.joditContent=this.joditContent.concat(r["a"].geradorCabecalho(this.item)),this.joditContent=this.joditContent.concat(this.item.desc_documento),this.assinatura.forEach((function(e){t.joditContent=t.joditContent.concat(r["a"].geradorAssinatura(e))})),0!=this.item.cod_status&&3!=this.item.cod_status||(this.joditContent=this.joditContent.concat(r["a"].geradorQrCode(this.item))),this.joditContent=this.joditContent.concat(r["a"].geradorReferencia(this.item))},alertTimeout:function(){var t=this;setTimeout((function(){t.notify.value=!1}),5e3)}}},d=p,f=(n("a530"),n("2877")),u=n("6544"),g=n.n(u),h=n("0798"),m=n("8336"),y=n("b0af"),x=n("99d9"),b=n("62ad"),v=n("a523"),q=n("adda"),k=n("5d23"),w=n("0fd9"),C=n("0789"),z=n("8654"),N=Object(f["a"])(d,a,o,!1,null,null,null);e["default"]=N.exports;g()(N,{VAlert:h["a"],VBtn:m["a"],VCard:y["a"],VCardText:x["c"],VCardTitle:x["d"],VCol:b["a"],VContainer:v["a"],VImg:q["a"],VListItemContent:k["a"],VRow:w["a"],VSlideXTransition:C["e"],VTextField:z["a"]})},f61f:function(t,e,n){"use strict";var a=n("d4ec"),o=n("bee2"),i=(n("99af"),n("bc3a")),s=n.n(i),r=n("2a47"),l=Object(r["a"])(),c="".concat(l,"api"),p=function(){function t(){Object(a["a"])(this,t)}return Object(o["a"])(t,[{key:"findAll",value:function(t){return s.a.get("".concat(c,"/templates?page=").concat(t.page))}},{key:"findAllNotPage",value:function(t){return s.a.get("".concat(c,"/templatesall"))}},{key:"processoByUsuario",value:function(t,e){return s.a.get("".concat(c,"/processobyusuario/").concat(e,"?page=").concat(t.page))}},{key:"findAllByConnectedUser",value:function(){return s.a.get("".concat(c,"/find-by-user"),{headers:authHeader()})}},{key:"findById",value:function(t){return s.a.get("".concat(c,"/").concat(t),{headers:authHeader()})}},{key:"findByActivityId",value:function(t){return s.a.get("".concat(c,"/find-by-activity/").concat(t,"?id=").concat(t),{headers:authHeader()})}},{key:"getFacePictureById",value:function(t){return s.a.get("".concat(c,"/face-picture/").concat(t),{headers:authHeader()})}},{key:"approveRecognitionById",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return s.a.put("".concat(c,"/approve/").concat(t),e,{headers:authHeader()})}},{key:"disapproveRecognitionById",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return s.a.put("".concat(c,"/disapprove/").concat(t),e,{headers:authHeader()})}},{key:"save",value:function(t,e){return e?this.update(t,e):this.create(t)}},{key:"create",value:function(t){return s.a.post("".concat(c,"/templates"),t)}},{key:"update",value:function(t,e){return s.a.put("".concat(c,"/templates/").concat(e),t)}},{key:"deleteById",value:function(t){return s.a.delete("".concat(c,"/templates/").concat(t))}}]),t}();e["a"]=new p}}]);
//# sourceMappingURL=chunk-0b3f0b9e.11e8d7ee.js.map