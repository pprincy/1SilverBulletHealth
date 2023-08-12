<template>
  <div class="text-center" v-if="loading" style="padding-top: 50px">
    <loadingPage />
  </div>
  <div v-else class="">
    <Header />

    <div class="wrapper">
      <div class="inner-wrapper">
        <router-link to="/addon-rider">
          <div class="back-to-link d-flex align-items-center pt-1 pb-2">
            <em class="icon-arrow-left me-3"></em>
            <h3 class="mb-0">Back</h3>
          </div>
        </router-link>
        <!-- Policy Details -->
        <div v-if="selectedPlan" class="policyname-text d-flex align-items-center justify-content-between mb-3">              
          <!-- <div class="d-flex align-items-center">
            <span class="me-3">
              <img
                :src="selectedPlan.supportingData.insCompanyLogo"
                alt=""
              />
            </span>
            <h6>{{ selectedPlan['insuranceAndProducts']['productName'] }} : {{ selectedPlan.productDetails.planOption.planName }}</h6>
          </div> -->
          <!-- <div class="d-flex justify-content-end flex-column">
            <label v-if="this.applicationNo != '' && this.applicationNo != null " class="appno">Application Number : {{this.applicationNo}}</label>
            <label v-if="this.uiQuoteId != '' && this.uiQuoteId != null " class="propno">Reference Number : {{this.uiQuoteId}}</label>
            <div class="d-flex justify-content-end" v-if="selectedPlan.other.biUrl">
              <a :href="selectedPlan.other.biUrl" target="_blank">
                <button class="btn btn-warning rounded-pill text-white p-1 px-3"> Benefit Illustration </button>
              </a>
            </div>
          </div> -->
        </div>
        <!-- END: Policy Details -->

        <div class="row">
          <div class="col-12 col-md-8">
            <div class="pd-left">
              <!-- <Stepper /> -->
              <div class="wizard-hold">
                <ul class="nav nav-tabs wizard-step" id="myTab" role="tablist">
                  <template v-for="(data, ind) in proposalJson.fieldGroups" :key="ind">
                    <template v-if="ind !='traceInfo' && ind != 'distributor'">
                      <li class="nav-item" role="presentation" v-if="!data.visibility ? true : checkVisibility(data.visibility)">
                        <button :class="'nav-link ' + activePage(ind)" :id="'step' + ind + '-tab'" data-bs-toggle="tab"
                          :data-bs-target="'#step' + ind" type="button" role="tab" :aria-controls="'step' + ind"
                          aria-selected="true">
                          <div class="cir">
                            <i class="bi bi-person"></i>
                            <span class="bi bi-check"></span>
                          </div>
                          <span class="txt">{{
                            checkArray(data) ? data[0].label : data.label
                          }}</span>
                          <div class="line"></div>
                        </button>
                      </li>
                    </template>
                  </template>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div :class="'tab-pane fade ' + isTabContentActive(ind)" v-for="(data, ind) in proposalJson.fieldGroups"
                    :key="ind" :id="'step' + ind" role="tabpanel" :aria-labelledby="'step' + ind">
                    <div class="tab-body">
                      <!--Proposer detail form step1-->
                      <div class="floating-form application-section">
                        <h4 class="title_subtitle">
                          <!-- Let's start with -->
                          {{
                            checkArray(data)
                            ? data[0].description
                            : data.description
                          }}
                        </h4>
                        <!-- <span class="base-reg">{{ data.description }}</span> -->
                        <div class="form-wrapper pt-3">
                          <form @submit.prevent="submitForm(ind)" method="post">
                            <!-- <h5 class="mb-3">{{ data.label }}</h5> -->
                            <div v-if="checkArray(data)">
                              <div class="row mb-3 members-div" v-for="(value2, ind2) in data" :key="ind2">
                                <h5 class="members-wrapper">
                                  {{ value2.label }}
                                  <span v-if="value2.relation">&nbsp;({{ value2?.relation }})</span>
                                </h5>
                                <!-- if fields are available -->
                                <template v-for="(value3, ind3) in value2.fields" :key="ind3">
                                  <div :class="getColSize(value3.type, ind, ind2)" v-if="!value3.visibility ? true : checkVisibility(value3.visibility)">
                                    <div v-if="value3.type == 'text'">
                                      <!-- Text Field -->
                                      <div class="floating-label">
                                        <input class="floating-input" type="text" :ph="value3.label" :name="value3.name"
                                          :id="value3.id" :minlength="value3.min" :maxlength="value3.max"
                                          :disabled="value3.mandatory == 2" 
                                          v-model.trim="formInfo.fieldGroups[ind][ind2].fields[ind3].input" 
                                          @keyup="getValidation($event, value3.name, value3.id, ind, ind2, ind3)"
                                        />
                                        <label>{{ value3.label }}</label>
                                        <span class="error-msg" :id="'error_' + value3.id"></span>
                                      </div>
                                    </div>
                                    <!-- Number Field -->
                                    <div v-if="value3.type == 'number'" :class="getColSize(value3.type, ind, ind2)">
                                      <div class="floating-label">
                                        <input class="floating-input" type="number" :ph="value3.label" :name="value3.name"
                                          :id="value3.id" :disabled="value3.mandatory == 2" v-model.trim="
                                          formInfo.fieldGroups[ind][ind2].fields[ind3].input" 
                                          :title="getDescriptionText(value3.description)" 
                                          @keyup="getValidation($event, value3.name, value3.id, ind, ind2, ind3)"
                                        />
                                        <label>
                                          {{ value3.label }}
                                          <text v-if="
                                            value3.mandatory == '1' ||
                                            value3.mandatory == '2'
                                          " class="mandatory-mark">*</text>
                                        </label>
                                        <span class="error-msg" :id="'error_' + value3.id"></span>
                                      </div>
                                    </div>
                                    <!-- Date Field -->
                                    <div v-if="value3.type == 'date'" :class="getColSize(value3.type, ind, ind2)">
                                      <div class="floating-label">
                                        <input class="floating-input" type="date" :ph="value3.label" :name="value3.name"
                                          :id="value3.id" :minlength="value3.min" :maxlength="value3.max"
                                          :disabled="value3.mandatory == 2" 
                                          v-model.trim="formInfo.fieldGroups[ind][ind2].fields[ind3].input" 
                                          @keyup="getValidation($event, value3.name, value3.id, ind, ind2, ind3)"
                                        />
                                        <label>
                                          {{ value3.label }}
                                          <text v-if="
                                            value3.mandatory == '1' ||
                                            value3.mandatory == '2'
                                          " class="mandatory-mark">*</text>
                                        </label>
                                        <span class="error-msg" :id="'error_' + value3.id"></span>
                                      </div>
                                    </div>
                                    <!-- Single Select Field -->
                                    <div v-if="value3.type == 'single-select'" :class="getColSize(value3.type, ind, ind2)">
                                      <div class="floating-label">
                                        <select class="floating-select format" :name="value3.name" :id="value3.id"
                                          :disabled="value3.mandatory == 2" v-model.trim="
                                            formInfo.fieldGroups[ind][ind2].fields[ind3].input" 
                                            :title="getDescriptionText(value3.description)"
                                            @change="getValidation($event, value3.name, value3.id, ind, ind2, ind3)"
                                          >
                                          <option value="">Select</option>
                                          <option :value="item.Value" v-for="(item, ind3) in sortDropDown(
                                            value3.value
                                          )" :key="ind3">
                                            {{ item.Text }}
                                          </option>
                                        </select>
                                        <label>
                                          {{ value3.label }}
                                          <text v-if="
                                            value3.mandatory == '1' ||
                                            value3.mandatory == '2'
                                          " class="mandatory-mark">*</text>
                                        </label>
                                        <span class="error-msg" :id="'error_' + value3.id"></span>
                                      </div>
                                    </div>
                                    <!-- Multi Select Field -->
                                    <div v-if="value3.type == 'multi-select'" :class="getColSize(value3.type, ind, ind2)">
                                      <div class="floating-label">
                                        <select class="floating-select format" :name="value3.name" :id="value3.id"
                                          :disabled="value3.mandatory == 2" v-model.trim="
                                            formInfo.fieldGroups[ind][ind2].fields[ind3].input" 
                                            :title="getDescriptionText(value3.description)"
                                            @change="getValidation($event, value3.name, value3.id, ind, ind2, ind3)"
                                          >
                                          <option value="">Select</option>
                                          <option :value="item.Value" v-for="(item, ind3) in sortDropDown(
                                            value3.value
                                          )" :key="ind3">
                                            {{ item.Text }}
                                          </option>
                                        </select>
                                        <label>
                                          {{ value3.label }}
                                          <text v-if="
                                            value3.mandatory == '1' ||
                                            value3.mandatory == '2'
                                          " class="mandatory-mark">*</text>
                                        </label>
                                        <span class="error-msg" :id="'error_' + value3.id"></span>
                                      </div>
                                    </div>
                                    <!-- Static Field -->
                                    <div v-if="value3.type == 'static'">
                                      <div class="reverse-col mb-3">
                                        <label for="email" class="form-item-label">
                                          {{
                                              value3.label
                                          }}
                                        </label>
                                      </div>
                                    </div>
                                    <!-- Radio Button Field -->
                                    <div v-if="value3.type == 'boolean'" :class="getColSize(value3.type, ind, ind2)"
                                      :id="value3.id">
                                      <div class="d-flex align-items-center mb-3">
                                        <h5 class="label_radio_align">
                                          {{ value3.label }}
                                          <text v-if="
                                            value3.mandatory == '1' ||
                                            value3.mandatory == '2'
                                          " class="mandatory-mark">*</text>
                                        </h5>
                                        <div class="radio-btn-grp">
                                          <div class="radio-btn-wrap">
                                            <input type="radio" :id="value3.id + '1'" :name="value3.level" v-model.trim="
                                              formInfo.fieldGroups[ind][ind2].fields[ind3].input" 
                                              v-bind:value="'1'" :disabled="value3.mandatory == 2" 
                                              @click="getValidation($event, value3.name, value3.id, ind, ind2, ind3)"
                                            />
                                            <label :for="value3.id + '1'" class="radio-label">Yes</label>
                                          </div>
                                          <div class="radio-btn-wrap">
                                            <input type="radio" :id="value3.id + '2'" name="value3.level" v-model.trim="
                                              formInfo.fieldGroups[ind][ind2].fields[ind3].input" 
                                              v-bind:value="'0'" :disabled="value3.mandatory == 2" 
                                              @click="getValidation($event, value3.name, value3.id, ind, ind2, ind3)"
                                            />
                                            <label :for="value3.id + '2'" class="radio-label">No</label>
                                          </div>
                                        </div>
                                      </div>
                                      <span class="error-msg" :id="'error_' + value3.id"></span>
                                    </div>
                                  </div>
                                </template>
                                <!-- if fieldGroups are available -->
                                <template class="fieldGroups-wrapper" v-for="(value3, ind3) in value2.fieldGroups"
                                  :key="ind3">
                                  <h5 class="mb-3 pt-2">{{ value3.label }}</h5>
                                  <template v-for="(value4, ind4) in value3.fields" :key="ind4">
                                    <div :class="getColSize(value4.type, ind, ind2)" v-if="!value4.visibility ? true : checkVisibility(value4.visibility)">
                                      <div v-if="value4.type == 'text'">
                                        <!-- Text Field -->
                                        <div class="floating-label">
                                          <input class="floating-input" type="text" :ph="value4.label" :name="value4.name"
                                            :id="value4.id + ind2" :minlength="value4.min" :maxlength="value4.max"
                                            :disabled="value4.mandatory == 2" 
                                            v-model.trim="formInfo.fieldGroups[ind][ind2]['fieldGroups'][ind3].fields[ind4].input" 
                                            @keyup="getValidation($event, value4.name, value4.id, ind, ind2, ind3)"
                                          />
                                          <label>{{ value4.label }}
                                            <text v-if="
                                              value4.mandatory == '1' ||
                                              value4.mandatory == '2'
                                            " class="mandatory-mark">*</text>
                                          </label>
                                          <span class="error-msg" :id="'error_' + value4.id + ind2"></span>
                                        </div>
                                      </div>
                                      <!-- Number Field -->
                                      <div v-if="value4.type == 'number'">
                                        <div class="floating-label">
                                          <input class="floating-input" type="number" :ph="value4.label" :name="value4.name"
                                            :id="value4.id + ind2" :disabled="value4.mandatory == 2" v-model.trim="
                                            formInfo.fieldGroups[ind][ind2]['fieldGroups'][ind3].fields[ind4].input"
                                            :title="getDescriptionText(value4.description)"
                                            @keyup="getValidation($event, value4.name, value4.id, ind, ind2, ind3)"
                                          />
                                          <label>
                                            {{ value4.label }}
                                            <text v-if="
                                              value4.mandatory == '1' ||
                                              value4.mandatory == '2'
                                            " class="mandatory-mark">*</text>
                                          </label>
                                          <span class="error-msg" :id="'error_' + value4.id + ind2"></span>
                                        </div>
                                      </div>
                                      <!-- Date Field -->
                                      <div v-if="value4.type == 'date'">
                                        <div class="floating-label">
                                          <input class="floating-input" type="date" :ph="value4.label" :name="value4.name"
                                            :id="value4.id + ind2" :minlength="value4.min" :maxlength="value4.max"
                                            :disabled="value4.mandatory == 2" v-model.trim="
                                            formInfo.fieldGroups[ind][ind2]['fieldGroups'][ind3].fields[ind4].input"
                                            @keyup="getValidation($event, value4.name, value4.id, ind, ind2, ind3)"
                                            />
                                          <label>
                                            {{ value4.label }}
                                            <text v-if="
                                              value4.mandatory == '1' ||
                                              value4.mandatory == '2'
                                            " class="mandatory-mark">*</text>
                                          </label>
                                          <span class="error-msg" :id="'error_' + value4.id + ind2"></span>
                                        </div>
                                      </div>
                                      <!-- Single Select Field -->
                                      <div v-if="value4.type == 'single-select'">
                                        <div class="floating-label">
                                          <select class="floating-select format" :name="value4.name" :id="value4.id + ind2"
                                            :disabled="value4.mandatory == 2" v-model.trim="
                                            formInfo.fieldGroups[ind][ind2]['fieldGroups'][ind3].fields[ind4].input"
                                            :title="getDescriptionText(value4.description)"
                                            @change="getValidation($event, value4.name, value4.id, ind, ind2, ind3)"
                                          >
                                            <option value="">Select</option>
                                            <option :value="item.Value" v-for="(item, ind5) in sortDropDown(
                                              value4.value
                                            )" :key="ind5">
                                              {{ item.Text }}
                                            </option>
                                          </select>
                                          <label>
                                            {{ value4.label }}
                                            <text v-if="
                                              value4.mandatory == '1' ||
                                              value4.mandatory == '2'
                                            " class="mandatory-mark">*</text>
                                          </label>
                                          <span class="error-msg" :id="'error_' + value4.id + ind2"></span>
                                        </div>
                                      </div>
                                      <!-- Multi Select Field -->
                                      <div v-if="value4.type == 'multi-select'">
                                        <div class="floating-label">
                                          <select class="floating-select format" :name="value4.name" :id="value4.id + ind2"
                                            :disabled="value4.mandatory == 2" v-model.trim="
                                            formInfo.fieldGroups[ind][ind2]['fieldGroups'][ind3].fields[ind4].input"
                                            :title="getDescriptionText(value4.description)"
                                            @change="getValidation($event, value4.name, value4.id, ind, ind2, ind3)"
                                          >
                                            <option value="">Select</option>
                                            <option :value="item.Value" v-for="(item, ind5) in sortDropDown(
                                              value4.value
                                            )" :key="ind5">
                                              {{ item.Text }}
                                            </option>
                                          </select>
                                          <label>
                                            {{ value4.label }}
                                            <text v-if="
                                              value4.mandatory == '1' ||
                                              value4.mandatory == '2'
                                            " class="mandatory-mark">*</text>
                                          </label>
                                          <span class="error-msg" :id="'error_' + value4.id + ind2"></span>
                                        </div>
                                      </div>
                                      <!-- Static Field -->
                                      <div v-if="value4.type == 'static'">
                                        <div class="reverse-col mb-3">
                                          <label for="email" class="form-item-label">
                                            {{
                                                value4.label
                                            }}
                                          </label><br/>
                                        </div>
                                      </div>
                                      <!-- Radio Button Field -->
                                      <div v-if="value4.type == 'boolean'" :id="value4.id">
                                        <div class="d-flex align-items-center mb-3">
                                          <h5 class="label_radio_align">
                                            {{ value4.label }}
                                            <text v-if="
                                              value4.mandatory == '1' ||
                                              value4.mandatory == '2'
                                            " class="mandatory-mark">*</text>
                                          </h5>
                                          <div class="radio-btn-grp">
                                            <div class="radio-btn-wrap">
                                              <input type="radio" :id="value4.id + '1' + ind2" :name="value4.level" v-model.trim="
                                                formInfo.fieldGroups[ind][ind2]['fieldGroups'][ind3].fields[ind4].input" 
                                                v-bind:value="'1'" :disabled="value4.mandatory == 2" 
                                                @click="getValidation($event, value4.name, value4.id, ind, ind2, ind3)"
                                              />
                                              <label :for="value4.id + '1' + ind2" class="radio-label">Yes</label>
                                            </div>
                                            <div class="radio-btn-wrap">
                                              <input type="radio" :id="value4.id + '2' + ind2" :name="value4.level" v-model.trim="
                                                formInfo.fieldGroups[ind][ind2]['fieldGroups'][ind3].fields[ind4].input" 
                                                v-bind:value="'0'" :disabled="value4.mandatory == 2" 
                                                @click="getValidation($event, value4.name, value4.id, ind, ind2, ind3)"
                                              />
                                              <label :for="value4.id + '2' + ind2" class="radio-label">No</label>
                                            </div>
                                          </div>
                                        </div>
                                        <span class="error-msg" :id="'error_' + value4.id + ind2"></span>
                                      </div>
                                    </div>
                                  </template>
                                </template>
                              </div>
                            </div>
                            <div v-else>
                              <div class="health-questions" v-if="ind == 'healthQuestions'">
                                <!-- if fields are available -->
                                <div class="row mb-3" v-if="data.fields">
                                  <template v-for="(value2, ind2) in data.fields" :key="ind2">
                                    <h4 v-if="
                                      !value2.visibility
                                        ? true
                                        : checkVisibility(
                                          getVisitibilityExpIndexZero(
                                            value2.visibility
                                          )
                                        )
                                    ">
                                      <label>
                                        {{ value2.label }}
                                        <text v-if="
                                          value2.mandatory == '1' ||
                                          value2.mandatory == '2'
                                        " class="mandatory-mark">*</text>
                                      </label>
                                    </h4>
                                    <template v-for="(value3, ind3) in selectedMembersList" :key="ind3">
                                      <div :class="getColSize(value2.type, ind, ind2)" v-if="!value2.visibility? true: checkVisibility( getVisitibilityExp(value2.visibility, ind3))">
                                        <div v-if="value2.type == 'text'">
                                          <div class="floating-label">
                                            <input class="floating-input" type="text" :ph="value2.label"
                                              :name="value2.name" :id="value2.id" :minlength="value2.min"
                                              :maxlength="value2.max" :disabled="value2.mandatory == 2" 
                                              v-model.trim="formInfo.fieldGroups[ind].fields[ind2].input[ind3].answer" 
                                              @keyup="getValidation($event, value2.name, value2.id, ind, ind2, ind3)"
                                            />
                                            <label>
                                              {{ value3.member }}
                                              <text v-if="
                                                value2.mandatory == '1' ||
                                                value2.mandatory == '2'
                                              " class="mandatory-mark">*</text>
                                            </label>
                                            <span class="error-msg" :id="'error_' + value2.id + '_' + ind3"></span>
                                          </div>
                                        </div>
                                        <!-- Number Field -->
                                        <div v-if="value2.type == 'number'">
                                          <div class="floating-label">
                                            <input class="floating-input" type="number" :ph="value2.label"
                                              :name="value2.name" :id="value2.id" :disabled="value2.mandatory == 2"
                                              v-model.trim="formInfo.fieldGroups[ind].fields[ind2].input[ind3].answer"
                                              :title="getDescriptionText(value2.description)"
                                              @keyup="getValidation($event, value2.name, value2.id, ind, ind2, ind3)"
                                            />
                                            <label>
                                              {{ value3.member }}
                                              <text v-if="
                                                value2.mandatory == '1' ||
                                                value2.mandatory == '2'
                                              " class="mandatory-mark">*</text>
                                            </label>
                                            <span class="error-msg" :id="'error_' + value2.id + '_' + ind3"></span>
                                          </div>
                                        </div>
                                        <!-- Date Field -->
                                        <div v-if="value2.type == 'date'">
                                          <div class="floating-label">
                                            <input class="floating-input" type="date" :ph="value2.label"
                                              :name="value2.name" :id="value2.id" :minlength="value2.min"
                                              :maxlength="value2.max" :disabled="value2.mandatory == 2" v-model.trim="
                                              formInfo.fieldGroups[ind].fields[ind2].input[ind3].answer" 
                                              @keyup="getValidation($event, value2.name, value2.id, ind, ind2, ind3)"
                                            />
                                            <label>
                                              {{ value3.member }}
                                              <text v-if="
                                                value2.mandatory == '1' ||
                                                value2.mandatory == '2'
                                              " class="mandatory-mark">*</text>
                                            </label>
                                            <span class="error-msg" :id="'error_' + value2.id + '_' + ind3"></span>
                                          </div>
                                        </div>
                                        <!-- Single Select Field -->
                                        <div v-if="value2.type == 'single-select'">
                                          <div class="floating-label">
                                            <select class="floating-select format" :name="value2.name" :id="value2.id"
                                              :disabled="value2.mandatory == 2" 
                                              v-model.trim="formInfo.fieldGroups[ind].fields[ind2].input[ind3].answer" 
                                              :title="getDescriptionText(value2.description)"
                                              @change="getValidation($event, value2.name, value2.id, ind, ind2, ind3)"
                                            >
                                              <option value="">Select</option>
                                              <option :value="item.Value" v-for="(item, ind3) in sortDropDown(value2.value)" :key="ind3">
                                                {{ item.Text }}
                                              </option>
                                            </select>
                                            <label>
                                              {{ value3.member }}
                                              <text v-if="
                                                value2.mandatory == '1' ||
                                                value2.mandatory == '2'
                                              " class="mandatory-mark">*</text>
                                            </label>
                                            <span class="error-msg" :id="'error_' + value2.id + '_' + ind3"></span>
                                          </div>
                                        </div>
                                        <!-- Multi Select Field -->
                                        <div v-if="value2.type == 'multi-select'">
                                          <div class="floating-label">
                                            <select class="floating-select format" :name="value2.name" :id="value2.id"
                                              :disabled="value2.mandatory == 2" 
                                              v-model.trim="formInfo.fieldGroups[ind].fields[ind2].input[ind3].answer" 
                                              :title="getDescriptionText(value2.description)"
                                              @change="getValidation($event, value2.name, value2.id, ind, ind2, ind3)"
                                            >
                                              <option value="">Select</option>
                                              <option :value="item.Value" v-for="(item, ind3) in sortDropDown(value2.value)" :key="ind3">
                                                {{ item.Text }}
                                              </option>
                                            </select>
                                            <label>
                                              {{ value3.member }}
                                              <text v-if="
                                                value2.mandatory == '1' ||
                                                value2.mandatory == '2'
                                              " class="mandatory-mark">*</text>
                                            </label>
                                            <span class="error-msg" :id="'error_' + value2.id + '_' + ind3"></span>
                                          </div>
                                        </div>
                                        <!-- Static Field -->
                                        <div v-if="value2.type == 'static'">
                                          <div class="reverse-col mb-3">
                                            <label for="email" class="form-item-label">
                                              {{
                                                  value2.label
                                              }}
                                            </label><br/>
                                          </div>
                                        </div>
                                        <!-- Radio Button Field -->
                                        <div v-if="value2.type == 'boolean'" :id="value2.id" class="mb-3">
                                          <div class="d-flex align-items-center">
                                            <h5 class="label_radio_align">
                                              {{ value3.member }}
                                              <text v-if="
                                                value2.mandatory == '1' ||
                                                value2.mandatory == '2'
                                              " class="mandatory-mark">*</text>
                                            </h5>
                                            <div class="radio-btn-grp">
                                              <div class="radio-btn-wrap">
                                                <input type="radio" :id="value2.id + '1' + ind3" :name="
                                                  value2.name + '_' + ind3" 
                                                  v-model.trim="formInfo.fieldGroups[ind].fields[ind2].input[ind3].answer" 
                                                  v-bind:value="'1'" 
                                                  :disabled="value2.mandatory == 2"
                                                  @click="getValidation($event, value2.name, value2.id, ind, ind2, ind3)" 
                                                />
                                                <label :for="value2.id + '1' + ind3" class="radio-label">Yes</label>
                                              </div>
                                              <div class="radio-btn-wrap">
                                                <input type="radio" :id="value2.id + '2' + ind3" :name="
                                                  value2.name + '_' + ind3" 
                                                  v-model.trim="formInfo.fieldGroups[ind].fields[ind2].input[ind3].answer" 
                                                  v-bind:value="'0'" 
                                                  :disabled="value2.mandatory == 2" 
                                                  @click="getValidation($event, value2.name, value2.id, ind, ind2, ind3)"
                                                />
                                                <label :for="value2.id + '2' + ind3" class="radio-label">No</label>
                                              </div>
                                            </div>
                                          </div>
                                          <span class="error-msg" :id="'error_' + value2.id + '_' + ind3"></span>
                                        </div>
                                      </div>
                                    </template>
                                  </template>
                                </div>
                              </div>
                              <div v-else class="health-questions-else">
                                <!-- if fields are available -->
                                <div class="row mb-3" v-if="data.fields">
                                  <template v-for="(value2, ind2) in data.fields" :key="ind2">
                                    <div :class="getColSize(value2.type, ind, ind2)" v-if="!value2.visibility ? true : checkVisibility(value2.visibility)">
                                      <!-- Text Field -->
                                      <div v-if="value2.type == 'text'">
                                        <div class="floating-label">
                                          <input class="floating-input" type="text" :ph="value2.label" :name="value2.name"
                                            :id="value2.id" :minlength="value2.min" :maxlength="value2.max"
                                            :disabled="value2.mandatory == 2" 
                                            v-model.trim="formInfo.fieldGroups[ind].fields[ind2].input" 
                                            @keyup="getValidation($event, value2.name, value2.id, ind, ind2)"
                                          />
                                          <label>
                                            {{ value2.label }}
                                            <text v-if="
                                              value2.mandatory == '1' ||
                                              value2.mandatory == '2'
                                            " class="mandatory-mark">*</text>
                                          </label>
                                          <span class="error-msg" :id="'error_' + value2.id"></span>
                                        </div>
                                      </div>
                                      <!-- Number Field -->
                                      <div v-if="value2.type == 'number'">
                                        <div class="floating-label">
                                          <input class="floating-input" type="number" :ph="value2.label" :name="value2.name"
                                            :id="value2.id" :disabled="value2.mandatory == 2" 
                                            v-model.trim="formInfo.fieldGroups[ind].fields[ind2].input" 
                                            :title="getDescriptionText(value2.description)" 
                                            @keyup="getValidation($event, value2.name, value2.id, ind, ind2)"
                                          />
                                          <label>
                                            {{ value2.label }}
                                            <text v-if="
                                              value2.mandatory == '1' ||
                                              value2.mandatory == '2'
                                            " class="mandatory-mark">*</text>
                                          </label>
                                          <span class="error-msg" :id="'error_' + value2.id"></span>
                                        </div>
                                      </div>
                                      <!-- Date Field -->
                                      <div v-if="value2.type == 'date'">
                                        <div class="floating-label">
                                          <input class="floating-input" type="date" :ph="value2.label" :name="value2.name"
                                            :id="value2.id" :minlength="value2.min" :maxlength="value2.max"
                                            :disabled="value2.mandatory == 2" 
                                            v-model.trim="formInfo.fieldGroups[ind].fields[ind2].input" 
                                            @keyup="getValidation($event, value2.name, value2.id, ind, ind2)"
                                          />
                                          <label>
                                            {{ value2.label }}
                                            <text v-if="
                                              value2.mandatory == '1' ||
                                              value2.mandatory == '2'
                                            " class="mandatory-mark">*</text>
                                          </label>
                                          <span class="error-msg" :id="'error_' + value2.id"></span>
                                        </div>
                                      </div>
                                      <!-- Single Select Field -->
                                      <div v-if="value2.type == 'single-select'">
                                        <div class="floating-label">
                                          <select class="floating-select format" :name="value2.name" :id="value2.id"
                                            :disabled="value2.mandatory == 2" 
                                            v-model.trim="formInfo.fieldGroups[ind].fields[ind2].input" 
                                            :title="getDescriptionText(value2.description)"
                                            @change="getValidation($event, value2.name, value2.id, ind, ind2)"
                                          >
                                            <option value="">Select</option>
                                            <option :value="item.Value" v-for="(item, ind3) in sortDropDown(
                                              value2.value
                                            )" :key="ind3">
                                              {{ item.Text }}
                                            </option>
                                          </select>
                                          <label>
                                            {{ value2.label }}
                                            <text v-if="
                                              value2.mandatory == '1' ||
                                              value2.mandatory == '2'
                                            " class="mandatory-mark">*</text>
                                          </label>
                                          <span class="error-msg" :id="'error_' + value2.id"></span>
                                        </div>
                                      </div>
                                      <!-- Multi Select Field -->
                                      <div v-if="value2.type == 'multi-select'">
                                        <div class="floating-label">
                                          <select class="floating-select format" :name="value2.name" :id="value2.id"
                                            :disabled="value2.mandatory == 2" 
                                            v-model.trim="formInfo.fieldGroups[ind].fields[ind2].input" 
                                            :title="getDescriptionText(value2.description)"
                                            @change="getValidation($event, value2.name, value2.id, ind, ind2)"
                                          >
                                            <option value="">Select</option>
                                            <option :value="item.Value" v-for="(item, ind3) in sortDropDown(
                                              value2.value
                                            )" :key="ind3">
                                              {{ item.Text }}
                                            </option>
                                          </select>
                                          <label>
                                            {{ value2.label }}
                                            <text v-if="
                                              value2.mandatory == '1' ||
                                              value2.mandatory == '2'
                                            " class="mandatory-mark">*</text>
                                          </label>
                                          <span class="error-msg" :id="'error_' + value2.id"></span>
                                        </div>
                                      </div>
                                      <!-- Static Field -->
                                      <div v-if="value2.type == 'static'">
                                        <div class="reverse-col mb-3">
                                          <label for="email" class="form-item-label">
                                            {{
                                                value2.label
                                            }}
                                          </label><br/>
                                        </div>
                                      </div>
                                      <!-- Radio Button Field -->
                                      <div v-if="value2.type == 'boolean'" :id="value2.id">
                                        <div class="d-flex align-items-center mb-3">
                                          <h5 class="label_radio_align">
                                            {{ value2.label }}
                                            <text v-if="
                                              value2.mandatory == '1' ||
                                              value2.mandatory == '2'
                                            " class="mandatory-mark">*</text>
                                          </h5>
                                          <div class="radio-btn-grp">
                                            <div class="radio-btn-wrap">
                                              <input type="radio" :id="value2.id + '1'" :name="value2.name"
                                                v-model.trim="formInfo.fieldGroups[ind].fields[ind2].input"
                                                v-bind:value="'1'" :disabled="value2.mandatory == 2" 
                                                @click="getValidation($event, value2.name, value2.id, ind, ind2)"
                                              />
                                              <label :for="value2.id + '1'" class="radio-label">Yes</label>
                                            </div>
                                            <div class="radio-btn-wrap">
                                              <input type="radio" :id="value2.id + '2'" :name="value2.name"
                                                v-model.trim="formInfo.fieldGroups[ind].fields[ind2].input"
                                                v-bind:value="'0'" :disabled="value2.mandatory == 2" 
                                                @click="getValidation($event, value2.name, value2.id, ind, ind2)"
                                              />
                                              <label :for="value2.id + '2'" class="radio-label">No</label>
                                            </div>
                                          </div>
                                        </div>
                                        <span class="error-msg" :id="'error_' + value2.id"></span>
                                      </div>
                                    </div>
                                  </template>
                                </div>
                                <!-- if fieldGroups are available -->
                                <template v-for="(value2, ind2) in data.fieldGroups" :key="ind2">
                                  <div class="fieldGroups-wrapper fieldGroupsInputLabel" v-if="!value2.visibility? true: checkVisibility(value2.visibility)">
                                    <h5 class="mb-3">{{ value2.label }}</h5>
                                    <div class="row mb-3">
                                      <template v-for="(value3, ind3) in value2.fields" :key="ind3">
                                        <div :class="getColSize(value3.type, ind, ind2)" v-if="!value3.visibility ? true : checkVisibility(value3.visibility)">
                                          <!-- Text Field --> 
                                          <div v-if="value3.type == 'text'">
                                            <div class="floating-label">
                                              <input class="floating-input" type="text" :ph="value3.label" :name="value3.name"
                                                :id="value3.id" :minlength="value3.min" :maxlength="value3.max"
                                                :disabled="value3.mandatory == 2" 
                                                v-model.trim="formInfo.fieldGroups[ind]['fieldGroups'][ind2].fields[ind3].input" 
                                                :title="getDescriptionText(value3.description)" 
                                                @keyup="getValidation($event, value3.name, value3.id, ind, ind2)"
                                              />
                                              <label>
                                                {{ value3.label }}
                                                <text v-if="
                                                  value3.mandatory == '1' ||
                                                  value3.mandatory == '2'
                                                " class="mandatory-mark">*</text>
                                              </label>
                                              <span class="error-msg" :id="'error_' + value3.id"></span>
                                            </div>
                                          </div>
                                          <!-- Number Field -->
                                          <div v-if="value3.type == 'number'">
                                            <div class="floating-label">
                                              <input class="floating-input" type="number" :ph="value3.label"
                                                :name="value3.name" :id="value3.id" :disabled="value3.mandatory == 2"
                                                v-model.trim="formInfo.fieldGroups[ind]['fieldGroups'][ind2].fields[ind3].input" 
                                                :title="getDescriptionText(value3.description)" 
                                                @keyup="getValidation($event, value3.name, value3.id, ind, ind2)"
                                              />
                                              <label>
                                                {{ value3.label }}
                                                <text v-if="
                                                  value3.mandatory == '1' ||
                                                  value3.mandatory == '2'
                                                " class="mandatory-mark">*</text>
                                              </label>
                                              <span class="error-msg" :id="'error_' + value3.id"></span>
                                            </div>
                                          </div>
                                          <!-- Date Field -->
                                          <div v-if="value3.type == 'date'">
                                            <div class="floating-label">
                                              <input class="floating-input" type="date" :ph="value3.label" :name="value3.name"
                                                :id="value3.id" :minlength="value3.min" :maxlength="value3.max"
                                                :disabled="value3.mandatory == 2" 
                                                v-model.trim="formInfo.fieldGroups[ind]['fieldGroups'][ind2].fields[ind3].input" 
                                                @keyup="getValidation($event, value3.name, value3.id, ind, ind2)"
                                              />
                                              <label>
                                                {{ value3.label }}
                                                <text v-if="
                                                  value3.mandatory == '1' ||
                                                  value3.mandatory == '2'
                                                " class="mandatory-mark">*</text>
                                              </label>
                                              <span class="error-msg" :id="'error_' + value3.id"></span>
                                            </div>
                                          </div>
                                          <!-- Single Select Field -->
                                          <div v-if="value3.type == 'single-select'">
                                            <div class="floating-label">
                                              <select class="floating-select format" :name="value3.name" :id="value3.id"
                                                :disabled="value3.mandatory == 2" 
                                                v-model.trim="formInfo.fieldGroups[ind]['fieldGroups'][ind2].fields[ind3].input" 
                                                :title="getDescriptionText(value2.description)"
                                                @change="getValidation($event, value3.name, value3.id, ind, ind2)"
                                              >
                                                <option value="">Select</option>
                                                <option :value="item.Value" v-for="(item, ind4) in sortDropDown(value3.value)" :key="ind3">
                                                  {{ item.Text }}
                                                </option>
                                              </select>
                                              <label>
                                                {{ value3.label }}
                                                <text v-if="
                                                  value3.mandatory == '1' ||
                                                  value3.mandatory == '2'
                                                " class="mandatory-mark">*</text>
                                              </label>
                                              <span class="error-msg" :id="'error_' + value3.id"></span>
                                            </div>
                                          </div>
                                          <!-- Multi Select Field -->
                                          <div v-if="value3.type == 'multi-select'">
                                            <div class="floating-label">
                                              <select class="floating-select format" :name="value3.name" :id="value3.id"
                                                :disabled="value3.mandatory == 2" 
                                                v-model.trim="formInfo.fieldGroups[ind]['fieldGroups'][ind2].fields[ind3].input" 
                                                :title="getDescriptionText(value2.description)"
                                                @change="getValidation($event, value3.name, value3.id, ind, ind2)"
                                              >
                                                <option value="">Select</option>
                                                <option :value="item.Value" v-for="(item, ind4) in sortDropDown(value3.value)" :key="ind3">
                                                  {{ item.Text }}
                                                </option>
                                              </select>
                                              <label>
                                                {{ value3.label }}
                                                <text v-if="
                                                  value3.mandatory == '1' ||
                                                  value3.mandatory == '2'
                                                " class="mandatory-mark">*</text>
                                              </label>
                                              <span class="error-msg" :id="'error_' + value3.id"></span>
                                            </div>
                                          </div>
                                          <!-- Static Field -->
                                          <div v-if="value3.type == 'static'">
                                            <div class="reverse-col mb-3">
                                              <label for="email" class="form-item-label">
                                                {{
                                                    value3.label
                                                }}
                                              </label><br/>
                                            </div>
                                          </div>
                                          <!-- Radio Button Field -->
                                          <div v-if="value3.type == 'boolean'" :id="value3.id">
                                            <div class="d-flex align-items-center mb-3">
                                              <h5 class="label_radio_align">
                                                {{ value3.label }}
                                                <text v-if="
                                                  value3.mandatory == '1' ||
                                                  value3.mandatory == '2'
                                                " class="mandatory-mark">*</text>
                                              </h5>
                                              <div class="radio-btn-grp">
                                                <div class="radio-btn-wrap">
                                                  <input type="radio" :id="value3.id + '1'" :name="value3.level" 
                                                    v-model.trim="formInfo.fieldGroups[ind]['fieldGroups'][ind2].fields[ind3].input" 
                                                    v-bind:value="'1'" 
                                                    :disabled="value3.mandatory == 2" 
                                                    @click="getValidation($event, value3.name, value3.id, ind, ind2)"
                                                  />
                                                  <label :for="value3.id + '1'" class="radio-label">Yes</label>
                                                </div>
                                                <div class="radio-btn-wrap">
                                                  <input type="radio" :id="value3.id + '2'" :name="value3.level" 
                                                    v-model.trim="formInfo.fieldGroups[ind]['fieldGroups'][ind2].fields[ind3].input" 
                                                    v-bind:value="'0'" 
                                                    :disabled="value3.mandatory == 2" 
                                                    @keyup="getValidation($event, value3.name, value3.id, ind, ind2)"
                                                  />
                                                  <label :for="value3.id + '2'" class="radio-label">No</label>
                                                </div>
                                              </div>
                                            </div>
                                            <span class="error-msg" :id="'error_' + value3.id"></span>
                                          </div>
                                        </div>
                                      </template>
                                    </div>
                                  </div>
                                </template>
                              </div>
                            </div>

                            <!-- Submit Form Button -->
                            <div class="btn-hold text-center submit_prev_btn">
                              <button type="button" class="btn btn-outline-secondary rounded-pill mx-2"  @click="goBack()" v-if="currentTab != 'proposerDetails'">
                                <em class="bi bi-chevron-left me-2"></em>
                                <span>Previous</span>
                              </button>
                              <button type="submit" class="btn btn-warning rounded-pill text-white mx-2">
                                <span>Proceed</span>
                                <em class="bi bi-chevron-right ms-2"></em>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                      <!--Proposer detail form step1-->
                    </div>
                  </div>
                </div>

                <!-- Delete Modal Start-->
                <div class="modal fade" id="savechangesModal" tabindex="-1" aria-labelledby="savechangesModalLabel"
                  aria-hidden="true">
                  <div class="modal-dialog modal-sm modal-dialog-centered">
                    <div class="modal-content">
                      <div class="modal-header border-0">
                        <h5 class="modal-title" id="savechangesModalLabel"></h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body py-0">
                        <div class="text-center">
                          <h4 class="text-primary">
                            Do you really want to delete Nominee1
                          </h4>
                        </div>
                      </div>
                      <div class="modal-footer justify-content-center border-0">
                        <div class="btn-hold mb-4">
                          <button class="btn btn-sm btn-outline-secondary rounded-pill" type="button">
                            No
                          </button>
                          <button class="btn btn-sm btn-warning text-white rounded-pill" type="button"
                            data-bs-dismiss="modal">
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Delete Modal end-->
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4">
            <div class="pd-right sticky-top" v-if="selectedPlan">
              <div class="pd-right-section1 shadow">
                <div class="d-flex justify-content-between align-items-center poposer-header">
                  <h3>Policy Details</h3>
                  <div class="ref-num">
                    <h6 v-if="this.applicationNo != '' && this.applicationNo != null " class="appno">Application Number : {{this.applicationNo}}</h6>
                    <h6 v-if="this.uiQuoteId != '' && this.uiQuoteId != null " class="propno">CRN : {{this.uiQuoteId}}</h6>
                    <div class="d-flex justify-content-end" v-if="selectedPlan.other.biUrl">
                      <a :href="selectedPlan.other.biUrl" target="_blank">
                        <button class="btn btn-warning rounded-pill text-white p-1 px-3"> Benefit Illustration </button>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="policy-dts-wrap">
                  <div class="policy-name">
                    <figure>
                      <img :src="selectedPlan?.supportingData?.insCompanyLogo" alt="image" />
                    </figure>
                    <h6 class="mb-0 me-auto">
                      {{ selectedPlan?.insuranceAndProducts?.productName }}<br/>
                      {{ selectedPlan.productDetails.planOption.planName }}
                    </h6>
                    <a :href="
                      selectedPlan?.supportingData?.Messages?.brochureLink
                    " target="_blank">
                      <em class="download-new"></em>
                    </a>
                  </div>
                  <div class="p-details">
                    <ul class="policy-item-detail1 mt-4">
                      <li>
                        <h6>Sum Insured</h6>
                        <span> <em class="rupee">&#x20B9;</em> {{
                          convertInLakh(
                            selectedPlan?.individualDetails[0]?.sumInsured
                          )
                        }}</span>
                      </li>
                      <li>
                        <h6>Members Insured</h6>
                        {{ noOfAdult }} {{ (noOfAdult > 1) ? 'Adults' : 'Adult' }}
                        <!-- <span v-if="noOfChild > 0">  &amp; {{ noOfChild }} {{ (noOfChild > 1) ? 'Children' : 'Child'}}</span> -->
                      </li>
                      <li>
                        <h6>Policy Tenure</h6>
                        <span>
                          <!--{{ selectedPlan?.productDetails?.policyTermUnit }}-->
                          {{
                            currency(
                              selectedPlan.productDetails
                                .premiumForEachPolicyTerm[selectedPolicyIndex]
                                .policyTerm
                            )
                          }}
                          Year
                        </span>
                      </li>
                      <!-- <li>
                        <h6>Payment Frequency</h6>
                        <span>{{ selectedPlan?.productDetails?.policyTermUnit }}
                          Yearly</span>
                      </li> -->
                      <li>
                        <h6>Net Premium</h6>
                        <span><em class="rupee">&#x20B9;</em> 
                          {{
                            currency(
                              selectedPlan.productDetails
                                .premiumForEachPolicyTerm[selectedPolicyIndex]
                                .premiumForEachPPO[0].premiumForEachPPF[0]
                                .premiumValue
                            )
                          }}
                        </span>
                      </li>
                      <!-- <li>
                          <h6>Addons</h6>
                          <span>1,430</span>
                      </li> -->
                      <li>
                        <h6>GST @ 18%</h6>
                        <span> <em class="rupee">&#x20B9;</em> 
                          {{
                            currency(
                              selectedPlan.productDetails
                                .premiumForEachPolicyTerm[selectedPolicyIndex]
                                .premiumForEachPPO[0].premiumForEachPPF[0]
                                .totalTax
                            )
                          }}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <ul class="ttl-preminum poposer-footer">
                  <li><b>Total Premium</b></li>
                  <span>&#8377;
                    {{
                      currency(
                        selectedPlan.productDetails.premiumForEachPolicyTerm[
                          selectedPolicyIndex
                        ].premiumForEachPPO[0].premiumForEachPPF[0]
                          .totalPremiumValue
                      )
                    }}
                  </span>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <!--row-->

        <!-- Custom Modal -->
        <div v-if="customModal" id="customModal" class="custom-modal modal fade show">
          <div class="modal-backdrop fade show"></div>
          <div class="modal-dialog modal-dialog-centered premium-modal">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Based on the updated details, your premium has been revised.</h5>
                <button type="button" @click="closeCustomModel()" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="premium">
                  <template v-for="(data, index) in this.selectedPlan.individualDetails" :key="index">
                    <div class="col-12 col-md-12 mt-3">
                      <h3>{{ this.formInfo["fieldGroups"]["insuredMembers"][index]["fieldGroups"]["insuredMemberPersonalDetails"]["fields"]["firstName"]["input"] +' '+this.formInfo["fieldGroups"]["insuredMembers"][index]["fieldGroups"]["insuredMemberPersonalDetails"]["fields"]["middleName"]["input"]+' '+this.formInfo["fieldGroups"]["insuredMembers"][index]["fieldGroups"]["insuredMemberPersonalDetails"]["fields"]["lastName"]["input"]}}</h3>
                      <div class="row">
                        <div class="col-6 col-md-6">
                          <label>Previous Age</label>
                          <h3 class="age">{{data?.age}} Years</h3>
                        </div>
                        <div class="col-6 col-md-6">
                          <label>As per date of birth</label>
                          <h3 class="age">{{this.newSelectedPlan?.individualDetails[index]["age"]}} Years</h3>
                        </div>
                      </div>
                    </div>
                  </template>
                  <div class="premium-content row">
                      <div class="col-6 col-md-6">
                        <h3>Total Premium</h3>
                      </div>
                      <div class="col-6 col-md-6">
                        <span classs="pre-premium">
                          <s>&#8377;{{ currency(
                            selectedPlan?.productDetails?.premiumForEachPolicyTerm[selectedPolicyIndex]?.premiumForEachPPO[0]?.premiumForEachPPF[0]?.totalPremiumValue)
                          }}/-</s></span> &nbsp; &nbsp; &nbsp; &nbsp;
                        <span classs="cur-premium">
                          &#8377;{{ currency(
                            newSelectedPlan?.productDetails?.premiumForEachPolicyTerm[selectedPolicyIndex]?.premiumForEachPPO[0]?.premiumForEachPPF[0]?.totalPremiumValue)
                          }}/-
                        </span>
                      </div>
                  </div>
                  <div class="">
                    <div class="text-center">
                      <button type="button" class="btn rounded-pill mx-2"  @click="acceptAndContinue()">
                        <span>Accept & Continue</span>
                      </button>
                      <br/>
                      <router-link to="/multi-quote">
                        <div class="back-to-link d-flex align-items-center pt-4 pb-2">
                          <h3 class="mb-0">View Other Plans</h3>
                        </div>
                      </router-link>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- ./Custom Modal -->

      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import loadingPage from "@/components/loading.vue";
import $ from "jquery";
export default {
  name: "ProposerDetailspage",
  components: {
    Header,
    loadingPage,
  },
  mixins: [],
  mounted() {

    this.configData = this.$store.state.configData;
    // Setting Distributer ID
    this.distributorID = this.configData["DISTRIBUTER"]["distributerID"];

    if(sessionStorage.getItem('proposal_ui_id') && sessionStorage.getItem('proposal_ui_id') != 'undefined') {
      this.proposalUiId = JSON.parse(sessionStorage.getItem("proposal_ui_id"));
    }

    if (sessionStorage.getItem('filledDataTab')) {
      this.currentTab = JSON.parse(sessionStorage.getItem("filledDataTab"));
    }
    this.requestJson = JSON.parse(sessionStorage.getItem("request_json"));
    this.selectedPlan = JSON.parse(
      sessionStorage.getItem("selected_plan_data")
    );
    console.log("this.selectedPlan: ", this.selectedPlan);
    if (sessionStorage.getItem('uiQuoteId')) {
      this.uiQuoteId = JSON.parse(sessionStorage.getItem('uiQuoteId'));
    }
    // DP Relaetd
    let sessionData = sessionStorage.getItem("userProfile");
    if (sessionData != null) {
      this.userData = JSON.parse(sessionData);
      this.selectedMembersList = this.userData.memberList;
      console.log("this.userData: ", this.userData.memberList);
    }

    this.rmData = JSON.parse(sessionStorage.getItem("rm_data"));
    this.agentCode = this.rmData["Userid"];

    this.selectedPolicyIndex = this.getSelectedPolicyIndex(
      this.requestJson.data.product.policyTerm
    );

    sessionStorage.setItem("request_json_flag_proposal", JSON.stringify(1));

    this.noOfAdult = 0;
    this.noOfChild = 0;
    /*for (let i = 0; i < this.userData.memberList.length; i++) {
      if (this.userData.memberList[i].member == 'Son' || this.userData.memberList[i].member == 'Daughter') {
        this.noOfChild++;
      } else {
        this.noOfAdult++;
      }
    }*/
    for (let i = 0; i < this.selectedPlan.individualDetails.length; i++) {
      if (this.selectedPlan.individualDetails[i].insuredRelWithProposer == 'Son' || this.selectedPlan.individualDetails[i].insuredRelWithProposer == 'Daughter') {
        this.noOfChild++;
      } else {
        this.noOfAdult++;
      }
    }

    this.productCode = this.selectedPlan.insuranceAndProducts.productCode;

    console.log('this.productCode: ', this.productCode);
    
    console.log("this.CurrentTab: ", this.currentTab);

    this.getProposal();
  },
  props: {},
  data() {
    return {
      loading: false,
      configData: "",
      currentTab: "proposerDetails",
      noOfAdult: 0,
      noOfChild: 0,
      requestJson: "",
      selectedPlan: "",
      membersInputJson: [],
      selectedPolicyIndex: 0,
      proposalJson: "",
      proposalJson1: "",
      formInfo: {},
      errorCounter: 0,
      submittedTab: "",
      tabsArr: [],
      userData: "",
      selectedMembersList: [],
      proposalUiId: 0,
      rmData: "",
      applicationNo: "",
      distributorID: "",
      pollRequestId: "",
      quoteResponseID: "",
      responseData: "",
      customModal: false,
      currentSectionIndex: "",
      currentQuoteResponseData: ""
    };
  },
  methods: {
    getProposal() {
      this.loading = true;
      var self = this;
      let reqData = {
        "productId": this.selectedPlan.insuranceAndProducts.productCode,
        "manufacturerId": this.selectedPlan.insuranceAndProducts.insuranceCompanyCode,
        //"planId": this.selectedPlan.productDetails.planOption.planId,
        "version": 1
      };
      // let reqData = {
      //   productId: "2825",
      //   manufacturerId: "HDFCERGO",
      //   version: 1,
      // };
      let headers = {};

      this.backendApi("getProposal", reqData, headers, "get")
        .then((response) => {
          this.loading = false;

          console.log("proposal response: ", response);

          if (response.status == "error") {

            let msg = [response.data.detail];
            this.$router.push({ path: '/networkalert', query: { backUrl: 'addonrider-page', msg: msg } });

          } else if (response.data.errors.length > 0) {

            let msg = [];
            for (let i = 0; i < response.data.errors.length; i++) {
              msg.push(response.data.errors[i]["errorIdentifier"]);
            }
            this.$router.push({ path: '/networkalert', query: { backUrl: 'addonrider-page', msgError: "We are facing some issue while fetching proposal data", reqId: response.data.reqId, msg: msg } });

          } else {
            this.proposalJson = response.data.data;

            // Modify proposal Json for Member List
            let membersElements =
              this.proposalJson.fieldGroups.insuredMembers[0];

              console.log("membersElements kkkk: ", membersElements);

            for (var i = 0; i < this.selectedPlan.individualDetails.length; i++) {
              if (i > 0) {
                this.proposalJson.fieldGroups.insuredMembers[i] =
                  membersElements;
                  //this.proposalJson.fieldGroups.insuredMembers[i]["default"] = this.getExpWithIndex(membersElements["default"], i);
              }
            }

            let allMembers = JSON.parse(
              JSON.stringify(this.proposalJson.fieldGroups["insuredMembers"])
            );

            console.log("allMembers: ", allMembers);

            for (var k = 0; k < allMembers.length; k++) {
              allMembers[k]["id"] = parseInt(allMembers[k]["id"] + "" + k);
              allMembers[k]["relation"] = this.selectedPlan.individualDetails[k].insuredRelWithProposer;
              // Adding index value in members array
              for(var key in allMembers[k]["fieldGroups"]["insuredMemberPersonalDetails"]["fields"]) {
                let tmp2 = allMembers[k]["fieldGroups"]["insuredMemberPersonalDetails"]["fields"][key]["default"];
                if(tmp2) {
                  allMembers[k]["fieldGroups"]["insuredMemberPersonalDetails"]["fields"][key]["default"] = this.getExpWithIndex(tmp2, k);
                }
              }

              let tmpJson = { memberSequenceNumber: k + 1, answer: "" };
              this.membersInputJson.push(tmpJson);
            }

            console.log(
              "this.membersInputJson: ",
              JSON.stringify(this.membersInputJson)
            );

            console.log("Updated allMembers: ", allMembers);

            this.proposalJson.fieldGroups.insuredMembers = allMembers;

            // Modify Proposal Json for Health Questions
            if(this.proposalJson?.fieldGroups.healthQuestions) {
              let healthQuestions = JSON.parse(
                JSON.stringify(this.proposalJson?.fieldGroups["healthQuestions"])
              );

              let finalQuestions = this.getMemberWiseInput(healthQuestions);
              console.log("finalQuestions: ", finalQuestions);
              this.proposalJson.fieldGroups.healthQuestions = finalQuestions;
            }
            console.log("pppp: ", this.proposalJson); 

            this.formInfo = this.proposalJson;
            //console.log('this.proposalJson.data.fieldGroups: ', this.proposalJson.data.fieldGroups);

            // Removing traceInfo and distributer attriutes from proposal json visibility
            //delete this.proposalJson.fieldGroups.traceInfo;
            //delete this.proposalJson.fieldGroups.distributor;
            this.proposalJson.fieldGroups.traceInfo.visibility = "false";
            this.proposalJson.fieldGroups.distributor.visibility = "false";
            //console.log('after deleted traceinfo and distributer: ', this.formInfo);

            // Temprary update for test purpose
            let arr1 = [{ "Text": "Maharastra", "Value": "maharastra" }];
            let arr2 = [{ "Text": "Indian", "Value": "in" }];
            let arr3 = [{ "Text": "Father", "Value": "father" }];
            //this.proposalJson.fieldGroups.proposerDetails.fieldGroups.communicationAddressDetails.fields.state.value = arr1;
            //this.proposalJson.fieldGroups.proposerDetails.fieldGroups.communicationAddressDetails.fields.nationality.value = arr2;
            //this.proposalJson.fieldGroups.nomineeInfo.fields.nomineeRelationWithProposer.value = arr3;
            // End temprary update for test purpose

            for (var key in this.proposalJson.fieldGroups) {    
              if(key != 'traceInfo' && key != 'distributor') {
                if (this.checkArray(this.proposalJson.fieldGroups[key])) {
                  this.tabsArr.push(
                    this.proposalJson.fieldGroups[key][0]["name"]
                  );
                } else {
                  this.tabsArr.push(this.proposalJson.fieldGroups[key]["name"]);
                }
              }
            }

            console.log("this.tabsArr: ", this.tabsArr);


            // Setting up previously filled data 
            let kycData = JSON.parse(sessionStorage.getItem("kyc_response"));
            if(kycData) {
              console.log('inside kyc data', kycData);
              this.formInfo['fieldGroups']['proposerDetails']['fieldGroups']['personalDetails']['fields']['title']['input'] = this.getSalutation2(this.userData.gender);
              this.formInfo['fieldGroups']['proposerDetails']['fieldGroups']['personalDetails']['fields']['firstName']['input'] = kycData['personalInformation']['firstName'];
              this.formInfo['fieldGroups']['proposerDetails']['fieldGroups']['personalDetails']['fields']['middleName']['input'] = kycData['personalInformation']['middleName'];
              this.formInfo['fieldGroups']['proposerDetails']['fieldGroups']['personalDetails']['fields']['lastName']['input'] = kycData['personalInformation']['lastName'];
              this.formInfo['fieldGroups']['proposerDetails']['fieldGroups']['personalDetails']['fields']['mobileNumber']['input'] = kycData['personalInformation']['mobileNumber'];
              this.formInfo['fieldGroups']['proposerDetails']['fieldGroups']['personalDetails']['fields']['PAN']['input'] = kycData['personalInformation']['pan'];
              this.formInfo['fieldGroups']['proposerDetails']['fieldGroups']['personalDetails']['fields']['email']['input'] = (kycData['personalInformation']['email'])?kycData['personalInformation']['email']:this.userData["contactDetails"]["emailId"];
              this.formInfo['fieldGroups']['proposerDetails']['fieldGroups']['personalDetails']['fields']['gender']['input'] = this.userData.gender.toLowerCase();
              this.formInfo['fieldGroups']['proposerDetails']['fieldGroups']['personalDetails']['fields']['maritalStatus']['input'] = this.getMaritalStatusForProposer();
              this.formInfo['fieldGroups']['proposerDetails']['fieldGroups']['personalDetails']['fields']['dateOfBirth']['input'] = this.getDateFormat(kycData['personalInformation']['dateOfBirth']);
              // Communication Address
              this.formInfo['fieldGroups']['proposerDetails']['fieldGroups']['communicationAddressDetails']['fields']['address1']['input'] = kycData['communicationAddressDetails']['address1'];
              this.formInfo['fieldGroups']['proposerDetails']['fieldGroups']['communicationAddressDetails']['fields']['address2']['input'] = kycData['communicationAddressDetails']['address2'];
              this.formInfo['fieldGroups']['proposerDetails']['fieldGroups']['communicationAddressDetails']['fields']['address3']['input'] = kycData['communicationAddressDetails']['address3'];
              this.formInfo['fieldGroups']['proposerDetails']['fieldGroups']['communicationAddressDetails']['fields']['zipCode']['input'] = kycData['communicationAddressDetails']['zipcode'];
              //this.formInfo['fieldGroups']['proposerDetails']['fieldGroups']['identificationDetails']['fields']['cKYCId']['input'] = kycData['kycInfo']['Manufacturer_KYC_Id'];
              // Permanent Address
              this.formInfo['fieldGroups']['proposerDetails']['fieldGroups']['permanentAddressDetails']['fields']['address1']['input'] = kycData['permanentAddressDetails']['address1'];
              this.formInfo['fieldGroups']['proposerDetails']['fieldGroups']['permanentAddressDetails']['fields']['address2']['input'] = kycData['permanentAddressDetails']['address2'];
              this.formInfo['fieldGroups']['proposerDetails']['fieldGroups']['permanentAddressDetails']['fields']['address3']['input'] = kycData['permanentAddressDetails']['address3'];
              this.formInfo['fieldGroups']['proposerDetails']['fieldGroups']['permanentAddressDetails']['fields']['zipCode']['input'] = kycData['permanentAddressDetails']['zipcode'];
              this.formInfo['fieldGroups']['proposerDetails']['fieldGroups']['permanentAddressDetails']['fields']['cityDistrict']['input'] = kycData['permanentAddressDetails']['citydistrict'];
              this.formInfo['fieldGroups']['proposerDetails']['fieldGroups']['permanentAddressDetails']['fields']['state']['input'] = kycData['permanentAddressDetails']['state'];
              // Setting Pin code section 
              this.getPincodeDetails(kycData['personalInformation']['zipCode']);
            }

            // Setting Prefilled Insurer Details
            for (var key in this.proposalJson.fieldGroups.insuredMembers) { 
              console.log("KEEEEEEEEEEEEEYYYYYYYYYYY : ", key);
              if(this.formInfo['fieldGroups']['insuredMembers'][key]['relation'] == 'Self') {
                console.log('self relation identified');
                this.formInfo['fieldGroups']['insuredMembers'][key]['fieldGroups']['insuredMemberPersonalDetails']['fields']['firstName']['input'] = kycData['personalInformation']['firstName'];
                this.formInfo['fieldGroups']['insuredMembers'][key]['fieldGroups']['insuredMemberPersonalDetails']['fields']['middleName']['input'] = kycData['personalInformation']['middleName'];
                this.formInfo['fieldGroups']['insuredMembers'][key]['fieldGroups']['insuredMemberPersonalDetails']['fields']['lastName']['input'] = kycData['personalInformation']['lastName'];
                this.formInfo['fieldGroups']['insuredMembers'][key]['fieldGroups']['insuredMemberPersonalDetails']['fields']['gender']['input'] = this.userData.gender.toLowerCase();
                this.formInfo['fieldGroups']['insuredMembers'][key]['fieldGroups']['insuredMemberPersonalDetails']['fields']['dateOfBirth']['input'] = this.getDateFormat(kycData['personalInformation']['dateOfBirth']);
                // this.formInfo['fieldGroups']['insuredMembers']['0']['fieldGroups']['insuredMemberPersonalDetails']['fields']['maritalStatus']['input'] = ;
                // this.formInfo['fieldGroups']['insuredMembers']['0']['fieldGroups']['insuredMemberPersonalDetails']['fields']['insuredRelWithProposer']['input'] = ;
              }
              this.formInfo['fieldGroups']['insuredMembers'][key]['fieldGroups']['insuredMemberPersonalDetails']['fields']['insuredRelWithProposer']['input'] = this.checkRelationString(this.selectedPlan["individualDetails"][key]["insuredRelWithProposer"].toLowerCase(), this.formInfo['fieldGroups']['insuredMembers'][key]['fieldGroups']['insuredMemberPersonalDetails']['fields']['insuredRelWithProposer']['value'], this.selectedPlan["individualDetails"][key]["gender"]);
              this.formInfo['fieldGroups']['insuredMembers'][key]['fieldGroups']['insuredMemberPersonalDetails']['fields']['gender']['input'] = this.selectedPlan["individualDetails"][key]["gender"].toLowerCase();
              this.formInfo['fieldGroups']['insuredMembers'][key]['fieldGroups']['insuredMemberPersonalDetails']['fields']['ifDependent']['input'] = this.checkIfDependent(this.selectedPlan["individualDetails"][key]["insuredRelWithProposer"].toLowerCase(), this.selectedPlan["individualDetails"][key]["age"]);
              this.formInfo['fieldGroups']['insuredMembers'][key]['fieldGroups']['insuredMemberPersonalDetails']['fields']['title']['input'] = this.getSalutation(this.selectedPlan["individualDetails"][key]["insuredRelWithProposer"].toLowerCase(), this.selectedPlan["individualDetails"][key]["gender"]);
              this.formInfo['fieldGroups']['insuredMembers'][key]['fieldGroups']['insuredMemberPersonalDetails']['fields']['maritalStatus']['input'] = this.getMaritalStatus(this.selectedPlan["individualDetails"][key]["insuredRelWithProposer"], this.selectedPlan["individualDetails"][key]["gender"]);

            }

            let filledData = JSON.parse(sessionStorage.getItem("filledData"));
           
            if (filledData) {
              console.log('inside filled data', filledData);
              console.log("form info: ", this.formInfo);

              if (this.productCode == filledData.productId) {

                console.log('product id compared');
                //this.formInfo = filledData;
                let filledDataTab = JSON.parse(sessionStorage.getItem("filledDataTab"));

                for (var key in filledData.fieldGroups) {
                  if (key != "distributor") {
                    let data = filledData['fieldGroups'][key];

                    // If Array
                    if (this.checkArray(data)) {
                      let subArray = filledData['fieldGroups'][key];
                      for (var key_1 in subArray) {
                        // If Fields
                        if(subArray[key_1].fields) {
                          let fieldsArr = subArray[key_1].fields;
                          console.log("fieldsArr: ", fieldsArr);
                          for (var key_2 in fieldsArr) {
                            let data2 = filledData['fieldGroups'][key][key_1]['fields'][key_2];
                          }
                        }

                        // If FieldGroups
                        if(subArray[key_1].fieldGroups) {
                          console.log('inside array fieldgroup');
                          for(var key_2 in subArray[key_1].fieldGroups) {
                            let fieldsArr = subArray[key_1].fieldGroups[key_2].fields;
                            console.log("fieldsArr: ", fieldsArr);
                            for (var key_3 in fieldsArr) {
                              console.log("inside fieldsArr");
                              let data3 = filledData['fieldGroups'][key][key_1]['fieldGroups'][key_2]['fields'][key_3];

                              if (data3.type == 'multi-select') {
                                try {
                                  this.formInfo['fieldGroups'][key][key_1]['fieldGroups'][key_2]['fields'][key_3]['input'] = filledData['fieldGroups'][key][key_1]['fieldGroups'][key_2]['fields'][key_3]['input'];
                                } catch (err) {
                                  console.log('error during assignment:', err);
                                  //console.log("this.formInfo['fieldGroups'][" + key + "]['fieldGroups'][" + key2 + "]['fields'][" + key3 + "][input]: " + filledData['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3]['input']);
                                }
                              } else if (data3.type == 'boolean') {
                                try {
                                  this.formInfo['fieldGroups'][key][key_1]['fieldGroups'][key_2]['fields'][key_3]['input'] = filledData['fieldGroups'][key][key_1]['fieldGroups'][key_2]['fields'][key_3]['input'];
                                }
                                catch (err) {
                                  console.log('error during assignment:', err);
                                  //console.log("this.formInfo['fieldGroups'][" + key + "]['fieldGroups'][" + key2 + "]['fields'][" + key3 + "][input]: " + filledData['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3]['input']);
                                }
                              } else if (data3.type == 'number') {
                                try {
                                  this.formInfo['fieldGroups'][key][key_1]['fieldGroups'][key_2]['fields'][key_3]['input'] = parseInt(filledData['fieldGroups'][key][key_1]['fieldGroups'][key_2]['fields'][key_3]['input']);
                                }
                                catch (err) {
                                  console.log('error during assignment:', err);
                                  //console.log("this.formInfo['fieldGroups'][" + key + "]['fieldGroups'][" + key2 + "]['fields'][" + key3 + "][input]: " + filledData['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3]['input']);
                                }
                              } else if (data3.type == 'currency') {
                                try {
                                  console.log("currency in filled data",(filledData['fieldGroups'][key][key_1]['fieldGroups'][key_2]['fields'][key_3]['input']))
                                  this.formInfo['fieldGroups'][key][key_1]['fieldGroups'][key_2]['fields'][key_3]['input'] = new Intl.NumberFormat('en-IN').format(parseInt(filledData['fieldGroups'][key][key_1]['fieldGroups'][key_2]['fields'][key_3]['input']));
                                }
                                catch (err) {
                                  console.log('error during assignment:', err);
                                  //console.log("this.formInfo['fieldGroups'][" + key + "]['fieldGroups'][" + key2 + "]['fields'][" + key3 + "][input]: " + filledData['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3]['input']);
                                }
                              } else {
                                try {
                                  this.formInfo['fieldGroups'][key][key_1]['fieldGroups'][key_2]['fields'][key_3]['input'] = filledData['fieldGroups'][key][key_1]['fieldGroups'][key_2]['fields'][key_3]['input'];
                                }
                                catch (err) {
                                  console.log('error during assignment:', err);
                                  //console.log("this.formInfo['fieldGroups'][" + key + "]['fieldGroups'][" + key2 + "]['fields'][" + key3 + "][input]: " + filledData['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3]['input']);
                                }
                              }

                            }
                          }

                            
                        }
                        
                      }
                    }
                    // End : If Array

                    if (data.fields) {
                      for (var key2 in data.fields) {
                        let data2 = filledData['fieldGroups'][key]['fields'][key2];
                        if (data2.type == 'multi-select') {
                          this.formInfo['fieldGroups'][key]['fields'][key2]['input'] = filledData['fieldGroups'][key]['fields'][key2]['input'];
                        } else if (data2.type == 'boolean') {
                          this.formInfo['fieldGroups'][key]['fields'][key2]['input'] = filledData['fieldGroups'][key]['fields'][key2]['input'];
                        }  else if (data2.type == 'number') {
                          this.formInfo['fieldGroups'][key]['fields'][key2]['input'] = parseInt(filledData['fieldGroups'][key]['fields'][key2]['input']);
                        }  else if (data2.type == 'currency') {
                          console.log("currency in filled data",(filledData['fieldGroups'][key]['fields'][key2]['input']))
                          this.formInfo['fieldGroups'][key]['fields'][key2]['input'] = new Intl.NumberFormat('en-IN').format(parseInt(filledData['fieldGroups'][key]['fields'][key2]['input']));
                        } else {
                          this.formInfo['fieldGroups'][key]['fields'][key2]['input'] = filledData['fieldGroups'][key]['fields'][key2]['input'];
                        }
                      }
                    }

                    // fieldGroups
                    if (data.fieldGroups) {
                      for (var key2 in data.fieldGroups) {
                        let data2 = filledData['fieldGroups'][key]['fieldGroups'][key2];
                        for (var key3 in data2.fields) {
                          let data3 = filledData['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3];
                          if (data3.type == 'multi-select') {
                            try {
                              this.formInfo['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3]['input'] = filledData['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3]['input'];
                            } catch (err) {
                              console.log('error during assignment:', err);
                              console.log("this.formInfo['fieldGroups'][" + key + "]['fieldGroups'][" + key2 + "]['fields'][" + key3 + "][input]: " + filledData['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3]['input']);
                            }
                          } else if (data3.type == 'boolean') {
                            try {
                              this.formInfo['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3]['input'] = filledData['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3]['input'];
                            }
                            catch (err) {
                              console.log('error during assignment:', err);
                              console.log("this.formInfo['fieldGroups'][" + key + "]['fieldGroups'][" + key2 + "]['fields'][" + key3 + "][input]: " + filledData['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3]['input']);
                            }
                          } else if (data3.type == 'number') {
                            try {
                              this.formInfo['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3]['input'] = parseInt(filledData['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3]['input']);
                            }
                            catch (err) {
                              console.log('error during assignment:', err);
                              console.log("this.formInfo['fieldGroups'][" + key + "]['fieldGroups'][" + key2 + "]['fields'][" + key3 + "][input]: " + filledData['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3]['input']);
                            }
                          } else if (data3.type == 'currency') {
                            try {
                              console.log("currency in filled data",(filledData['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3]['input']))
                              this.formInfo['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3]['input'] = new Intl.NumberFormat('en-IN').format(parseInt(filledData['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3]['input']));
                            }
                            catch (err) {
                              console.log('error during assignment:', err);
                              console.log("this.formInfo['fieldGroups'][" + key + "]['fieldGroups'][" + key2 + "]['fields'][" + key3 + "][input]: " + filledData['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3]['input']);
                            }
                          } else {
                            try {
                              this.formInfo['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3]['input'] = filledData['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3]['input'];
                            }
                            catch (err) {
                              console.log('error during assignment:', err);
                              console.log("this.formInfo['fieldGroups'][" + key + "]['fieldGroups'][" + key2 + "]['fields'][" + key3 + "][input]: " + filledData['fieldGroups'][key]['fieldGroups'][key2]['fields'][key3]['input']);
                            }
                          }
                        }

                        // 333333
                        // fieldGroups.fieldGroups
                        if (data2.fieldGroups) {
                          for (var key3 in data2.fieldGroups) {
                            let data3 = filledData['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3];
                            for (var key4 in data3.fields) {
                              let data4 = filledData['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3]['fields'][key4];
                              if (data4.type == 'multi-select') {
                                try {
                                  this.formInfo['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3]['fields'][key4]['input'] = filledData['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3]['fields'][key4]['input'];
                                } catch (err) {
                                  console.log('error during assignment:', err);
                                  console.log("this.formInfo['fieldGroups'][" + key + "]['fieldGroups'][" + key2 + "]['fields'][" + key3 + "]['fields'][" + key4 + "][input]" + filledData['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3]['fields'][key4]['input']);
                                }
                              } else if (data4.type == 'boolean') {
                                try {
                                  this.formInfo['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3]['fields'][key4]['input'] = filledData['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3]['fields'][key4]['input'];
                                } catch (err) {
                                  console.log('error during assignment:', err);
                                  console.log("this.formInfo['fieldGroups'][" + key + "]['fieldGroups'][" + key2 + "]['fields'][" + key3 + "]['fields'][" + key4 + "][input]" + filledData['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3]['fields'][key4]['input']);
                                }
                              } else if (data4.type == 'number') {
                                try {
                                  this.formInfo['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3]['fields'][key4]['input'] = parseInt(filledData['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3]['fields'][key4]['input']);
                                } catch (err) {
                                  console.log('error during assignment:', err);
                                  console.log("this.formInfo['fieldGroups'][" + key + "]['fieldGroups'][" + key2 + "]['fields'][" + key3 + "]['fields'][" + key4 + "][input]" + filledData['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3]['fields'][key4]['input']);
                                }
                              } else if (data4.type == 'currency') {
                                try {
                                  console.log("inside currency filled data",(filledData['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3]['fields'][key4]['input']))
                                  this.formInfo['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3]['fields'][key4]['input'] = new Intl.NumberFormat('en-IN').format(parseInt(filledData['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3]['fields'][key4]['input']));
                                } catch (err) {
                                  console.log('error during assignment:', err);
                                  console.log("this.formInfo['fieldGroups'][" + key + "]['fieldGroups'][" + key2 + "]['fields'][" + key3 + "]['fields'][" + key4 + "][input]" + filledData['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3]['fields'][key4]['input']);
                                }
                              } else {

                                try {
                                  this.formInfo['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3]['fields'][key4]['input'] = filledData['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3]['fields'][key4]['input'];
                                } catch (err) {
                                  console.log('error during assignment:', err);
                                  console.log("this.formInfo['fieldGroups'][" + key + "]['fieldGroups'][" + key2 + "]['fields'][" + key3 + "]['fields'][" + key4 + "][input]" + filledData['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3]['fields'][key4]['input']);
                                }

                                //this.formInfo['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3]['fields'][key4]['input'] = filledData['fieldGroups'][key]['fieldGroups'][key2]['fieldGroups'][key3]['fields'][key4]['input'];
                              }
                            }
                          }
                        }
                        // 333333


                      }
                    }



                  }
                }

                if (filledDataTab) {
                  console.log('inside filled data tab', filledDataTab);
                  setTimeout(function () {
                    //self.activeTabAfterReload(filledDataTab);
                    self.activeTab(filledDataTab);
                  }, 1000);
                }
              } else {
                // Removing previous data
                localStorage.removeItem('filledData');
                localStorage.removeItem('filledDataTab');
                sessionStorage.removeItem('filledData');
                sessionStorage.removeItem('filledDataTab');
              }
            }
            // End setting previously filled data

            // Setting traceinfo and distributor details section

            if (this.formInfo.fieldGroups.distributor.fields.distributorID) {
              this.formInfo.fieldGroups.distributor.fields.distributorID.input = this.distributorID;
            }   
            if (this.formInfo.fieldGroups.distributor.fields.agentCode) {
              this.formInfo.fieldGroups.distributor.fields.agentCode.input = this.agentCode;
            }   

            // End mofification
            
          }
        })
        .catch((error) => {
          console.log("error msg block : get proposal", error);
          self.loading = false;
          // self.apiError = true;
          //   let msg=['We are facing some issue from while fetching quotation API']

          //   this.$router.push({ path: '/networkalert', query: {backUrl:'policy-quote', msg: msg }});
        });
    },
    saveProposal(sectionIndex) {
      console.log('save proposal called', this.formInfo);
      let NRI = "";
      try {
        NRI = (this.formInfo.fieldGroups.proposerDetails.fieldGroups.personalDetails.fields.residentStatus.input == 'indianResident') ? 'No' : 'Yes';
      } catch (error) { }
      // DP Section
      //console.log("this.proposalUiId.toString()", this.proposalUiId.toString());
      //this.convertProposalJson();

      // Setting in 1SBproposalRefId in traceInfo section
      if (this.proposalUiId != '0') {
        this.formInfo.fieldGroups.traceInfo.fields["1SBproposalRefId"].input = this.proposalUiId;
      } 

      if(this.selectedPlan?.trackInfo?.manufacturerQuoteID) {
        this.formInfo.fieldGroups.traceInfo.fields["manufacturerQuoteID"].input = this.selectedPlan?.trackInfo?.manufacturerQuoteID;
      }
      console.log('save proposal called modified: ', this.formInfo);
      this.uiQuoteId = JSON.parse(sessionStorage.getItem("uiQuoteId"));
      let propoalData = {
        "proposal_ui_id": this.proposalUiId.toString(),
        "ui_quote_id": JSON.parse(sessionStorage.getItem("uiQuoteId")),
        "submit_response_id": "",
        "rm_code": this.rmData.Userid,
        "name": this.formInfo.fieldGroups.proposerDetails.fieldGroups.personalDetails.fields.firstName.input,
        "mobile_number": this.formInfo.fieldGroups.proposerDetails.fieldGroups.personalDetails.fields.mobileNumber.input,
        "dob": this.formInfo.fieldGroups.proposerDetails.fieldGroups.personalDetails.fields.dateOfBirth.input,
        "gender": this.formInfo.fieldGroups.proposerDetails.fieldGroups.personalDetails.fields.gender.input,
        "zipcode": this.formInfo.fieldGroups.proposerDetails.fieldGroups.communicationAddressDetails.fields.zipCode.input,
        "city": this.formInfo.fieldGroups.proposerDetails.fieldGroups.communicationAddressDetails.fields.cityDistrict.input,
        "state": this.formInfo.fieldGroups.proposerDetails.fieldGroups.communicationAddressDetails.fields.state.input,
        "NRI": NRI,
        "medical": "",
        "insurance_company_code": this.selectedPlan.insuranceAndProducts.insuranceCompanyCode,
        "product_code": this.selectedPlan.insuranceAndProducts.productCode,
        "proposal_json": JSON.stringify(this.formInfo)
      };
      //  this.loading = true;
      this.loadingPage = true;
      var headers = {
        "quoteId": this.uiQuoteId,
        Authorization: "Basic " + window.btoa(process.env.VUE_APP_DATA_PER_USERNPASS),
        "Content-Type": "application/json",
      };



      //console.log('qData: ', qData);
      this.backendApi("saveProposal", propoalData, headers)
        .then((response) => {
          //console.log('save quote response: ', response);
          // this.loading = false;
          this.loadingPage = false;
          this.activeNextTab(sectionIndex);
          if (response == 'error') {
            self.apiError = true;
            // this.$router.push({ path: '/alert', query: { status: 'Error',backUrl:"proposal-page", msg: 'We are facing some issue while saving proposal details' }});

          }


          // else if(response.status=="error")
          // {
          //   let msg=['We are facing some issue while saving proposal data']

          //   this.$router.push({ path: '/networkalert', query: {backUrl:'proposal-page', msg: msg }});
          // }
          else if (response && response.data) {
            this.proposalUiId = response.data.data.proposal_ui_id;
            this.uiQuoteId = response.data.data.ui_quote_id;

            console.log('this.proposalUiId: ', this.proposalUiId);
            sessionStorage.setItem("proposal_ui_id", JSON.stringify(this.proposalUiId));

            // Saving Logs
            let logData = {
              "ui_quote_id": this.uiQuoteId,
              "quote_request_id": this.proposalUiId,
              //"mobile_number": this.userData.contactDetails.mobileNumber,
              "mobile_number": this.requestJson.data.personalInformation.individualDetails[0].mobileNumber,
              "dob": this.formInfo.fieldGroups.proposerDetails.fieldGroups.personalDetails.fields.dateOfBirth.input,
              "page_name": "proposal",
              "tag_name": this.submittedTab,
              "data": ""//JSON.stringify(this.formInfo)
            };
            console.log('logData: ', logData);
            this.saveLogData(logData);

          }
        })
        .catch((error) => {
          console.log('error msg block dp', error);
          // let msg=['We are facing some issue from backend while saving proposal data ']

          //   this.$router.push({ path: '/alert', query: {backUrl:'proposal-page', msg: msg }});
        });
    },
    saveLogData(logData) {
      console.log('save log data called', logData);

      var headers = {
        "quoteId": this.uiQuoteId,
        Authorization: "Basic " + window.btoa(process.env.VUE_APP_DATA_PER_USERNPASS),
        "Content-Type": "application/json",
      };
      //console.log('logData: ', logData);
      this.backendApi("saveLogData", logData, headers)
        .then((response) => {
          //console.log('save quote response: ', response);
          if (response == 'error') {
            //self.apiError = true;
          } else if (response && response.data) {
            console.log('log data saved');
          }
        })
        .catch((error) => {
          console.log('error msg block dp', error);
        });
    },
    isAreaSelected(val) {
      if (val == "proposerDetails") {
        //return "true";
      }
    },
    activePage(val) {
      if (val == "proposerDetails") {
        return "active";
      } else {
        return "disabled";
        //return "";
      }
    },
    isTabContentActive(val) {
      if (val == "proposerDetails") {
        return "show active";
      } else {
        //return "disabled";
        return "";
      }
    },
    getColSize(val, ind1, ind2) {
      if (ind1 == "healthQuestions") {
        return "col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12";
      } else if(ind1 == "nomineeInfo") {
        if(ind2 == 'address') {
          return "col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12";
        } else {
          return "col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4";
        }
        console.log('get col size: ', val, ind1, ind2)
      } else if (val == "boolean") {
        return "col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12";
      } else {
        return "col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 col-xxl-4";
      }
    },
    currency(amt) {
      //return new Intl.NumberFormat().format(amt);
      let tmpAmt = parseFloat(amt).toFixed(2);
      return new Intl.NumberFormat().format(tmpAmt);
    },
    checkArray(data) {
      return Array.isArray(data);
    },
    getDescriptionText(str) {
      let descText = "";
      if (str) {
        var check = str.includes("#");
        if (check) {
          let tempArr = str.split("#");
          descText = tempArr[0];
        } else {
          descText = str;
        }
      } else {
        descText = "";
      }
      return descText;
    },
    sortDropDown(list) {
      //return list;
      if (list) {
        list = list.sort(sortbyname);
        function sortbyname(a, b) {
          if (a.Text < b.Text) return -1;
          if (a.Text > b.Text) return 1;
          return 0;
        }
        return list;
      }
    },
    submitForm(sectionIndex) {
      console.log("form submitted: ", sectionIndex);
      let subArray = this.formInfo["fieldGroups"][sectionIndex];
      console.log("subArray: ", subArray);

      // ############# Validation Section #############
      this.errorCounter = 0;
      $(".error-msg").text("");
      // If Fields
      var scrollTop = "";

      // If Array
      if (this.checkArray(subArray)) {
        for (var key in subArray) {
          // If Fields
          if(subArray[key].fields) {
            let fieldsArr = subArray[key].fields;
            console.log("fieldsArr: ", fieldsArr);
            for (var key2 in fieldsArr) {
              console.log("inside fieldsArr");
              let data = fieldsArr[key2];
              // Evaluating default field
              if(data.default) {
                eval(this.getFinalObject(data.default));
              }
              if (
                this.checkVisibility(data.visibility) &&
                this.checkVisibility(subArray[key].visibility)
              ) {
                let errorTxt = this.getDescriptionTextArray(data.description);
                if (
                  data.mandatory == "1" &&
                  data.type == "checkbox" &&
                  data.input == false
                ) {
                  this.errorCounter++;
                  if (scrollTop == "") {
                    scrollTop = data.id;
                  }
                  $("#error_" + data.id).text("This field is required");
                  console.log("invalid 1  mandatory:", data);
                } else if (
                  data.type == "multi-select" &&
                  data.mandatory == "1" &&
                  data.input.length == 0
                ) {
                  this.errorCounter++;
                  if (scrollTop == "") {
                    scrollTop = data.id;
                  }
                  $("#error_" + data.id).text("This field is required");
                } else if (
                  data.mandatory == "1" &&
                  !data.input &&
                  data.input != "0"
                ) {
                  this.errorCounter++;
                  if (scrollTop == "") {
                    scrollTop = data.id;
                  }
                  $("#error_" + data.id).text("This field is required");
                  //console.log('invalid 1 0000 mandatory:', data);
                } else if (
                  data.input &&
                  data.pattern &&
                  this.checkPattern(data.input, data.pattern) == false
                ) {
                  this.errorCounter++;
                  if (scrollTop == "") {
                    scrollTop = data.id;
                  }
                  $("#error_" + data.id).text(errorTxt[0]);
                  console.log("data.id: ", data.id);
                  console.log("rules 1: ", data.pattern);
                } else if (
                  data.input &&
                  data.max &&
                  data.type == "number" &&
                  (data.input < data.min || data.input > data.max)
                ) {
                  console.log("inside number: ", data);
                  this.errorCounter++;
                  if (scrollTop == "") {
                    scrollTop = data.id;
                  }
                  $("#error_" + data.id).text(
                    "Value should be between " + data.min + " and " + data.max
                  );
                  console.log(
                    "rules number 1 Incorrect: ",
                    data.validation,
                    data
                  );
                } else if (
                  data.validation != null &&
                  data.input &&
                  this.checkValidation(data.validation, data.description) == false
                ) {
                  this.errorCounter++;
                  if (scrollTop == "") {
                    scrollTop = data.id;
                  }
                  $("#error_" + data.id).text(errorTxt[1]);
                  console.log("rules 1 invalid: ", data.validation);
                }
              } else {
                // setting blank, previously filled data
                this.formInfo["fieldGroups"][sectionIndex][key]["fields"][key2][
                  "input"
                ] = "";
              }
            }
          }

          // If FieldGroups
          if(subArray[key].fieldGroups) {
            console.log('inside array fieldgroup');
            for(var key3 in subArray[key].fieldGroups) {
              let fieldsArr = subArray[key].fieldGroups[key3].fields;
              console.log("fieldsArr: ", fieldsArr);
              for (var key2 in fieldsArr) {
                console.log("inside fieldsArr");
                let data = fieldsArr[key2];
                // Evaluating default field
                if(data.default) {
                  eval(this.getFinalObject(data.default));
                }
                if (
                  this.checkVisibility(data.visibility) &&
                  this.checkVisibility(subArray[key].visibility)
                ) {
                  let errorTxt = this.getDescriptionTextArray(data.description);

                  console.log('error text id: ', data.id + key);

                  if (
                    data.mandatory == "1" &&
                    data.type == "checkbox" &&
                    data.input == false
                  ) {
                    this.errorCounter++;
                    if (scrollTop == "") {
                      scrollTop = data.id + key;
                    }
                    $("#error_" + data.id + key).text("This field is required");
                    console.log("invalid 1  mandatory:", data);
                  } else if (
                    data.type == "multi-select" &&
                    data.mandatory == "1" &&
                    data.input.length == 0
                  ) {
                    this.errorCounter++;
                    if (scrollTop == "") {
                      scrollTop = data.id + key;
                    }
                    $("#error_" + data.id + key).text("This field is required");
                  } else if (
                    data.mandatory == "1" &&
                    !data.input &&
                    data.input != "0"
                  ) {
                    this.errorCounter++;
                    if (scrollTop == "") {
                      scrollTop = data.id + key;
                    }
                    $("#error_" + data.id + key).text("This field is required");
                    //console.log('invalid 1 0000 mandatory:', data);
                  } else if (
                    data.input &&
                    data.pattern &&
                    this.checkPattern(data.input, data.pattern) == false
                  ) {
                    this.errorCounter++;
                    if (scrollTop == "") {
                      scrollTop = data.id + key;
                    }
                    $("#error_" + data.id + key).text(errorTxt[0]);
                    console.log("data.id: ", data.id);
                    console.log("rules 1: ", data.pattern);
                  } else if (
                    data.input &&
                    data.max &&
                    data.type == "number" &&
                    (data.input < data.min || data.input > data.max)
                  ) {
                    console.log("inside number: ", data);
                    this.errorCounter++;
                    if (scrollTop == "") {
                      scrollTop = data.id + key;
                    }
                    $("#error_" + data.id + key).text(
                      "Value should be between " + data.min + " and " + data.max
                    );
                    console.log(
                      "rules number 1 Incorrect: ",
                      data.validation,
                      data
                    );
                  } else if (
                    data.validation != null &&
                    data.input &&
                    this.checkValidation2(this.getExpWithIndex(data.validation, key), data.description) == false
                  ) {
                    this.errorCounter++;
                    if (scrollTop == "") {
                      scrollTop = data.id + key;
                    }
                    $("#error_" + data.id + key).text(errorTxt[1]);
                    console.log("rules 1 invalid: ", data.validation);
                  }
                } else {
                  // setting blank, previously filled data
                  this.formInfo["fieldGroups"][sectionIndex][key]["fields"][key2][
                    "input"
                  ] = "";
                }
              }
            }

              
          }
          
        }
      }

      // If Fields
      for (var key in subArray.fields) {
        let data = subArray.fields[key];
        // Evaluating default field
        if(data.default) {
          eval(this.getFinalObject(data.default));
        }
        if (this.checkVisibility(data.visibility)) {
          let errorTxt = this.getDescriptionTextArray(data.description);
          if (
            data.mandatory == "1" &&
            data.type == "checkbox" &&
            data.input == false
          ) {
            this.errorCounter++;
            if (scrollTop == "") {
              scrollTop = data.id;
            }
            $("#error_" + data.id).text("This field is required");
            console.log("invalid 1  mandatory:", data);
          } else if (
            data.mandatory == "1" &&
            !data.input &&
            data.input != "0"
          ) {
            this.errorCounter++;
            if (scrollTop == "") {
              scrollTop = data.id;
            }
            // console.log(scrollTop);
            console.log("invalid fields: mandatory: dt", data);
            $("#error_" + data.id).text("This field is required");
          } else if (
            data.input &&
            data.pattern &&
            this.checkPattern(data.input, data.pattern) == false
          ) {
            this.errorCounter++;
            if (scrollTop == "") {
              scrollTop = data.id;
            }
            $("#error_" + data.id).text(errorTxt[0]);
            console.log("data.id: ", data.id);
            console.log("rules 1 Incorrect: ", data.pattern);
          } else if (
            data.input &&
            data.max &&
            data.type == "number" &&
            (data.input < data.min || data.input > data.max)
          ) {
            console.log("inside number: f ", data);
            this.errorCounter++;
            if (scrollTop == "") {
              scrollTop = data.id;
            }
            $("#error_" + data.id).text(
              "Value should be between " + data.min + " and " + data.max
            );
            console.log("rules number Incorrect: ", data.validation);
          } else if (
            data.validation &&
            data.input
          ) {
            if(sectionIndex == 'healthQuestions' && this.checkArray(data.input)) {
                data.input.forEach((element, index) => {
                  if(this.checkValidation2(this.getExpWithIndex(data.validation, index), data.description) == false) {
                    this.errorCounter++;
                    console.log('inside checkvalidation 2 loop');
                    if (scrollTop == "") {
                      scrollTop = data.id;
                    }
                    $("#error_" + data.id + '_' + index).text(errorTxt[1]);
                    console.log("rules 1 invalid: ", data.validation);
                  }
                })
              } else {  
                if(this.checkValidation(data.validation, data.description) == false) {
                  this.errorCounter++;
                  console.log('inside checkvalidation pppppppppppp')
                  if (scrollTop == "") {
                    scrollTop = data.id;
                  }
                  $("#error_" + data.id).text(errorTxt[1]);
                  console.log("rules 1 invalid: ", data.validation);
                }
              }
          }
        } else {
          // setting blank, previously filled data
          this.formInfo["fieldGroups"][sectionIndex]["fields"][key]["input"] =
            "";
        }
      }

      // if (scrollTop != '') {
      //     var ele = document.getElementById(scrollTop);
      //     ele.scrollIntoView();
      //     ele.focus();
      //     ele.placeholder = ele.getAttribute("ph");
      // }

      // If FieldGroups
      for (var key in subArray.fieldGroups) {
        console.log('field groups key: ', key);
        let fieldsArr = subArray.fieldGroups[key].fields;
        for (var key2 in fieldsArr) {
          let data = fieldsArr[key2];
          // Evaluating default field
          if(data.default) {
            eval(this.getFinalObject(data.default));
          }
          if (
            this.checkVisibility(data.visibility) &&
            this.checkVisibility(subArray.fieldGroups[key].visibility)
          ) {
            let errorTxt = this.getDescriptionTextArray(data.description);
            if (
              data.mandatory == "1" &&
              data.type == "checkbox" &&
              data.input == false
            ) {
              this.errorCounter++;
              if (scrollTop == "") {
                scrollTop = data.id;
              }
              $("#error_" + data.id).text("This field is required");
              console.log("invalid 1  mandatory:", data);
            } else if (
              data.type == "multi-select" &&
              data.mandatory == "1" &&
              data.input.length == 0
            ) {
              this.errorCounter++;
              if (scrollTop == "") {
                scrollTop = data.id;
              }
              $("#error_" + data.id).text("This field is required");
            } else if (
              data.mandatory == "1" &&
              !data.input &&
              data.input != "0"
            ) {
              this.errorCounter++;
              if (scrollTop == "") {
                scrollTop = data.id;
              }
              $("#error_" + data.id).text("This field is required");
              //console.log('invalid 1 0000 mandatory:', data);
            } else if (
              data.input &&
              data.pattern &&
              this.checkPattern(data.input, data.pattern) == false
            ) {
              this.errorCounter++;
              if (scrollTop == "") {
                scrollTop = data.id;
              }
              $("#error_" + data.id).text(errorTxt[0]);
              console.log("data.id: ", data.id);
              console.log("rules 1: ", data.pattern);
            } else if (
              data.input &&
              data.max &&
              data.type == "number" &&
              (data.input < data.min || data.input > data.max)
            ) {
              console.log("inside number: ", data);
              this.errorCounter++;
              if (scrollTop == "") {
                scrollTop = data.id;
              }
              $("#error_" + data.id).text(
                "Value should be between " + data.min + " and " + data.max
              );
              console.log("rules number 1 Incorrect: ", data.validation, data);
            } else if (
              data.validation != null &&
              data.input &&
              this.checkValidation(data.validation, data.description) == false
            ) {
              this.errorCounter++;
              if (scrollTop == "") {
                scrollTop = data.id;
              }
              $("#error_" + data.id).text(errorTxt[1]);
              console.log("rules 1 invalid: ", data.validation);
            }
          
          } else {
            // setting blank, previously filled data
            this.formInfo["fieldGroups"][sectionIndex]["fieldGroups"][key][
              "fields"
            ][key2]["input"] = "";
          }
        }
      }

      if (scrollTop != "") {
        var ele = document.getElementById(scrollTop);
        console.log('kkkkkkkkk: ', scrollTop);
        ele.scrollIntoView();
        ele.focus();
        ele.placeholder = ele.getAttribute("ph");
      }

      console.log("this.errorCounter: ", this.errorCounter);
      if (this.errorCounter == "0") {
        this.submittedTab = sectionIndex;

        // If submitted index is insured members
        if(this.submittedTab == 'insuredMembers') {
          subArray.forEach((element, index) => {
            let dob = element["fieldGroups"]["insuredMemberPersonalDetails"]["fields"]["dateOfBirth"]["input"];
            this.requestJson.data.personalInformation.individualDetails[index]["dateOfBirth"] = dob;
            this.requestJson.data.personalInformation.individualDetails[index]["age"] = this.calculateAge(dob);
          })

          console.log('Updated request json = ', this.requestJson);
          this.getQuotationApi(this.requestJson, sectionIndex);
        } else {
          this.saveProposal(sectionIndex);
        }

        console.log("submitted data modified: ", this.formInfo);

        // Calling Save Proposal
        //this.saveProposal(sectionIndex);  
        //this.activeNextTab(sectionIndex);
      } else {
        //this.activeNextTab(sectionIndex);
      }
    },
    getExpWithIndex(exp, index) {
      //console.log("getExpWithIndex called: ", exp, index);
      let ind = "'" + index + "'";
      let result = exp.replace(/index/g, ind);
      return result;
    },
    getVisitibilityExp(exp, index) {
      console.log("getVisitibilityExp called: ", exp, index);
      let ind = "'" + index + "'";
      let result = exp.replace(/index/g, ind);
      //console.log('final index: ', ind);
      //console.log('final index result: ', result);
      return result;
    },
    getVisitibilityExpIndexZero(exp) {
      let length = this.proposalJson.fieldGroups.insuredMembers.length;
      let tempResult = "";
      for (var i = 0; i < length; i++) {
        if (i > 0) {
          tempResult += " || (" + exp.replace(/index/g, i) + ")";
        } else {
          tempResult = "(" + exp.replace(/index/g, i) + ")";
        }
      }
      return tempResult;
    },
    checkVisibility(value) {
      //console.log("check Visibility called: ", value);
      // default expression evalutiona added along with visibility
      if (value) {
        let obj = this.getFinalObject(value);
        try {
          return eval(obj);
        } catch (err) {
          console.log("error exp: ", value);
        }
      } else {
        return true;
      }
    },
    getDescriptionTextArray(str) {
      let tempArr = [];
      if (str) {
        var check = str.includes("#");
        if (check) {
          tempArr = str.split("#");
        } else {
          tempArr[0] = str;
          tempArr[1] = str;
        }
      } else {
        tempArr[0] = "";
        tempArr[1] = "";
      }

      return tempArr;
    },
    getDescriptionText(str) {
      let descText = "";
      if (str) {
        var check = str.includes("#");
        if (check) {
          let tempArr = str.split("#");
          descText = tempArr[0];
        } else {
          descText = str;
        }
      } else {
        descText = "";
      }
      return descText;
    },
    checkValidation(value, label = "") {
      //console.log('check Validation called: ', value);
      if (value) {
        let obj = this.getFinalObject(value);
        try {
          return eval(obj);
        } catch (err) {
          console.log("error exp 2: ", value);
          return true;
        }
      } else {
        //return false;
      }
    },
    checkValidation2(value, label = "") {
      console.log('check Validation 2 called: ', value);
      if (value) {
        let obj = this.getFinalObject(value);
        console.log('Validation 2 obj: ', obj);
        try {
          return eval(obj);
        } catch (err) {
          console.log("error exp 2: ", value);
          return true;
        }
      } else {
        //return false;
      }
    },
    getFinalObject(tempResponse) {
      //console.log('tempResponse: ', tempResponse)
      var tempString = JSON.stringify(tempResponse);
      var updatedString = tempString.replace(
        /'input' in formInfo\[/g,
        "formInfo["
      );
      var updatedString2 = updatedString.replace(
        /formInfo\[/g,
        "this.formInfo["
      );
      //var updatedString3 = updatedString2.replace(/this.this./g, "this.");
      //console.log('final String: ', updatedString3);
      return JSON.parse(updatedString2);
    },
    getMemberWiseInput(healthQues) {
      console.log("getMemberWiseInput: ", healthQues);
      var tempString = JSON.stringify(healthQues);
      //console.log('hhhhhhhhhhhhhhhh: ', tempString);membersInputJson
      //var updatedString = tempString.replace(/"input":""/g, '"input":[{"memberSequenceNumber": "1","answer": "0"},{"memberSequenceNumber": "2","answer": "0"},{"memberSequenceNumber": "3","answer": "0"}]');
      var updatedString = tempString.replace(
        /"input":""/g,
        '"input":' + JSON.stringify(this.membersInputJson)
      );
      //console.log('getMemberWiseInput: updated', JSON.parse(updatedString));
      return JSON.parse(updatedString);
    },
    activeNextTab(currentTab) {
      console.log("active next tab called", this.tabsArr);
      let ckk = this.checkVisibility(this.formInfo['fieldGroups'][currentTab]['visibility']);
      if(ckk == true) {
        // Setting Up Filled Tab on localstorage
        let filledDataTab=""
        if(JSON.parse(sessionStorage.getItem("filledDataTab")))
        {
          filledDataTab = JSON.parse(sessionStorage.getItem("filledDataTab"))
        }
        if(this.tabsArr.indexOf(currentTab) ==0 && !filledDataTab)
        {
          localStorage.setItem("filledDataTab", JSON.stringify(currentTab));
          sessionStorage.setItem("filledDataTab", JSON.stringify(currentTab));
        }
        else if(this.tabsArr.indexOf(currentTab)>=this.tabsArr.indexOf(filledDataTab))
        {
          localStorage.setItem("filledDataTab", JSON.stringify(currentTab));
          sessionStorage.setItem("filledDataTab", JSON.stringify(currentTab));
        }
     
        localStorage.setItem("filledData", JSON.stringify(this.formInfo));
        sessionStorage.setItem("filledData", JSON.stringify(this.formInfo)); 
      }

      var tabIndex = this.tabsArr.indexOf(currentTab);
      let nextTab;
      //console.log('tab index: ', tabIndex)
      if (tabIndex < this.tabsArr.length - 1) {
        nextTab = this.tabsArr[tabIndex + 1];
        //console.log('next tab: ', nextTab);
      } else {
        // If conntrol is on last tab
        console.log("inside: conntrol is on last tab");
        this.$router.push('/proposer-details-check');
      }
      if (nextTab) {
        this.activeTab(nextTab);
      }
    },
    activeTabAfterReload(filledDataTab)
    {
      let tabIndex=this.tabsArr.indexOf(filledDataTab)
      for(let i=0;i<=tabIndex;i++)
      {
        let tab=this.tabsArr[i];
        if ($("#proposalId_" + tab).hasClass("show active")) {
          $("#proposalId_" + tab).removeClass("show active");
        }

        if ($("#tablink_" + tab).hasClass("disabled")) {
          $("#tablink_" + tab).removeClass("disabled");
          $("#tablinka_" + tab).removeClass("disabled");
        }
        $("#tablink_" + tab).addClass('active');
        $("#tablinka_" + tab).addClass('active');
        $("#tablinka_" + tab).attr("aria-selected", "true");
      }
      $("#proposalId_" + filledDataTab).addClass('show active');
    },
    activeTab(tabToActive) {
      console.log("ativeTab Called", tabToActive);

      // Scroll Top
      this.scrollToTop();

      console.log(
        "vb logic: ",
        this.formInfo["fieldGroups"][tabToActive]["visibility"]
      );
      let ckk = this.checkVisibility(
        this.formInfo["fieldGroups"][tabToActive]["visibility"]
      );
      if (ckk == true) {
        //console.log('this.tabsArr', this.tabsArr)
        this.currentTab = tabToActive;
        sessionStorage.setItem("currentTab", JSON.stringify(this.currentTab));

        for (var i = 0; i < this.tabsArr.length; i++) {
          var tab = this.tabsArr[i];
          if ($("#step" + tab + "-tab").hasClass("active")) {
            console.log("inside tab active");
            $("#step" + tab + "-tab").removeClass("active");
            $("#step" + tab + "-tab").attr("aria-selected", "false");
            $("#step" + tab + '-tab').addClass("disabled");
            $("#step" + tab).removeClass("show active");
          }
        }
        if ($("#step" + tabToActive + "-tab").hasClass("disabled")) {
          $("#step" + tabToActive + "-tab").removeClass("disabled");
        }
        $("#step" + tabToActive + "-tab").addClass("active");
        $("#step" + tabToActive).addClass("show active");
        $("#step" + tabToActive + "-tab").attr("aria-selected", "true");
      } else {
        this.activeNextTab(tabToActive);
      }
    },
    goBack() {
      this.currentTab = JSON.parse(sessionStorage.getItem("currentTab"));
      console.log("current tab: ", this.currentTab);
      var tabIndex = this.tabsArr.indexOf(this.currentTab);
      this.activePrevTab(this.currentTab);
    },
    activePrevTab(tabToActive) {
      console.log("active prev tab called", this.tabsArr);
      var tabIndex = this.tabsArr.indexOf(tabToActive);
      if (tabIndex > 0) {
        console.log("inside prev tab true");
        if(tabToActive != 'traceInfo' && tabToActive != 'distributor') {
          let prevTab = this.tabsArr[tabIndex - 1];
          //console.log('uuu: ', this.formInfo['fieldGroups'][prevTab]['visibility']);
          let ckk = this.checkVisibility(
            this.formInfo["fieldGroups"][prevTab]["visibility"]
          );
          if (ckk == true) {
            this.activeTab(prevTab);
          } else {
            this.activePrevTab(prevTab);
          }
        }
      } else {
        this.$router.push("/addon-rider");
      }
    },
    convertInLakh(amt) {
      if (amt < 10000000) {
        return amt / 100000 + " Lac";
      } else {
        return amt / 10000000 + " Cr.";
      }
    },
    getSelectedPremium(pTerm) {
      let itemIndex =
        this.selectedPlan.productDetails.premiumForEachPolicyTerm.findIndex(
          (item) => item.policyTerm == pTerm
        );
      if (itemIndex > -1) {
        return this.selectedPlan.productDetails.premiumForEachPolicyTerm[
          itemIndex
        ];
      }
    },
    getSelectedPolicyIndex(pTerm) {
      console.log('getSelectedPolicyIndex called: ', pTerm)
      let itemIndex =
        this.selectedPlan.productDetails.premiumForEachPolicyTerm.findIndex(
          (item) => item.policyTerm == pTerm
        );
      if (itemIndex > -1) {
        return itemIndex;
      }
    },
    checkPattern(value, pattern) {
      try {
        return eval(eval(pattern).test(value));
      } catch {
        console.log("Invalid regular expression: ", pattern);
        return true;
      }
    },
    getPincodeDetails(pincode) {
      console.log('getPincodeDetails called: ', pincode);
      var headers = {
        Authorization: "Basic " + window.btoa(process.env.VUE_APP_USERNPASS),
        "Content-Type": "application/json",
      };
      let reqData = [pincode];
      //this.loading = true;
      this.backendApi("getPincodeInfo", reqData, headers, "get")
      .then((response) => {
        //this.loading = false;
        if (response == "error") {
          //this.apiError = true;
          console.log("pincode api error: block");
        } else if (response && response.data) {
          //console.log('pincode response: ', response.data.data);
          let v = response.data.data[0];
          sessionStorage.setItem("pincode_data", JSON.stringify(v));
          // Setting Pincode Data
          this.formInfo.fieldGroups.proposerDetails.fieldGroups.communicationAddressDetails.fields.zipCode.input = pincode;
          this.formInfo.fieldGroups.proposerDetails.fieldGroups.communicationAddressDetails.fields.cityDistrict.input = v.city;
          this.formInfo.fieldGroups.proposerDetails.fieldGroups.communicationAddressDetails.fields.state.input = v.state;
          this.formInfo.fieldGroups.proposerDetails.fieldGroups.communicationAddressDetails.fields.nationality.input = v.country;
        }
      })
      .catch((error) => {
        console.log("error msg block getting pincode info", error);
        //this.loading = false;
        //this.apiError = true;
      });
    },
    getPincodeDetails2(pincode, ind1, ind2) {
      console.log('getPincodeDetails called: ', pincode);
      var headers = {
        Authorization: "Basic " + window.btoa(process.env.VUE_APP_USERNPASS),
        "Content-Type": "application/json",
      };
      let reqData = [pincode];
      //this.loading = true;
      this.backendApi("getPincodeInfo", reqData, headers, "get")
      .then((response) => {
        //this.loading = false;
        if (response == "error") {
          //this.apiError = true;
          console.log("pincode api error: block");
        } else if (response && response.data) {
          let v = response.data.data[0];
          sessionStorage.setItem("pincode_data", JSON.stringify(v));
          // Setting Pincode Data
          this.formInfo["fieldGroups"][ind1]["fieldGroups"][ind2]["fields"]["cityDistrict"]["input"] = v.city;
          this.formInfo["fieldGroups"][ind1]["fieldGroups"][ind2]["fields"]["state"]["input"] = v.state;
          this.formInfo["fieldGroups"][ind1]["fieldGroups"][ind2]["fields"]["nationality"]["input"] = v.country;
        }
      })
      .catch((error) => {
        console.log("error msg block getting pincode info", error);
        //this.loading = false;
        //this.apiError = true;
      });
    },
    getValidation(event, name, id, ind1 = "", ind2 = "", ind3 = "") {
      self = this;
      $("#error_" + id).text('');
      let val = event.target.value;
      // console.log('getValidation called');
      // console.log('ev: ', event);
      // console.log('id: ', id);
      console.log('event: ', val);
      console.log('field name: ', name);
      console.log('ind1: ', ind1, 'ind2: ', ind2, 'ind3: ', ind3)

      if(name == 'weight' || name == 'height') {
        let testString = this.formInfo["fieldGroups"][ind1][ind2]["fieldGroups"][ind3]["fields"]["insuredBMI"]["default"];
        eval(this.getFinalObject(testString));
      }
      console.log('len: ', val.length);
      if(name == 'zipCode' && val.length == 6) {
        console.log('zipcode completed');
        this.getPincodeDetails2(val, ind1, ind2, ind3);
      }
      //console.log('path: ', path);
    },
    getDateFormat(dt) {
      let arr = dt.split("-");
      return arr['2']+'-'+arr['1']+'-'+arr['0'];
    },
    getSalutation(strToMatch, gen) {
      console.log('getSalutation : ', strToMatch, gen);
      if(strToMatch == 'self') {
        if(gen == 'Male') {
          return 'mr';
        } else {
          if(this.userData.selectedMember.indexOf('Spouse') > -1){
            return 'mrs';
          } else {
            return 'ms';
          }
        }
      } else if(strToMatch == 'spouse') {
        if(gen == 'Male') {
          return 'mr';
        } else {
          return 'mrs';
        }
      } else if(strToMatch == 'son' || strToMatch == 'father' || strToMatch == 'father-in-law') {
        return 'mr';
      } else if(strToMatch == 'daughter') {
        return 'ms';
      } else {
        return 'mrs';
      }
    },
    getSalutation2(gen) {
      if(gen == 'Male') {
        return 'mr';
      } else {
        if(this.userData.selectedMember.indexOf('Spouse') > -1){
          return 'mrs';
        } else {
          return 'ms';
        }
      }
    },
    checkRelationString(strToMatch, arrList, gen) {
      var retStr = "";
      if(strToMatch == 'spouse') {
        if(gen == 'Male') {
          retStr = 'husband';
        } else {
          retStr = 'wife';
        }
      } else {
        for (var key in arrList) {
          let tempStr = arrList[key]["Value"];
          if (tempStr == strToMatch) {
            retStr = tempStr;
          } else if (tempStr.indexOf(strToMatch) >= 0) {
            retStr = tempStr;
          }
        }
      }
      return retStr;
    },
    checkIfDependent(strToMatch, age) {
      if(strToMatch == 'spouse') {
        if(age < 21) {
          return 'Yes';
        } else {
          return 'No';
        }
      } else if(strToMatch == 'self') {
        return 'No';
      } else {
        return 'Yes';
      }
    },
    getMaritalStatus(strToMatch, gen) {
      console.log('getMaritalStatus called');
      if(strToMatch == 'Spouse') {
        return 'married';
      } else if(strToMatch == 'Self') {
        if(this.userData.selectedMember.indexOf('Spouse')) {
          return 'married';
        } else {
          return 'single';
        }
      } else if(strToMatch == 'Son' || strToMatch == 'Daughter') {
        return 'single';
      } else {
        return "";
      }
    },
    getMaritalStatusForProposer() {
      if(this.userData.selectedMember.indexOf('Spouse') || this.userData.selectedMember.indexOf('Son') || this.userData.selectedMember.indexOf('Daughter')) {
        return 'married';
      } else {
        return 'single';
      }
    },
    getQuotationApi(reqData, sectionIndex) {
      var self = this;
      this.loading = true;
      console.log('get quotation called');
      // Save request json  
      sessionStorage.setItem("request_json", JSON.stringify(reqData));
      let headers = {};

      this.backendApi("getQuotation", reqData, headers)
        .then((response) => {
          this.loading = false;

          if (response.status == "error") {
            
            let msg = [response.data.detail];
            this.$router.push({ path: '/networkalert', query: {backUrl:'addonrider-page', msg: msg }});

          } else if(response.data.errors.length>0) {
            
            let msg = [];
            for(let i=0; i<response.data.errors.length; i++)
            {
              msg.push(response.data.errors[i]["errorIdentifier"]);
            } 
            this.$router.push({ path: '/networkalert', query: {backUrl:'addon-rider',msgError:"We are facing some issue while fetching policy details data",reqId:response.data.reqId, msg:msg  }});

          } else if (response.data.data.quote && response.data.data.quote.length > 0) {
            
            // Success response
            this.newQuoteResponseID = response.data.reqId;
            this.newResponseData = response.data.data.quote[0];
            this.newSelectedPlan = this.newResponseData;
            console.log('SQ Response New: ', this.responseData);

            if(this.newSelectedPlan?.productDetails?.premiumForEachPolicyTerm[this.selectedPolicyIndex]?.premiumForEachPPO[0]?.premiumForEachPPF[0]?.totalPremiumValue != this.selectedPlan?.productDetails?.premiumForEachPolicyTerm[this.selectedPolicyIndex]?.premiumForEachPPO[0]?.premiumForEachPPF[0]?.totalPremiumValue) {
              this.customModal = true;
              this.currentSectionIndex = sectionIndex;
              this.currentQuoteResponseData = response.data.data;

            } else {
              this.quoteResponseID = this.newQuoteResponseID;
              this.responseData = this.newResponseData;
              this.selectedPlan = this.newSelectedPlan;
              sessionStorage.setItem("quote_response_id", JSON.stringify(this.quoteResponseID));
              sessionStorage.setItem("selected_plan_data", JSON.stringify(this.selectedPlan));
              this.saveProposal(sectionIndex);
              this.saveQuote(response.data.data);
            }

          } else if(response.data.errors.length == 0 && Object.keys(response.data.data).length === 0) {

            this.pollRequestId = response.data.reqId;
            /* this.errorFlag= true;
            setTimeout(function() {
              self.getPolicy();
              self.pollData();
            },1000); */

          }
          

        })
        .catch((error) => {
          console.log('error msg block : get policy', error);
          self.loading = false;
        });
    },
    calculateAge(birthday) { 
      console.log('calculateAge called: ', birthday);
      var ageDifMs = Date.now() - new Date(birthday).getTime();
      var ageDate = new Date(ageDifMs); 
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    },
    saveQuote (apiData) {
      if(sessionStorage.getItem('sp_details_data'))
      {
        console.log("sp details not present");
      }
      console.log('save quote called', apiData);
      var  headers = {
        Authorization: "Basic " + window.btoa(process.env.VUE_APP_DATA_PER_USERNPASS),
        "Content-Type": "application/json",
      };
      //console.log('this.apiData ll ', this.apiData);
      let qData = {
        "life_assured_name": this.userData.contactDetails.firstName,
        "mobile_number": this.userData.contactDetails.mobileNumber,
        "dob": "",
        "gender": this.userData.gender,
        "zipcode": this.userData.zipCode,
        "annual_income": "",
        "employee_type": "",
        //"education": this.requestJson.data.personalInformation.individualDetails[0].qualification,
        "education": "",
        "smoker": "",
        "type_of_quote": this.requestJson.data.typeOfQuote,
        "rm_code": this.requestJson.data.distributor.agentID,
        "rm_info_json": JSON.stringify(this.requestJson.data.distributor),
        "quote_request_json": JSON.stringify({ data: apiData.request })
      };
      //console.log('qData: ', qData);
      this.backendApi("saveQuote", qData, headers)
        .then((response) => {
          //console.log('save quote response: ', response);
          if(response == 'error') {
            self.apiError = true;

            //   let msg=['We are facing some issue while saving quote data']

            // this.$router.push({ path: '/alert', query: {backUrl:'policy-details', msg: msg }});
          }
          else if(response.status=="error")
          {
            //let msg=['We are facing some issue while saving quote data']

            //this.$router.push({ path: '/networkalert', query: {backUrl:'addon-rider', msg: msg }});
          }
          else if(response && response.data){
            
            this.uiQuoteId = response.data.data.ui_quote_id;
            sessionStorage.setItem("uiQuoteId", JSON.stringify(this.uiQuoteId));
            /*if (sessionStorage.getItem('proposal_ui_id')) {
              sessionStorage.removeItem('proposal_ui_id');
            }*/
            console.log('before calling getQuotationApi - ', apiData);
            // this.getQuotationApi(apiData)
            console.log('ui quote id: ', this.uiQuoteId)
            // Quote response api section
            
            let qResData = {
              "ui_quote_id": this.uiQuoteId,
              "quote_response_id": this.quoteResponseID,
              "annual_income": this.userData.annualincome,
              "quote_response_data": JSON.stringify(apiData.quote),
            };
            this.saveQuoteResponse(qResData);
            
          }
        })
        .catch((error) => {
          console.log('error msg block dp', error);
          // alert("Unable to save Quote please refresh the page")
              let msg=['We are facing some issue from backend while saving quote data']
            this.$router.push({ path: '/networkalert', query: {backUrl:'policy-details', msg: msg }});
        });
    },
    saveQuoteResponse(quoteResData) {
      var  headers={
        Authorization: "Basic " + window.btoa(process.env.VUE_APP_DATA_PER_USERNPASS),
        "Content-Type": "application/json",
      };
      this.backendApi("saveQuoteResponse", quoteResData, headers)
        .then((response) => {
          //console.log('save quote response: ', response);
          if(response == 'error') {
            self.apiError = true;
            // let msg=['We are facing some issue while saving quote response data']

            // this.$router.push({ path: '/alert', query: {backUrl:'policy-details', msg: msg }});
          }
          // else if(response.status=="error")
          // {
          //   let msg=['We are facing some issue while saving quote response data']

          //   this.$router.push({ path: '/alert', query: {backUrl:'policy-details', msg: msg }});
          // }
          else if(response && response.data) {
            //this.uiQuoteId = response.data.data.ui_quote_id;
            //console.log('ui quote id: ', this.uiQuoteId)
            /* let logData = {
              "ui_quote_id": this.uiQuoteId,
              "quote_request_id": this.quoteRequestID,
              "mobile_number": this.userData.mobile,
              "dob": this.userData.dob,
              "page_name": "policydetails",
              "tag_name": "",
              "data": JSON.stringify(this.selectedData)
            };
            this.saveLogData(logData); */
          }
        })
        .catch((error) => {
          console.log('error msg block dp', error);
          // let msg=['We are facing some issue from backend']

          // this.$router.push({ path: '/alert', query: {backUrl:'policy-details', msg: msg }});
          // alert("Unable to save Quote Response please refresh the page")
        });
    },
    acceptAndContinue() {
      this.customModal = false;
      console.log('acceptAndContinue called');
      this.quoteResponseID = this.newQuoteResponseID;
      this.responseData = this.newResponseData;
      this.selectedPlan = this.newSelectedPlan;
      sessionStorage.setItem("quote_response_id", JSON.stringify(this.quoteResponseID));
      sessionStorage.setItem("selected_plan_data", JSON.stringify(this.selectedPlan));
      this.saveProposal(this.currentSectionIndex);
      this.saveQuote(this.currentQuoteResponseData);
    },
    closeCustomModel() {
      this.customModal = false;
    },
    scrollToTop() {
      $('html, body').animate({ scrollTop: 0 }, 'fast');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
