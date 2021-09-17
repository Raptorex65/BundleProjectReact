                <select
                  {...register("Canton")}
                  placeholder="Country"
                  value={selectedCanton}
                  onChange={(e) => setSelectedCanton(e.target.value)}
                >
                  <option>--Choose Canton--</option>
                  <option className="canton" value="AG">
                    Aargau
                  </option>
                  <option value="AR">Appenzell Ausserrhoden</option>
                  <option value="AI">Appenzell Innerrhoden</option>
                  <option value="BL">Basel-Land</option>
                  <option value="BS">Basel-Stadt</option>
                  <option value="BE">Bern/Berne</option>
                  <option value="FR">Fribourg/Freiburg</option>
                  <option value="GE">Genève</option>
                  <option value="GL">Glarus</option>
                  <option value="GR">Graubünden/Grischun/Grigioni</option>
                  <option value="JU">Jura</option>
                  <option value="LU">Luzern</option>
                  <option value="NE">Neuchâtel</option>
                  <option value="NW">Nidwalden</option>
                  <option value="OW">Obwalden</option>
                  <option value="SG">St.Gallen</option>
                  <option value="SH">Schaffhausen</option>
                  <option value="SZ">Schwyz</option>
                  <option value="SO">Solothurn</option>
                  <option value="TG">Thurgau</option>
                  <option value="TI">Ticino</option>
                  <option value="UR">Uri</option>
                  <option value="VS">Valais/Wallis</option>
                  <option value="VD">Vaud</option>
                  <option value="ZG">Zug</option>
                  <option value="ZH">Zurich</option>
                </select>



