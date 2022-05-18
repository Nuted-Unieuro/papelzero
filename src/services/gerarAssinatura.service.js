class Service {
    geradorAssinatura (data) {
        let dataAssinatura = new Date(data.dataAssinatura).toLocaleString()
        dataAssinatura = dataAssinatura.replace(' ', ', às ')
        const assinatura =
            `<p class="MsoNormal" style="margin: 0px; break-after: avoid; font-size: 0px; font-family: &quot;Times New Roman&quot;, serif; text-indent: 0px; text-align: center;">
                <span style="color: black; font-family: &quot;Century Gothic&quot;, sans-serif; font-size: 0px; letter-spacing: 0em;">
                    <br>
                </span>
            </p>
            <hr>
            <table style="width: 100%;">
                <tbody>
                <tr>
                        <td style="width: 8%; border-color: rgba(255, 255, 255, 0);">
                            <img src="${data.fingerprint}" alt="" width="64" height="93">
                        </td>
                        <td style="width: 2%; border-color: rgba(255, 255, 255, 0);">
                            <br>
                        </td>
                        <td style="width: 90%; color: rgb(0, 0, 0); border-color: rgba(255, 255, 255, 0);">
                            Documento assinado eletronicamente por 
                            <strong>${data.nomeUsuario.trim()}</strong>, 
                            <strong>${data.cargoUsuario} - ${data.departamentoUsuario}</strong>, em ${dataAssinatura}, conforme horário oficial de Brasília, com fundamento na Instrução da Reitoria 0001/2022 do Centro Universitário Unieuro.
                        </td>
                </tr>
                </tbody>
            </table>`
        return assinatura
    }
    geradorQrCode (data) {
        const assinatura =
        `<p class="MsoNormal" style="margin: 0px; break-after: avoid; font-size: 0px; font-family: &quot;Times New Roman&quot;, serif; text-indent: 0px; text-align: center;"><span style="color: black; font-family: &quot;Century Gothic&quot;, sans-serif; font-size: 0px; letter-spacing: 0em;"><br></span></p>
        <hr>
        <table style="width: 100%;">
            <tbody>
                <tr>
                    <td style="width: 18%; border-color: rgba(255, 255, 255, 0);"><img src="https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=${data.uuid}" alt="" width="150" height="150"></td>
                    <td style="width: 2%; border-color: rgba(255, 255, 255, 0);"><br></td>
                    <td style="width: 80%; color: rgb(0, 0, 0); border-color: rgba(255, 255, 255, 0);">
                    A autenticidade deste documento poder ser conferida no site do Centro Universitário Euro-Americano - UNIEURO http://validador.xxxxxxx, informando o número da referência:<br> <strong> ${data.uuid} </strong>.</td>
                </tr>
            </tbody>
        </table>`

      return assinatura
    }
    geradorReferencia (data) {
    const assinatura =
        `<p class="MsoNormal" style="margin: 0px; break-after: avoid; font-size: 0px; font-family: &quot;Times New Roman&quot;, serif; text-indent: 0px; text-align: center;">
            <span style="color: black; font-family: &quot;Century Gothic&quot;, sans-serif; font-size: 0px; letter-spacing: 0em;">
                <br>
            </span>
        </p>
        <hr>
        <table style="width: 100%;">
            <tbody>
                <tr>
                    <td style="width: 99.8834%; border-color: rgba(255, 255, 255, 0); text-align: right; color: rgb(0, 0, 0);" colspan="3">
                        <pre><span style="font-size: 12px; color: black;"><strong>Referência n°:</strong> ${data.uuid} </span></pre>
                    </td>       
                </tr>
            </tbody>
        </table>
        <br>
        `
      return assinatura
    }
    geradorCabecalho (data) {
    const assinatura =
        `<table style="width: 100%;">
            <tbody>
                <tr>
                    <td style="width: 99.8834%; border-color: rgba(255, 255, 255, 0); text-align: right; color: rgb(0, 0, 0);" colspan="3">
                        <pre><span style="font-size: 12px; color: black;"><strong>Referência n°:</strong> ${data.uuid} </span></pre>
                    </td>       
                </tr>
                <tr>
                    <td style="width: 13.986%; border-color: rgba(255, 255, 255, 0);"><img src="${require('@/assets/images/logos/unieuro.png')}" alt="" width="102" height="101"></td>
                    <td style="width: 1.3986%; border-color: rgba(255, 255, 255, 0);"><br></td>
                    <td style="width: 84.6154%; text-align: center; border-color: rgba(255, 255, 255, 0);">
                        <h2><span style="font-family: Arial, Helvetica, sans-serif; color: black;">Centro Universitário Euro-Americano - UNIEURO</span></h2>
                    </td>
                </tr>
            </tbody>
        </table>
        <br>
        `
      return assinatura
    }
    geradorConfidencial (data) {
    const assinatura =
        `<div style="background-image: url('${data.confidencial}'); background-repeat: repeat;">
            <table style="width: 100%;">
                <tbody>
                    <tr>
                        <td style="width: 100%; background-color: rgb(0, 0, 0);">

                            <p style="text-align: center;"><span style="color: rgb(255, 255, 255);"><strong style="font-size: 24px;">Documento Interno</strong></span></p>
                        </td>
                    </tr>
                </tbody>
            </table>
        `
      return assinatura
    }
    geradorTemplate (data) {
    const assinatura =
      `<h3 style="break-after: avoid; font-size: 19px; font-family: &quot;Times New Roman&quot;, serif; color: black; margin: 8px 0px 15px; text-indent: 0px;"><span style="font-size: 17px; font-family: Tahoma, sans-serif; color: black;">MEMO nº 001/2022
      </span><span style="mso-tab-count:1">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span><span style="font-size: 17px; font-family: Tahoma, sans-serif; color: black;">Curso de
          Bacharelado em Sistemas de Informação</span></h3>
  
  <p class="MsoNormal" style="break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; margin: 4px 0px;"><span style="font-size: 8px; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">&nbsp;</span></p>
  
  <p class="MsoNormal" style="break-after: avoid; font-family: &quot;Times New Roman&quot;, serif; margin: 4px 0px; text-align: justify; font-size: 16px;"><span style="font-size: 16px; font-family: &quot;Century Gothic&quot;, sans-serif; color: rgb(0, 0, 0);">A Profa. Dra. Juliana Patrícia Ferraz de Souza - Pró-Reitora de Graduação</span></p>
  
  <p class="MsoNormal" align="right" style="break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; margin: 8px 0px 8px 225px; text-align: right; text-indent: -48px;"><span style="font-size: 8px; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">&nbsp;</span></p>
  
  <p class="MsoNormal" align="right" style="break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; margin: 8px 0px 8px 225px; text-align: right; text-indent: -48px;"><span style="font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">Assunto:
          Turmas Especiais 2022-1</span></p>
  
  <p class="MsoNormal" style="break-after: avoid; font-family: &quot;Times New Roman&quot;, serif; margin: 8px 0px; line-height: 150%; font-size: 16px;"><span style="line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: rgb(0, 0, 0); font-size: 15px;">Prezada Sra,</span></p>
  
  <p class="MsoNormal" style="break-after: avoid; font-family: &quot;Times New Roman&quot;, serif; margin: 8px 0px; text-align: justify; text-indent: 48px; line-height: 150%; font-size: 16px;"><span style="line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; font-size: 15px;"><span style="color: black;"> Algumas disciplinas do Curso de Bacharelado em Sistemas de Informação não serão regularmente ofertadas neste respectivo semestre, e alunos veteranos, que se encontram em regime especial aguardando autorização das disciplinas especiais. Ressalto que as solicitações se referem a pedidos de adaptação.</span></span></p>
  
  <p class="MsoNormal" style="break-after: avoid; font-family: &quot;Times New Roman&quot;, serif; margin: 8px 0px; text-align: justify; text-indent: 48px; line-height: 150%; font-size: 16px;"><span style="line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; font-size: 15px;"><span style="color: black;"> Por esta razão solicito autorização para a criação da turma especial, informando que as disciplinas serão ministradas no formato tutorial sendo 1h/aula para cada disciplina conforme tabela abaixo .</span></span></p>
  
  <p class="MsoNormal" style="break-after: avoid; font-family: &quot;Times New Roman&quot;, serif; margin: 8px 0px; text-align: justify; text-indent: 48px; line-height: 150%; font-size: 16px;"><span style="line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: rgb(0, 0, 0); font-size: 15px;">Ressalto que as disciplinas serão ministradas por esta
          coordenação.</span></p>
  
  <div align="center">
  
      <table class="MsoNormalTable" border="1" cellspacing="0" cellpadding="0" width="593" style="">
          <tbody>
              <tr style="height: 31px;">
                  <td width="173" valign="top" style="width: 172px; background: rgb(238, 236, 225); padding: 0px 7px 0px 4px; height: 31px;">
                      <p class="MsoNormal" align="center" style="margin: 8px 0px 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center; text-indent: 48px; line-height: 150%;"><strong><span style="font-size: 15px; line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">Disciplina</span></strong></p>
                  </td>
                  <td width="79" valign="top" style="width: 79px; background: rgb(238, 236, 225); padding: 0px 7px 0px 4px; height: 31px;">
                      <p class="MsoNormal" align="center" style="margin: 8px 0px 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center; line-height: 150%;"><strong><span style="font-size: 15px; line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">Matriz </span></strong></p>
                  </td>
                  <td width="78" valign="top" style="width: 78px; background: rgb(238, 236, 225); padding: 0px 7px 0px 4px; height: 31px;">
                      <p class="MsoNormal" align="center" style="margin: 8px 0px 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center; line-height: 150%;"><strong><span style="font-size: 15px; line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">Semestre</span></strong></p>
                  </td>
                  <td width="199" valign="top" style="width: 198px; background: rgb(238, 236, 225); padding: 0px 7px 0px 4px; height: 31px;">
                      <p class="MsoNormal" align="center" style="margin: 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center; line-height: 150%;"><strong><span style="font-size: 15px; line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">Professor</span></strong></p>
                  </td>
                  <td width="63" valign="top" style="width: 63px; background: rgb(238, 236, 225); padding: 0px 7px 0px 4px; height: 31px;">
                      <p class="MsoNormal" align="center" style="margin: 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center; line-height: 150%;"><strong><span style="font-size: 15px; line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">Hora/a</span></strong></p>
                  </td>
              </tr>
              <tr style="height: 44px;">
                  <td width="173" valign="top" style="width: 172px; background: white; padding: 0px 7px 0px 4px; height: 44px;">
                      <p class="MsoNormal" align="center" style="margin: 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center; line-height: 150%;"><span style="font-size: 13px; line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">Engenharia de Software</span></p>
                  </td>
                  <td width="79" valign="top" style="width: 79px; background: white; padding: 0px 7px 0px 4px; height: 44px;">
                      <p class="MsoNormal" align="center" style="margin: 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center; line-height: 150%;"><span style="font-size: 13px; line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">2012-0</span></p>
                  </td>
                  <td width="78" valign="top" style="width: 78px; background: white; padding: 0px 7px 0px 4px; height: 44px;">
                      <p class="MsoNormal" align="center" style="margin: 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center; line-height: 150%;"><span style="font-size: 13px; line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">3°</span></p>
                  </td>
                  <td width="199" valign="top" style="width: 198px; background: white; padding: 0px 7px 0px 4px; height: 44px;">
                      <p class="MsoNormal" align="center" style="margin: 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center; line-height: 150%;"><span style="font-size: 13px; line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">Edward Lima Marialves - 3986</span></p>
                  </td>
                  <td width="63" valign="top" style="width: 63px; background: white; padding: 0px 7px 0px 4px; height: 44px;">
                      <p class="MsoNormal" align="center" style="margin: 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center; line-height: 150%;"><span style="font-size: 13px; line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">1</span></p>
                  </td>
              </tr>
              <tr style="height: 45px;">
                  <td width="173" valign="top" style="width: 172px; background: white; padding: 0px 7px 0px 4px; height: 45px;">
                      <p class="MsoNormal" align="center" style="margin: 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center; line-height: 150%;"><span style="font-size: 13px; line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">PI Implantação de GTI</span></p>
                  </td>
                  <td width="79" valign="top" style="width: 79px; background: white; padding: 0px 7px 0px 4px; height: 45px;">
                      <p class="MsoNormal" align="center" style="margin: 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center; line-height: 150%;"><span style="font-size: 13px; line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">2012-0</span></p>
                  </td>
                  <td width="78" valign="top" style="width: 78px; background: white; padding: 0px 7px 0px 4px; height: 45px;">
                      <p class="MsoNormal" align="center" style="margin: 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center; line-height: 150%;"><span style="font-size: 13px; line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">5°</span></p>
                  </td>
                  <td width="199" valign="top" style="width: 198px; background: white; padding: 0px 7px 0px 4px; height: 45px;">
                      <p class="MsoNormal" align="center" style="margin: 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center; line-height: 150%;"><span style="font-size: 13px; line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">Edward Lima Marialves - 3986</span></p>
                  </td>
                  <td width="63" valign="top" style="width: 63px; background: white; padding: 0px 7px 0px 4px; height: 45px;">
                      <p class="MsoNormal" align="center" style="margin: 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center; line-height: 150%;"><span style="font-size: 13px; line-height: 150%; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">1</span></p>
                  </td>
              </tr>
          </tbody>
      </table>
  
  </div>
  
  <p class="MsoNormal" style="margin: 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif;">&nbsp;<br></p>
  
  <p class="MsoNormal" style="margin: 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-indent: 48px;"><span style="font-size: 15px; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">Atenciosamente,</span></p>
  
  <p class="MsoNormal" align="center" style="margin: 0px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center; text-indent: 48px;"><span style="mso-no-proof:yes">
          <v:shapetype id="_x0000_t75" coordsize="21600,21600" o:spt="75" o:preferrelative="t" path="m@4@5l@4@11@9@11@9@5xe" filled="f" stroked="f">
              <v:stroke joinstyle="miter">
                  <v:formulas>
                      <v:f eqn="if lineDrawn pixelLineWidth 0">
                          <v:f eqn="sum @0 1 0">
                              <v:f eqn="sum 0 0 @1">
                                  <v:f eqn="prod @2 1 2">
                                      <v:f eqn="prod @3 21600 pixelWidth">
                                          <v:f eqn="prod @3 21600 pixelHeight">
                                              <v:f eqn="sum @0 0 1">
                                                  <v:f eqn="prod @6 1 2">
                                                      <v:f eqn="prod @7 21600 pixelWidth">
                                                          <v:f eqn="sum @8 21600 0">
                                                              <v:f eqn="prod @7 21600 pixelHeight">
                                                                  <v:f eqn="sum @10 21600 0">
                                                                  </v:f>
                                                              </v:f>
                                                          </v:f>
                                                      </v:f>
                                                  </v:f>
                                              </v:f>
                                          </v:f>
                                      </v:f>
                                  </v:f>
                              </v:f>
                          </v:f>
                      </v:f>
                  </v:formulas>
                  <v:path o:extrusionok="f" gradientshapeok="t" o:connecttype="rect">
                      <o:lock v:ext="edit" aspectratio="t">
                      </o:lock>
                  </v:path>
              </v:stroke>
          </v:shapetype>
  
  
      </span></p>
  
  
  
  <p class="MsoNormal" align="center" style="margin: 0px 0px 0px 48px; break-after: avoid; font-size: 16px; font-family: &quot;Times New Roman&quot;, serif; text-align: center;"><span style="font-size: 15px; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;"><span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>3802 - Michel Junio Ferreira
          Rosa<span style="mso-spacerun:yes">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></span><br>
      <span style="font-size: 15px; font-family: &quot;Century Gothic&quot;, sans-serif; color: black;">Coordenação de Sistemas de Informação</span>
  </p>
  <br>`
      return assinatura
    }
  }
  
  export default new Service()